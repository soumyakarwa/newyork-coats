import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Define width and height of the SVG element
const width = window.innerWidth; // Full width of the browser window
const height = window.innerHeight; // Full height of the browser window

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Generate a stipple gradient effect by creating dots with varying density

// i want to generate this in a rect of 50 x 300

const numDots = 8000; // The number of dots you want to generate
const dotsData = d3.range(numDots).map(function (d) {
  // Random positions for each dot
  const x = Math.random() * 7.5;
  const y = Math.random() * 200;
  // Control the density of the dots here
  // For example, fewer dots in the bottom-right corner
  const density = Math.random() * (1 - y / height) * (1 - x / width);
  return { x, y, density };
});

// Create and place the dots on the SVG element
svg
  .selectAll("circle")
  .data(dotsData)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.x + width / 2)
  .attr("cy", (d) => d.y + height / 2)
  .attr("r", 0.5) // The radius of the dots
  .style("fill", "black")
  .style("opacity", (d) => d.density);

// svg
//   .selectAll("circle")
//   .data(dotsData)
//   .enter()
//   .append("circle")
//   .attr("cx", (d) => d.xwidth / 2)
//   .attr("cy", (d) => d.y + 100 + height / 2)
//   .attr("r", 0.5) // The radius of the dots
//   .style("fill", "black")
//   .style("opacity", (d) => d.density);
