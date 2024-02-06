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
export const universityPl = [
  [36.3, 30],
  [36.8, 30],
  [41.5, 12],
  [41.2, 11.2],
];
export const broadwayPt1 = [
  [51.5, 28.8],
  [52, 28.5],
  [36.7, 11.2],
  [35.9, 10.8],
];
export const broadwayPt2 = [
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
export const coatEllipseSize = 4.5;

export const coatRx = 9;
export const coatRy = 18;

export const coatEllipseNumber = 38;

export const roadColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--dropdown");
// export const roadColor = "#FFFFF0";
// export const roadColor = "#4B4F54";
export const labelColor = "#00A676";
export const backgroundColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--my-background-color");

// coat colors
// export const greyCoat = "#515052";
// // export const redCoat = "#C57556";
// export const redCoat = "#C03221";
// export const whiteCoat = "#EBE6DF";
// export const blueCoat = "#2188A8";
// export const greenCoat = "#60966B";
// // export const beigeCoat = "#D1A768";
// export const beigeCoat = "#F2E0A6";
// export const pinkCoat = "#C18EA3";
// export const blackCoat = "#1A1A1A";
// export const brownCoat = "#925544";

export const greyCoat = "#54585a";
export const redCoat = "#cb333b";
export const whiteCoat = "#FFFFF0";
export const blueCoat = "#041e42";
export const greenCoat = "#6d712e";
export const beigeCoat = "#e0c6ad";
export const pinkCoat = "#ECC7CD";
export const blackCoat = " #101820";
export const brownCoat = "#453536";

export const dataColors = {
  Grey: greyCoat,
  Red: redCoat,
  White: whiteCoat,
  Blue: blueCoat,
  Green: greenCoat,
  Beige: beigeCoat,
  Pink: pinkCoat,
  Black: blackCoat,
  Brown: brownCoat,
};

export const coatsByColor = new Map();

data.forEach((coat) => {
  const color = coat.ColorName;
  if (!coatsByColor.has(color)) {
    coatsByColor.set(color, []);
  }
  coatsByColor.get(color).push(coat);
});

export const defaultImgSource = "../assets/images/navy-blue.png";

export const imgSource = {
  Beige: "../assets/images/beige-new.png",
  Blue: "../assets/images/navy-blue.png",
  Brown: "../assets/images/brown.png",
  Grey: "../assets/images/grey-new.png",
  Black: "../assets/images/black.png",
  Green: "../assets/images/green.png",
  White: "../assets/images/white.png",
  Red: "../assets/images/red.png",
  Pink: "../assets/images/pink.png",
};

export const descriptions = {
  Beige:
    "During World War I, as men went off to fight, women took on jobs formerly filled by men. They volunteered for organizations like the Red Cross and joined the military. Many of the occupations demanded the wearing of uniforms, including trousers bringing military-style tunic jackets, belts, and epaulets in fashion. People took to a plainer lifestyle. Women wore less jewelry, and the lavish clothing of the Edwardian period fell by the wayside. Colors became sober and muted. And so we have the color beige!",
  Blue: "The word “navy” betrays the color’s origins. In 1749, the British Royal Navy decided to adopt a special dark-blue uniform. The choice of this color was no coincidence. It is extracted from an indigo plant native to India and has an extremely handy characteristic: it is resistant to both the sun and sea water. The plant had been imported to Europe since the late mediaeval period, but the prices were extortionate. It was only when the British Empire colonized India that this raw material became abundant and affordable – quite the coincidence! HMMMM.",
  Brown:
    "Brown became more widely used in the late 19th century, as major armies began outfitting their soldiers in khakis and light browns for camouflage amid the emergence of trench and aerial warfare. Between the 1920s and 1940s, attitudes toward brunette shades became more positive, thanks in part to the proliferation of Art Deco, a design aesthetic that embraced taupes and creams, metal finishes, and bold geometric patterns. It was during this era that light, washed-out browns were praised as elegant, luxurious, and comforting. Unlike the timelessness or Beige, fashion has a more love-hate relationship with Brunette shades.",
  Grey: "Description for Grey. Lorem ipsum dolor sit amet...",
  Black: "Description for Black. Lorem ipsum dolor sit amet...",
  Green: "Description for Green. Lorem ipsum dolor sit amet...",
  White: "Description for White. Lorem ipsum dolor sit amet...",
  Red: "Description for Red. Lorem ipsum dolor sit amet...",
  Pink: "Description for Pink. Lorem ipsum dolor sit amet...",
  // ... more colors if necessary
};

export const defaultDescription =
  "Choose a color and know its fashion history & significance!";

export const labelSize = getComputedStyle(
  document.documentElement
).getPropertyValue("--dropdown-fontsize");
