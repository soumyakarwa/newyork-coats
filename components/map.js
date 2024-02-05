// Map.js
import { createRandomDotsInPolygon } from "./lines.js";
import { convertingVerticesSet } from "./util.js";
import { placeStreetLabel, placeAvenueLabel } from "./labels.js";

import * as Constants from "./constants.js";

export function mapReplica(mapGroup, labelsGroup) {
  drawAvenues(mapGroup);
  drawStreet(mapGroup);
  const streetNumbers = Object.keys(Constants.streets);

  streetNumbers.forEach((streetNumber) => {
    const streetCoordinates = Constants.streets[streetNumber];
    const streetName = `${streetNumber}`;
    placeStreetLabel(labelsGroup, streetCoordinates, streetName);
  });

  placeAvenueLabel(labelsGroup, Constants.sixthAve, "Sixth Ave");
  placeAvenueLabel(labelsGroup, Constants.fifthAve, "Fifth Ave");
  placeAvenueLabel(labelsGroup, Constants.universityPl, "University Pl");
  placeAvenueLabel(labelsGroup, Constants.broadwayPt1, "Broadway");
}

function drawAvenues(group) {
  drawRoad(Constants.sixthAve, group, 45000);
  drawRoad(Constants.fifthAve, group, 30000);
  drawRoad(Constants.universityPl, group, 40000);
  drawRoad(Constants.broadwayPt1, group, 45000);
  drawRoad(Constants.broadwayPt2, group, 3000);
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
  group.append("polygon").attr("points", vertices).style("fill", "#FFFFF0");
}
