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
      'vue-i18n-light': 'vue-i18n-light',
      ejs: 'ejs',
      app: './src/index.js',
    },
    output: {
      publicPath: 'dist/',
      path: path.resolve(__dirname, 'dist'),
      filename: (arg) => {
        if (['vue-i18n-light','ejs'].includes(arg.chunk.name)) {
            return `[name].bundle.js`;
        }
        return `${locale}/[name].bundle.js`;
      },
      chunkFilename: `${locale}/[name].bundle.js`,
    },
    resolve: {
      alias: {
        ejs$: 'ejs/ejs.js',
      },
    },
    externals: {
      vue: 'Vue',
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
