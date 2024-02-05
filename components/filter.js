// filter.js
import * as Constants from "./constants.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { filterCoatsByColor } from "./coats.js";

export function dropdownFilter(coatGroup) {
  const colorFilterSelect = d3.select("#color-filter");

  Constants.coatsByColor.forEach((_, color) => {
    colorFilterSelect.append("option").attr("value", color).text(color);
  });

  d3.select("#color-filter").on("change", function () {
    const selectedColor = d3.select(this).property("value");
    filterCoatsByColor(coatGroup, selectedColor);

    const paragraph = d3.select(".description");

    // Start fade out
    paragraph.classed("fade-out", true);

    // Wait for fade out to complete, then change text and fade in
    setTimeout(() => {
      const descriptionText =
        Constants.descriptions[selectedColor] || Constants.defaultDescription;

      paragraph.text(descriptionText);

      // Remove fade-out class to start fade in
      paragraph.classed("fade-out", false);
    }, 750); // Match this duration with your CSS transition-duration
  });
}
