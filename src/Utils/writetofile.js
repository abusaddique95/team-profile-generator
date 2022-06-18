const fs = require("fs");

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {}
};

module.exports = {
  writeToFile,
};
