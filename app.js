import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { mapReplica } from "./components/map.js";
import * as Constants from "./components/constants.js";
import { drawCoatsAlongStreet } from "./components/coats.js";
import { placeStreetLabel } from "./components/labels.js";
import { gridToSvgCoordinates } from "./components/util.js";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const gridWidth = width;
const gridHeight = height;

export const verticalGridSpacing = gridWidth / Constants.numVerticalLines;
export const horizontalGridSpacing = gridHeight / Constants.numHorizontalLines;

// Draw vertical lines
// svg
//   .selectAll(".vertical-line")
//   .data(d3.range(Constants.numVerticalLines + 1)) // +1 to include the last line
//   .enter()
//   .append("line")
//   .attr("class", "vertical-line")
//   .attr("x1", (d) => d * verticalGridSpacing)
//   .attr("x2", (d) => d * verticalGridSpacing)
//   .attr("y1", 0)
//   .attr("y2", gridHeight)
//   .attr("stroke", "#ccc")
//   .attr("stroke-width", 1);

// // Draw horizontal lines
// svg
//   .selectAll(".horizontal-line")
//   .data(d3.range(Constants.numHorizontalLines + 1)) // +1 to include the last line
//   .enter()
//   .append("line")
//   .attr("class", "horizontal-line")
//   .attr("y1", (d) => d * horizontalGridSpacing)
//   .attr("y2", (d) => d * horizontalGridSpacing)
//   .attr("x1", 0)
//   .attr("x2", gridWidth)
//   .attr("stroke", "#ccc")
//   .attr("stroke-width", 1);

const mapGroup = svg.append("g");
const coatGroup = svg.append("g");
const labelsGroup = svg.append("g");

mapReplica(mapGroup, labelsGroup);

drawCoatsAlongStreet(coatGroup, Constants.data, Constants.streets);

const [titleX1, titleY1] = gridToSvgCoordinates(31.5, 4);
const [titleX2, titleY2] = gridToSvgCoordinates(37, 7.5);

svg
  .append("text")
  .attr("x", titleX1)
  .attr("y", titleY1)
  .style("text-anchor", "start") // Start the text at the beginning of the line
  .style("font-size", "72px")
  .style("font-family", "Sprat-Regular")
  .style("fill", Constants.greenColor)
  .text("New Coats,");

svg
  .append("text")
  .attr("x", titleX2)
  .attr("y", titleY2)
  .style("text-anchor", "start") // Start the text at the beginning of the line
  .style("font-size", "72px")
  .style("font-family", "Sprat-Regular")
  .style("fill", Constants.greenColor)
  .text("New York");
