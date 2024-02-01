// Map.js

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { createRandomDots, createRandomDotsInPolygon } from "./lines.js";
import { verticalGridSpacing, horizontalGridSpacing } from "../app.js";

export function mapReplica(group) {
  drawAvenues(group);
  drawStreet(group);
}

function drawAvenues(group) {
  var avenue1Vertices = [
    [0, 13.5],
    [0, 14],
    [15.2, 2.2],
    [14.8, 1.9],
  ];

  var avenue2Vertices = [
    [25.7, 25.3],
    [26.2, 25.5],
    [32, 8.2],
    [31.5, 7.8],
  ];

  var avenue3Vertices = [
    [36.3, 30],
    [36.8, 30],
    [41.5, 12],
    [41.2, 11.2],
  ];

  var avenue4Vertices = [
    [36.7, 11.2],
    [35.9, 10.8],
    [51.5, 28.8],
    [52, 28.5],
  ];

  var avenue5Vertices = [
    [51.5, 28.8],
    [52, 28.5],
    [53, 37],
    [52.8, 37],
  ];

  drawLine(avenue1Vertices, group, 50000);
  drawLine(avenue2Vertices, group, 48000);
  drawLine(avenue3Vertices, group, 60000);
  drawLine(avenue4Vertices, group, 55000);
  drawLine(avenue5Vertices, group, 3000);
}

function drawStreet(group) {
  var street8 = [
    [0, 13],
    [0, 13.3],
    [53, 35.1],
    [53, 34.9],
  ];
  var street9 = [
    [0.5, 10],
    [1.3, 10],
    [53, 31.9],
    [53, 32.2],
  ];
  var street10 = [
    [0.5, 7.3],
    [0.7, 7.1],
    [52, 28.5],
    [51.8, 28.8],
  ];
  var street11 = [
    [0.8, 4.3],
    [0.5, 4.5],
    [52.5, 25.5],
    [52.8, 25.2],
  ];
  var street12 = [
    [2.9, 3.1],
    [3.1, 3],
    [52, 22.8],
    [51.8, 23],
  ];
  var street13 = [
    [5.3, 2.3],
    [5.1, 2],
    [51.2, 20.5],
    [51.4, 20.8],
  ];
  var street14 = [
    [6.8, 1.2],
    [6.6, 1],
    [50.5, 18.5],
    [50.7, 18.8],
  ];
  drawLine(street8, group, 300000);
  drawLine(street9, group, 300000);
  drawLine(street10, group, 320000);
  drawLine(street11, group, 320000);
  drawLine(street12, group, 320000);
  drawLine(street13, group, 320000);
  drawLine(street14, group, 320000);
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

function drawLine(vertices, group, numberOfDots) {
  vertices = convertingVerticesSet(vertices);

  var dots = createRandomDotsInPolygon(numberOfDots, vertices);

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
