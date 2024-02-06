// visualization.js
import { mapReplica } from "./map.js";
import * as Constants from "./constants.js";
import { drawCoatsAlongStreet } from "./coats.js";
import { dropdownFilter } from "./filter.js";
import { gridToSvgCoordinates } from "./util.js";

export function createVisualization(svg) {
  const xloc = 16;
  const yloc = 10;

  const [finalX, finalY] = gridToSvgCoordinates(xloc, yloc);

  // Create a parent group for all visualization components
  const visualizationGroup = svg
    .append("g")
    .attr("transform", `translate(${finalX}, ${finalY}) scale(0.74)`);

  const mapGroup = visualizationGroup.append("g");
  const coatGroup = visualizationGroup.append("g");
  const labelsGroup = visualizationGroup.append("g");
  mapReplica(mapGroup, labelsGroup);
  drawCoatsAlongStreet(coatGroup, Constants.data, Constants.streets);
  dropdownFilter(coatGroup);
}
