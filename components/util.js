// util.js
import { verticalGridSpacing, horizontalGridSpacing } from "../app.js";

export function gridToSvgCoordinates(verticalLineIndex, horizontalLineIndex) {
  const svgX = verticalLineIndex * verticalGridSpacing;
  const svgY = horizontalLineIndex * horizontalGridSpacing;

  return [svgX, svgY];
}

export function convertingVerticesSet(vertices) {
  var svgVertices = vertices.map((vertex) => {
    // Convert grid coordinates to SVG coordinates
    const gridPoint = gridToSvgCoordinates(vertex[0], vertex[1]);
    return gridPoint;
  });
  return svgVertices;
}
