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
    "During World War I, with men on the battlefronts, women stepped into roles traditionally held by men. They enlisted in the military, volunteered with groups like the Red Cross, and filled jobs left vacant. These new duties often required uniforms, introducing women to trousers and popularizing military-inspired fashion elements like tunic jackets, belts, and epaulets. As the war demanded frugality and practicality, society embraced a simpler way of life. Women donned less jewelry, and the extravagant attire of the Edwardian era was set aside. The color palette of fashion reflected this shift, turning to sober, subdued tones. And that's how the color beige found its moment, embodying the era's call for simplicity and understatement.",
  Blue: "The term navy hints at the color's maritime roots. Back in 1749, the British Royal Navy made a pivotal fashion move by introducing a unique dark-blue uniform. This wasn't just a random choice; the color came from indigo, a plant indigenous to India known for its resilience against the sun's rays and sea water — perfect for life at sea. Although Europe had been importing this plant since the late medieval period, it was outrageously expensive. However, the narrative changed when the British Empire established its presence in India, making this coveted dye both abundant and economical—a rather convenient turn of events!",
  Brown:
    "Brown really came into its own in the late 19th century when armies started kitting out their troops in khaki and light brown, turning to these earthy tones for better camouflage during the evolving tactics of trench and aerial warfare. Fast forward to the period between the 1920s and 1940s, and you'll notice a shift in sentiment towards these brunette shades. Much of this positive vibe was fueled by the Art Deco movement, which had a thing for embracing taupe and cream hues, along with its love for metallic finishes and striking geometric designs. It was in this era that the softer, more subdued browns were celebrated for their elegance, luxury, and a certain comforting quality. While beige remains a timeless classic, fashion seems to have a fluctuating, love–hate affair with the deeper, brunette shades.",
  Grey: "Grey wasn't exactly a headline-grabber in the fashion scene or at the court until the dawn of the 20th century. The term grisette in early 20th-century France was used for working women who often wore unassuming grey attire, possibly to remain inconspicuous and blend into the backdrop of their surroundings. However, grey's fate in fashion took a dramatic turn later on. Post World War II, Christian Dior became an outspoken fan of grey, transforming his boutiques with elegant pearly grey interiors and parading a spectrum of grey shades on the runway—from ethereal and robust to delicate moth-like tones and even those inspired by uranium. In the postwar era, people were craving a fresh start after enduring hard times, and the fresh emergence of grey, a color previously sidelined, suddenly held a captivating allure.",
  Black:
    "Black is timeless, a true classic in the fashion world. Its versatility spans from the somber attire of the Protestant Pilgrims and the mourning garb of Victorian widows to the subtle, charged messages conveyed by a handkerchief tucked in a back pocket. Black carries a depth of hidden meanings. It's said that wearing black can make a person seem more attractive and intelligent, and there's even a quest to create a shade darker than the darkest black we know. But the enduring allure of black goes beyond these facets. Black has graced the realms of religions and social classes, survived witch hunts, marched in the polished boots of fascism, and rode in the leather jackets of countless youth rebellions. Its power is in its paradox: black is at once solemn and seductive, enigmatic and understated. It's a color that makes a statement on its own, commanding attention without the need for fanfare.",
  Green:
    "Call it military green, khaki, or olive green, this shade and fashion have a long-standing history together. It's intriguing how many of these colors have roots on the battlefield. This specific green initially served a practical purpose in military uniforms, acting as a straightforward, solid camouflage. It helped soldiers merge with their surroundings, offering stealth and protection. In the fashion world, though, the script is flipped—this green is all about making a statement and standing out from the crowd!",
  White:
    "White dresses have been a timeless staple since the dawn of civilization. Picture the pristine white robes depicted in ancient Egyptian tombs, worn by priests and pharaohs alike. In ancient Greece, the classic tunic often flaunted its purity in white. Over in Rome, donning a white toga wasn't just a fashion statement—it was a badge of Roman citizenship. Fast forward to the French Revolution around 1789, and you'll see a dramatic shift. The flamboyant, vividly colored gowns of the Rococo era gave way to something more understated yet equally profound: simple, white dresses. The trendsetter of the early 19th century? The chemise dress. Taking cues from the draped statues of ancient Greece and Rome, this garment featured sheer, transparent white muslin, defining the era's fashion with its elegance and simplicity.",
  Red: "Red has been a timeless classic for millennia, always capturing attention with its bold vibe. It's not just about looking good; red fashion historically signified more—like your social standing, political clout, religious status, heritage, and cultural identity. People have been on a quest for ages to create dyes that mimic the vibrant hues of blood, fire, flowers, and sunsets. The earliest evidence of this quest? A piece of dyed fabric from the sixth millennium BC found in Turkey, and it was red! Take the Egyptians, for example; they honored Osiris, the underworld's ruler, by wrapping mummies in red linen. When it came to battles, red was the color of choice for warriors like the Spartans, Persians, and Romans, symbolizing strength and courage. For the Romans, the connection was even deeper, associating red with Mars, the formidable god of war.",
  Pink: "Pink's fashion history is as rich as its hues. Back in the day, it was all the rage among ancient Indian royals and Chinese emperors, as well as the high society of 18th-century Europe. Rocking pink was a major status symbol, mainly because the dyes for these posh outfits were sourced from costly ventures to Central Asia and South America. Interestingly, for a long time, pink was tagged as a masculine color. Boys were often dressed in pink while girls were decked out in blue (with babies usually in white and the military often in red, pink seemed like a boyish choice). But the script flipped around the 1940s, and by the 1950s, pink had a complete makeover as a feminine shade. This shift was sealed when US First Lady Mamie Eisenhower chose a pink gown for her inaugural dress, firmly positioning pink in the realm of women's fashion.",
};

export const defaultDescription = "Choose a color to know its fashion history!";

export const labelSize = getComputedStyle(
  document.documentElement
).getPropertyValue("--dropdown-fontsize");
