// Constants.js
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// relative to app.js
export const data = await d3.csv("./assets/New-York-Coats.csv");
export const numVerticalLines = 53;
export const numHorizontalLines = 37;

export const sixthAve = [
  [0, 13.5],
  [0, 14],
  [15.2, 2.2],
  [14.8, 1.9],
];
export const fifthAve = [
  [25.7, 25.3],
  [26.2, 25.5],
  [32, 8.2],
  [31.5, 7.8],
];
export const broadwayAve = [
  [36.3, 30],
  [36.8, 30],
  [41.5, 12],
  [41.2, 11.2],
];
export const uniPlacePt1 = [
  [36.7, 11.2],
  [35.9, 10.8],
  [51.5, 28.8],
  [52, 28.5],
];
export const uniPlacePt2 = [
  [51.5, 28.8],
  [52, 28.5],
  [53, 37],
  [52.8, 37],
];

export const street8 = [
  [0, 13],
  [0, 13.3],
  [53, 35.1],
  [53, 34.9],
];
export const street9 = [
  [0.5, 10],
  [1.3, 10],
  [53, 31.9],
  [53, 32.2],
];
export const street10 = [
  [0.5, 7.3],
  [0.7, 7.1],
  [52, 28.5],
  [51.8, 28.8],
];
export const street11 = [
  [0.8, 4.3],
  [0.5, 4.5],
  [52.5, 25.5],
  [52.8, 25.2],
];
export const street12 = [
  [2.9, 3.1],
  [3.1, 3],
  [52, 22.8],
  [51.8, 23],
];
export const street13 = [
  [5.3, 2.3],
  [5.1, 2],
  [51.2, 20.5],
  [51.4, 20.8],
];
export const street14 = [
  [6.8, 1.2],
  [6.6, 1],
  [50.5, 18.5],
  [50.7, 18.8],
];

export const streets = {
  8: street8,
  9: street9,
  10: street10,
  11: street11,
  12: street12,
  13: street13,
  14: street14,
};

export const roadEllipseSize = 2.2;
export const coatEllipseSize = 1.2;

export const coatRx = 7;
export const coatRy = 14;

export const coatEllipseNumber = 750;

// export const greyColor = "#333F47";
export const greyColor = "#484848";
export const greenColor = "#629460";
