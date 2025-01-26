const { defineConfig } = require('openapi-axios');

/**
 * openapi-axios config
 * @ref https://github.com/FrontEndDev-org/openapi-axios
 */
module.exports = defineConfig({
  axiosImportFile: './src/tools/axios.ts',
  modules: {
    '.petStore3': 'https://petstore3.swagger.io/api/v3/openapi.json',
  },
});
