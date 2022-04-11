const CracoLessPlugin = require("craco-less");
require("dotenv-cra").config();
var dotenv = require("dotenv");
var dotenvExpand = require("dotenv-expand");

var myEnv = dotenv.config();
dotenvExpand.expand(myEnv);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#000" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
