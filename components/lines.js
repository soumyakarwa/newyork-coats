// Lines.js
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

/**
 * Create dots within a polygon defined by vertices.
 * @param {*} numberOfDots
 * @param {*} vertices Array of vertices defining the polygon [{x, y}, {x, y}, ...]
 * @returns dots within the polygon
 */
export function createRandomDotsInPolygon(numberOfDots, vertices) {
  const maxDensity = 0.7; // Maximum density for dots

  // Calculate bounding box
  const xs = vertices.map((v) => v[0]);
  const ys = vertices.map((v) => v[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const dotsData = d3
    .range(numberOfDots)
    .map(function () {
      // Generate random positions within the bounding box
      let x = Math.random() * (maxX - minX) + minX;
      let y = Math.random() * (maxY - minY) + minY;
      let density = Math.random() * maxDensity;

      // Check if the point is inside the polygon (the rotated rectangle)
      if (d3.polygonContains(vertices, [x, y])) {
        return { x, y, density };
      }

      return null;
    })
    .filter((dot) => dot !== null);

  return dotsData;
}

/**
 *
 * @param {*} numberOfDots
 * @param {*} cx
 * @param {*} cy
 * @param {*} rx
 * @param {*} ry
 * @returns
 */
export function createRandomDotsInEllipse(numberOfDots, cx, cy, rx, ry) {
  const maxDensity = 0.9;
  const minDensity = 0.4;
  const dotsData = [];

  for (let i = 0; i < numberOfDots; i++) {
    // Generate a random angle between 0 and 2π
    const angle = Math.random() * 2 * Math.PI;
    // Generate a random radius within the ellipse bounds for both axes
    const rX = Math.sqrt(Math.random()) * rx;
    const rY = Math.sqrt(Math.random()) * ry;

    // Calculate the dot's coordinates
    const x = cx + rX * Math.cos(angle);
    const y = cy + rY * Math.sin(angle);
    const density = minDensity + Math.random() * (maxDensity - minDensity);

    dotsData.push({ x, y, density });
  }

  return dotsData;
}
