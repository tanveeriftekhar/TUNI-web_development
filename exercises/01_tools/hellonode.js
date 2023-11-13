const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);

function hithere(array) {
    if (Array.isArray(array) && array.length >= 2) {
      const endItem = _.last(array);
      const startItem = _.head(array);
      return `${endItem} and ${startItem}`;
    } else {
      return "Input Failure!";
    }
  }
  
  module.exports = hithere;


  