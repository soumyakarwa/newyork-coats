// data.js

/**
 *
 * @param {*} data
 * @returns processsed data in object form of coats
 */
export function processData(data) {
  // Convert each row to a custom 'coat' object
  const coats = data.map((row) => {
    return {
      x: parseFloat(row.X),
      y: parseFloat(row.Y),
      street: parseInt(row.Street, 10),
      colorHex: row["Color (Hex)"],
      colorName: row["Color Name"],
      colorGroup: row["Color Group"],
      style: row["Style"],
    };
  });
  return coats;
}

/**
 *
 * @param {*} error
 * handles any error
 */
export function handleErrors(error) {
  console.error("Error loading the CSV file:", error);
}
