// filter.js
import * as Constants from "./constants.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { filterCoatsByColor } from "./coats.js";
import { placeCoatCountLabel } from "./labels.js";

export function dropdownFilter(coatGroup, labelsGroup) {
  const colorFilterSelect = d3.select("#color-filter");

  Constants.coatsByColor.forEach((_, color) => {
    colorFilterSelect.append("option").attr("value", color).text(color);
  });

  d3.select("#color-filter").on("change", function () {
    const selectedColor = d3.select(this).property("value");
    const count = filterCoatsByColor(coatGroup, selectedColor);
    // placeCoatCountLabel(labelsGroup, count);

    const paragraph = d3.select(".left-container");
    const image = d3.select(".image-container img"); // Select the image

    // Start fade out for paragraph and image
    paragraph.classed("fade-out", true);
    image.classed("fade-out", true);

    // Wait for fade out to complete, then change text, change image source, and fade in
    setTimeout(() => {
      const descriptionText =
        Constants.descriptions[selectedColor] || Constants.defaultDescription;
      const imagePath =
        Constants.imgSource[selectedColor] || Constants.defaultImgSource;

      paragraph.text(descriptionText);
      image.attr("src", imagePath);
      image.attr("alt", "Descriptive text for " + selectedColor + " coat");

      paragraph.classed("fade-out", false);
      image.classed("fade-out", false);
    }, 750);
  });
}
