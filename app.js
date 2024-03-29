import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as Constants from "./components/constants.js";
import { createVisualization } from "./components/visualization.js";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select(".d3-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", Constants.backgroundColor);

const gridWidth = width;
const gridHeight = height;

export const verticalGridSpacing = gridWidth / Constants.numVerticalLines;
export const horizontalGridSpacing = gridHeight / Constants.numHorizontalLines;

createVisualization(svg);

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

// const mapGroup = svg.append("g");
// const coatGroup = svg.append("g");
// const labelsGroup = svg.append("g");

// mapReplica(mapGroup, labelsGroup);
// drawCoatsAlongStreet(coatGroup, Constants.data, Constants.streets);
// dropdownFilter(coatGroup);
