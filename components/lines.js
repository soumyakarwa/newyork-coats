// Lines.js
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as d3Polygon from "https://d3js.org/d3-polygon.v1.min.js";
// import d3Polygon from "d3-polygon";

/**
 *
 * @param {*} numberOfDots
 * @param {*} w
 * @param {*} h
 * @param {*} angle
 * @param {*} centerX
 * @param {*} centerY
 * @returns dots, vertices
 * This function creates a pencil like texture by generating numberOfDots number
 * of dots in random places in the w and h of a rectangle.
 */
export function createRandomDots(
  numberOfDots,
  w,
  h,
  angle = 0,
  centerX = w / 2,
  centerY = h / 2
) {
  //   const fadeHeight = 4; // Height of the fading effect from the top and bottom edges
  const maxDensity = 1; // Maximum density for dots away from the edges
  const radians = (angle * Math.PI) / 180; // Convert angle to radians

  const dotsData = d3.range(numberOfDots).map(function () {
    // Random positions for each dot
    let x = Math.random() * w;
    let y = Math.random() * h;

    // Apply rotation around the center (centerX, centerY)
    if (angle != 0) {
      const xRotated =
        centerX +
        (x - centerX) * Math.cos(radians) -
        (y - centerY) * Math.sin(radians);
      const yRotated =
        centerY +
        (x - centerX) * Math.sin(radians) +
        (y - centerY) * Math.cos(radians);
      x = xRotated;
      y = yRotated;
    }

    // Calculate density based on y position for the fading effect
    let density = Math.random() * maxDensity;

    return { x, y, density };
  });

  // Calculate the coordinates of the four vertices after rotation
  const vertices = [
    { x: 0, y: 0 }, // top-left
    { x: w, y: 0 }, // top-right
    { x: w, y: h }, // bottom-right
    { x: 0, y: h }, // bottom-left
  ].map((vertex) => {
    const xRotated =
      centerX +
      (vertex.x - centerX) * Math.cos(radians) -
      (vertex.y - centerY) * Math.sin(radians);
    const yRotated =
      centerY +
      (vertex.x - centerX) * Math.sin(radians) +
      (vertex.y - centerY) * Math.cos(radians);
    return { x: xRotated, y: yRotated };
  });

  // Return both the dots and the vertices
  return { dots: dotsData, vertices: vertices };
}

// /**
//  * Create dots within a polygon defined by vertices.
//  * @param {*} numberOfDots
//  * @param {*} vertices Array of vertices defining the polygon [{x, y}, {x, y}, ...]
//  * @returns dots within the polygon
//  */
// export function createRandomDotsInPolygon(numberOfDots, vertices) {
//   const maxDensity = 1; // Maximum density for dots

//   // Calculate bounding box
//   const xs = vertices.map((v) => v.x);
//   const ys = vertices.map((v) => v.y);
//   const minX = Math.min(...xs);
//   const maxX = Math.max(...xs);
//   const minY = Math.min(...ys);
//   const maxY = Math.max(...ys);

//   const dotsData = d3.range(numberOfDots).map(function () {
//     // Generate random positions within the bounding box
//     let x = Math.random() * (maxX - minX) + minX;
//     let y = Math.random() * (maxY - minY) + minY;
//     let density = Math.random() * maxDensity;

//     // Check if the point is inside the polygon (the rotated rectangle)
//     if (isPointInPolygon([x, y], vertices)) {
//       console.log("inside");
//       return { x, y, density };
//     }

//     return null;
//   });
//   // .filter((dot) => dot !== null);
//   //   .filter((dot) => dot !== null); // Filter out points that are not inside the polygon

//   return dotsData;
// }

// function isPointInPolygon(point, polygon) {
//   let x = point[0],
//     y = point[1];

//   let inside = false;
//   for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
//     let xi = polygon[i][0],
//       yi = polygon[i][1];
//     let xj = polygon[j][0],
//       yj = polygon[j][1];

//     let intersect =
//       yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
//     if (intersect) inside = !inside;
//   }

//   return inside;
// }

// // Usage:
// const vertices = [
//   [100, 100],
//   [200, 150],
//   [250, 300],
//   [150, 350],
// ];

// const testPoint = [150, 200];
// console.log(isPointInPolygon(testPoint, vertices)); // Returns true or false
