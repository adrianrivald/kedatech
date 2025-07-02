module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy", 
        "^react-toastify/dist/ReactToastify.css$": "<rootDir>/__mocks__/emptyStyleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js",
      "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
    },
    transformIgnorePatterns: [
        // all exceptions must be first line
        // "node_modules/(?!swiper*)",
        // "node_modules/(?!swiper/react*)"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // transform: {
    //   '^.+\\.(ts|tsx)?$': 'ts-jest',
    //   "^.+\\.(js|jsx)$": "babel-jest",
    // }
}