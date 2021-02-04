const Taxi = require("../../../dist/node/js/Taxi.js");
module.exports = function assert(expression, message) {
  const fallback = `${__filename} failed `;
  if(!message) message = fallback;

  if(expression) return;

  throw new Error(message);
}