// Map.js
import { createRandomDotsInPolygon } from "./lines.js";
import { convertingVerticesSet } from "./util.js";

import * as Constants from "./constants.js";

export function mapReplica(group) {
  drawAvenues(group);
  drawStreet(group);
}

function drawAvenues(group) {
  drawRoad(Constants.sixthAve, group, 50000);
  drawRoad(Constants.fifthAve, group, 48000);
  drawRoad(Constants.broadwayAve, group, 60000);
  drawRoad(Constants.uniPlacePt1, group, 55000);
  drawRoad(Constants.uniPlacePt2, group, 3000);
}

function drawStreet(group) {
  drawRoad(Constants.street8, group, 300000);
  drawRoad(Constants.street9, group, 300000);
  drawRoad(Constants.street10, group, 320000);
  drawRoad(Constants.street11, group, 320000);
  drawRoad(Constants.street12, group, 320000);
  drawRoad(Constants.street13, group, 320000);
  drawRoad(Constants.street14, group, 320000);
}

function drawRoad(vertices, group, numberOfDots) {
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
    .attr("r", Constants.roadEllipseSize)
    .style("fill", "#333F47")
    .style("opacity", (d) => d.density);
}
