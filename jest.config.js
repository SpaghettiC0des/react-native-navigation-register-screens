module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|static-container|expo|@expo|react-navigation))"
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "dist"]
};
