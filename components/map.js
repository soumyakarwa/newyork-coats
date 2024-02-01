// Map.js

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { createRandomDots } from "./lines.js";

export function mapReplica(group) {
  drawAvenues(group);
}

function drawAvenues(group) {
  //   const set1 = createRandomDots(26000, 15, 483, 38);
  const set1 = createRandomDots(30000, 15, 700, 49.4);
  // 49.4);
  const set2 = createRandomDots(25400, 16, 550, 9.45);
  const set3 = createRandomDots(35000, 16, 540, 9.45);
  const set4 = createRandomDots(25000, 13, 550, 142.1);

  // streets
  const set5 = createRandomDots(20000, 5, 1000, 107.93);
  const set6 = createRandomDots(20000, 5, 1200, 107.93);
  const set7 = createRandomDots(20000, 5, 1200, 107.93);
  const set8 = createRandomDots(20000, 5, 1200, 107.93);
  const set9 = createRandomDots(20000, 5, 1200, 107.93);

  group
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
  group
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
  group
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

  group
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

  // streetss
  group
    .selectAll("circle.dot5")
    .data(set5.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 700)
    .attr("cy", (d) => d.y - 350)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
  group
    .selectAll("circle.dot6")
    .data(set6.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 700)
    .attr("cy", (d) => d.y - 400)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
  group
    .selectAll("circle.dot7")
    .data(set7.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 700)
    .attr("cy", (d) => d.y - 350)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
  group
    .selectAll("circle.dot8")
    .data(set8.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 700)
    .attr("cy", (d) => d.y - 300)
    .attr("r", 0.5)
    .style("fill", "black")
    .style("opacity", (d) => d.density);
  group
    .selectAll("circle.dot9")
    .data(set9.dots)
    .enter()
    .append("circle")
    .attr("class", "dot") // Assign a class for styling and selection
    .attr("cx", (d) => d.x + 700)
    .attr("cy", (d) => d.y - 250)
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
