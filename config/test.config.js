/**
*   Configuración Global de jest
*   ----------------------------
*   Detalles de configuracion => https://jestjs.io/docs/en/cli.html#json
**/

exports.test_config = {
  
  automock: false,  
  cache: false,  
  env: 'TEST',
  globals: {
        NODE_ENV: "test"
  },    
  moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "node"
  ],
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],              
  testEnvironment: "node",
  testURL: "",      
  rootDir: './',  
  verbose:true, 
  watchman: false,        
  watchAll: false, 
  watch: false,
};