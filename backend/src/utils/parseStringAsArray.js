// Set a function to parse all techs(text) as array
module.exports = function parseStringAsArray( arrayAsString ) {
  return arrayAsString.split(",").map(tech => tech.trim());
}