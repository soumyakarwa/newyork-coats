// coats.js
import { gridToSvgCoordinates } from "./util.js";
import { createRandomDotsInEllipse } from "./lines.js";
import * as Constants from "./constants.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Function to draw ellipses for coats along the street path
export function drawCoatsAlongStreet(group, coats, streets) {
  coats.forEach((coat) => {
    const streetVertices = streets[coat.Street];

    if (!streetVertices) {
      console.error(`No vertices defined for street ${coat.Street}`);
      return;
    }

    const yPosition = findYForX(coat.X, streetVertices);
    const currentColor = coat.ColorName;
    console.log(
      `Coat color for ${currentColor} is ${Constants.dataColors[currentColor]}`
    );

    if (yPosition !== null) {
      const [finalX, finalY] = gridToSvgCoordinates(coat.X, yPosition - 0.45);
      drawCoat(
        group,
        Constants.coatEllipseNumber,
        finalX,
        finalY,
        Constants.coatRx,
        Constants.coatRy,
        Constants.dataColors[`${currentColor}`],
        currentColor
      );
    } else {
      console.error(
        `Could not find y-position for coat at x=${coat.x} on street ${coat.street}`
      );
    }
  });
}

function drawCoat(group, numberOfDots, cx, cy, rx, ry, clr, clrName) {
  var dots = createRandomDotsInEllipse(numberOfDots, cx, cy, rx, ry);

  dots = dots.map((dot) => ({ ...dot, color: clrName }));

  group
    .selectAll(`.coat-${clrName}`)
    .data(dots)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", Constants.coatEllipseSize)
    .style("fill", clr)
    .style("opacity", (d) => 1);
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

export function filterCoatsByColor(group, selectedColor) {
  const transitionDuration = 750;
  const defaultRadius = Constants.coatEllipseSize;

  group
    .selectAll(".dot")
    .transition() // Start a transition
    .duration(transitionDuration) // Set its duration
    .style("opacity", 0) // Start with 0 opacity for all
    .transition() // Start another transition for opacity change
    .duration(transitionDuration)
    .attr("r", (d) =>
      selectedColor === "all" || d.color === selectedColor ? defaultRadius : 0
    ) // Change radius based on condition
    .style("opacity", (d) =>
      selectedColor === "all" || d.color === selectedColor ? 1 : 0
    ) // Fade in if selected, fade out if not
    .on("start", function (d) {
      // When the transition starts, set display to block if the dot should be visible
      d3.select(this).style(
        "display",
        selectedColor === "all" || d.color === selectedColor ? null : "none"
      );
    });
}
