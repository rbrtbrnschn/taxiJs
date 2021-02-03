// module.exports = {
//   "presets": [
//     "@babel/preset-env"
//   ]
// }
// module.exports = {
//   "presets": [
//     ["env", {
//       "modules": false,
//       "targets": {
//         "browsers": [
//           "> 1%",
//           "Firefox >= 52", // last ESR
//           "IE 11"
//         ],
//         "uglify": true
//       },
//       "useBuiltIns": true
//     }]
//   ]
// }

// module.exports = {
//   "presets": ["@babel/preset-env",],
//   "plugins": [
//     "@babel/plugin-proposal-class-properties",
//     "@babel/plugin-proposal-private-property-in-object",
//     "@babel/plugin-proposal-private-methods",
//     "@babel/plugin-transform-classes",
//     "@babel/plugin-transform-regenerator",
//     "@babel/plugin-transform-runtime",
//   ]
// }

module.exports = {
  "presets": ["@babel/preset-env",],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-property-in-object",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-transform-runtime",
  ]
}
