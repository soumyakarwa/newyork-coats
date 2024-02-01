import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { mapReplica } from "./components/map.js";

// Define width and height of the SVG element
const width = window.innerWidth; // Full width of the browser window
const height = window.innerHeight; // Full height of the browser window

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Draw vertices
// svg
//   .selectAll("circle.vertex")
//   .data(set1.vertices)
//   .enter()
//   .append("circle")
//   .attr("class", "vertex") // Assign a class for styling and selection
//   .attr("cx", (d) => d.x + width / 2)
//   .attr("cy", (d) => d.y)
//   .attr("r", 2) // Larger radius for visibility
//   .style("fill", "red");
//   .style("opacity", (d) => d.density);

// const gridSpacing = 20; // Distance between grid lines
const gridWidth = width; // Grid width
const gridHeight = height; // Grid height

const numVerticalLines = 53; // Number of vertical lines
const numHorizontalLines = 37; // Number of horizontal lines
export const verticalGridSpacing = gridWidth / numVerticalLines;
export const horizontalGridSpacing = gridHeight / numHorizontalLines;

// Draw vertical lines
svg
  .selectAll(".vertical-line")
  .data(d3.range(numVerticalLines + 1)) // +1 to include the last line
  .enter()
  .append("line")
  .attr("class", "vertical-line")
  .attr("x1", (d) => d * verticalGridSpacing)
  .attr("x2", (d) => d * verticalGridSpacing)
  .attr("y1", 0)
  .attr("y2", gridHeight)
  .attr("stroke", "#ccc")
  .attr("stroke-width", 1);

// Draw horizontal lines
svg
  .selectAll(".horizontal-line")
  .data(d3.range(numHorizontalLines + 1)) // +1 to include the last line
  .enter()
  .append("line")
  .attr("class", "horizontal-line")
  .attr("y1", (d) => d * horizontalGridSpacing)
  .attr("y2", (d) => d * horizontalGridSpacing)
  .attr("x1", 0)
  .attr("x2", gridWidth)
  .attr("stroke", "#ccc")
  .attr("stroke-width", 1);

const group = svg.append("g");

mapReplica(group);
