// coats.js
import { gridToSvgCoordinates } from "./util.js";
import { createRandomDotsInEllipse } from "./lines.js";
import * as Constants from "./constants.js";

// Function to draw ellipses for coats along the street path
export function drawCoatsAlongStreet(group, coats, streets) {
  coats.forEach((coat) => {
    const streetVertices = streets[coat.Street];

    if (!streetVertices) {
      console.error(`No vertices defined for street ${coat.Street}`);
      return;
    }

    const yPosition = findYForX(coat.X, streetVertices);

    if (yPosition !== null) {
      const [finalX, finalY] = gridToSvgCoordinates(coat.X, yPosition);
      // drawCoat(
      //   group,
      //   Constants.coatEllipseNumber,
      //   finalX,
      //   finalY,
      //   Constants.coatRx,
      //   Constants.coatRy,
      //   coat.ColorHex
      // );
      group
        .append("ellipse")
        .attr("cx", finalX)
        .attr("cy", finalY)
        .attr("rx", Constants.coatRx)
        .attr("ry", Constants.coatRy)
        .attr("fill", coat.ColorHex);
    } else {
      console.error(
        `Could not find y-position for coat at x=${coat.x} on street ${coat.street}`
      );
    }
  });
}

function drawCoat(group, numberOfDots, cx, cy, rx, ry, clr) {
  var dots = createRandomDotsInEllipse(numberOfDots, cx, cy, rx, ry);

  group
    .selectAll("avenue1")
    .data(dots)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", Constants.coatEllipseSize)
    .style("fill", clr)
    .style("opacity", (d) => d.density);
}

// A helper function to find the y-position for a given x along a piecewise linear path
function findYForX(x, vertices) {
  for (let i = 0; i < vertices.length - 1; i++) {
    const [x1, y1] = vertices[i];
    const [x2, y2] = vertices[i + 1];
    if ((x1 <= x && x <= x2) || (x2 <= x && x <= x1)) {
      // Linear interpolation formula
      const t = (x - x1) / (x2 - x1);
      return (
        y1 + t * (y2 - y1) - Constants.coatRy / Constants.numHorizontalLines
      );
    }
  }
  return null; // Return null if x is not within the range of the vertices
}
