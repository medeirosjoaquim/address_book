module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)", "**/__tests__/**/*.js?(x)", "**/?(*.)+(test).js?(x)"],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js?)$": "babel-jest"
  },
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ]
};