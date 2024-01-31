// Map.js

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { createRandomDots } from "./lines.js";

export function mapReplica(svg) {
  drawAvenues(svg);
}

function drawAvenues(svg) {
  //   const set1 = createRandomDots(26000, 15, 483, 38);
  const set1 = createRandomDots(30000, 15, 700, 49.4);
  // 49.4);
  const set2 = createRandomDots(25400, 16, 550, 9.45);
  const set3 = createRandomDots(35000, 16, 540, 9.45);
  const set4 = createRandomDots(25000, 13, 550, 142.1);

  svg
    .selectAll("circle.dot1")
    .data(set1.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 150)
    .attr("cy", (d) => d.y - 120)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
  svg
    .selectAll("circle.dot2")
    .data(set2.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 750)
    .attr("cy", (d) => d.y + 80)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
  svg
    .selectAll("circle.dot3")
    .data(set3.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 1000)
    .attr("cy", (d) => d.y + 140)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);

  svg
    .selectAll("circle.dot4")
    .data(set4.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 1150)
    .attr("cy", (d) => d.y + 90)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);

  //   var vertices = [
  //     { x: 100, y: 100 }, // Vertex 1
  //     { x: 200, y: 150 }, // Vertex 2
  //     { x: 250, y: 300 }, // Vertex 3
  //     { x: 150, y: 350 }, // Vertex 4
  //   ];
  //   var dots = createRandomDotsInPolygon(15000, vertices);
  //   // Draw the edges of the polygon
  //   const lineFunction = d3
  //     .line()
  //     .x((d) => d.x)
  //     .y((d) => d.y);
  //   svg
  //     .append("path")
  //     .datum([...vertices, vertices[0]]) // Close the path by repeating the first vertex at the end
  //     .attr("d", lineFunction)
  //     .attr("stroke", "red")
  //     .attr("stroke-width", 2)
  //     .attr("fill", "none");
  //   console.log(dots);
  //   // Draw the dots
  //   svg
  //     .selectAll("circle.dot")
  //     .data(dots)
  //     .enter()
  //     .append("circle")
  //     .attr("class", "dot")
  //     .attr("cx", (d) => d.x)
  //     .attr("cy", (d) => d.y)
  //     .attr("r", 0.5)
  //     .style("fill", "black")
  //     .style("opacity", (d) => d.density);
}
