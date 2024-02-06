// labels.js
import { gridToSvgCoordinates } from "./util.js";
import * as Constants from "./constants.js";

/**
 *
 * @param {*} streetCoordinates
 * @returns
 */
function getTopEdge(streetCoordinates) {
  // Group the coordinates by x-difference
  streetCoordinates.sort((a, b) => a[0] - b[0]);
  const groups = [];
  let currentGroup = [streetCoordinates[0]];

  for (let i = 1; i < streetCoordinates.length; i++) {
    // If the x-difference between points is small, consider them in the same group
    if (
      Math.abs(
        streetCoordinates[i][0] - currentGroup[currentGroup.length - 1][0]
      ) < 1
    ) {
      // adjust threshold as needed
      currentGroup.push(streetCoordinates[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [streetCoordinates[i]];
    }
  }
  groups.push(currentGroup); // Push the last group

  // Function to determine the "top" point from a group
  function getTopPoint(group) {
    return group.reduce(
      (topPoint, point) => {
        if (
          point[1] < topPoint[1] ||
          (point[1] === topPoint[1] && point[0] > topPoint[0])
        ) {
          return point;
        }
        return topPoint;
      },
      [Infinity, Infinity]
    );
  }

  // Get the top points from each group
  const topPoints = groups.map(getTopPoint);

  // Identify left and right points
  topPoints.sort((a, b) => a[0] - b[0]);
  const [topLeft, topRight] = topPoints;

  return { topLeft, topRight };
}

/**
 *
 * @param {*} group
 * @param {*} streetCoordinates
 * @param {*} streetName
 */
export function placeStreetLabel(group, streetCoordinates, streetName) {
  // Get the top edge points
  const { topLeft, topRight } = getTopEdge(streetCoordinates);
  const [x1, y1] = topLeft;
  const [x2, y2] = topRight;

  // Calculate the angle of the line segment relative to the horizontal
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI); // Convert to degrees

  const [finalX, finalY] = gridToSvgCoordinates(x1 - 0.75, y1 - 0.75);
  // Create a group for the text to apply the rotation
  const textGroup = group
    .append("g")
    .attr("transform", `translate(${finalX}, ${finalY}) rotate(${angle})`);

  // Append the text to the group
  textGroup
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "start") // Start the text at the beginning of the line
    .style("font-size", Constants.labelSize)
    .style("fill", Constants.roadColor)
    .text(`W ${streetName}`);

  // If "ST" needs to be a superscript, append a tspan for it
  textGroup
    .select("text")
    .append("tspan")
    .attr("baseline-shift", "super")
    .attr("font-size", toString(0.6 * parseFloat(Constants.labelSize)))
    .style("fill", Constants.roadColor)
    .text("st");
}

export function placeAvenueLabel(group, avenueCoordinates, avenueName) {
  const [finalX, finalY] = gridToSvgCoordinates(
    avenueCoordinates[3][0] + 0.5,
    avenueCoordinates[3][1]
  );

  group
    .append("text")
    .attr("x", finalX)
    .attr("y", finalY)
    .style("text-anchor", "start") // Start the text at the beginning of the line
    .style("font-size", Constants.labelSize)
    .style("fill", Constants.roadColor)
    .text(avenueName);
}

export function placeCoatCountLabel(group, count) {
  const [finalX, finalY] = gridToSvgCoordinates(
    Constants.street8[3][0] - 8,
    Constants.street8[3][1]
  );

  group
    .append("text")
    .attr("x", finalX)
    .attr("y", finalY)
    .style("text-anchor", "start") // Start the text at the beginning of the line
    .style("font-size", Constants.labelSize)
    .style("fill", Constants.roadColor)
    .text(`Coat Count: ${count}`);
}
