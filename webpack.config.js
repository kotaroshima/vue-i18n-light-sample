const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const LOCALES_DIR = './src/locales';
const supportedLocales = fs.readdirSync(LOCALES_DIR);

const I18N_REGEXP = /^i18n\//;

module.exports = supportedLocales.map((locale) => {
  const realPath = path.resolve(__dirname, `${LOCALES_DIR}/${locale}`);
  return {
    mode: (process.env.NODE_ENV === 'development' ? process.env.NODE_ENV : 'production'),
    entry: {
      app: './src/index.js',
    },
    output: {
      publicPath: 'dist/',
      path: path.resolve(__dirname, 'dist'),
      filename: `${locale}/[name].js`,
      chunkFilename: `${locale}/[name].bundle.js`,
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        ejs$: 'ejs/ejs.js',
      },
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            configFile: './.eslintrc_client.json'
          }
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    'env',
                    {
                      modules: false
                    }
                  ]
                ]
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        I18N_REGEXP,
        (result) => {
          result.request = result.request.replace(I18N_REGEXP, `${realPath}/`);
        }
      ),
    ]
  }
});
