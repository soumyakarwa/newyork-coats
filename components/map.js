// Map.js

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { createRandomDots, createRandomDotsInPolygon } from "./lines.js";
import { verticalGridSpacing, horizontalGridSpacing } from "../app.js";

export function mapReplica(group) {
  drawAvenues(group);
}

function drawAvenues(group) {
  var avenue1Vertices = [
    [0, 13.5], // Vertex 1
    [0, 14], // Vertex 2
    [15.2, 2.2], // Vertex 3
    [14.8, 1.9], // Vertex 4
  ];

  var avenue2Vertices = [
    [25.7, 25.3],
    [26.2, 25.5],
    [32, 8.2],
    [31.5, 7.8],
  ];

  drawLine(avenue1Vertices, group);
  drawLine(avenue2Vertices, group);
}

function gridToSvgCoordinates(verticalLineIndex, horizontalLineIndex) {
  const svgX = verticalLineIndex * verticalGridSpacing;
  const svgY = horizontalLineIndex * horizontalGridSpacing;

  return [svgX, svgY];
}

function convertingVerticesSet(vertices) {
  var svgVertices = vertices.map((vertex) => {
    // Convert grid coordinates to SVG coordinates
    const gridPoint = gridToSvgCoordinates(vertex[0], vertex[1]);
    return gridPoint;
  });
  return svgVertices;
}

function drawLine(vertices, group) {
  vertices = convertingVerticesSet(vertices);

  var dots = createRandomDotsInPolygon(50000, vertices);

  group
    .selectAll("avenue1")
    .data(dots)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 1.95)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
}
