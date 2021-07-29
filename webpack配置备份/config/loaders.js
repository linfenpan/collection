'use strict';
module.exports = {
  babelLoader: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        "@babel/plugin-transform-runtime"
      ]
    }
  },

  cssLoader: { 
    loader: 'css-loader' 
  },

  vueLoader: {
    loader: 'vue-loader'
  },

  urlLoader: {
    loader: 'url-loader',
    options: {
      limit: 1024 * 20,
      quality: 85,
    }
  },
  
  lessLoader: {
    loader: 'less-loader',
    options: {
      javascriptEnabled: true,
      multiple: true,
      useFileCache: false,
      compress: true,
      // plugins: [
      //   new LessPluginAutoPrefixer({
      //     add: true,
      //     browsers: ['> 0%', 'ie >= 8', 'op_mini > 0', 'op_mob > 0', 'and_qq > 0', 'and_uc > 0', 'Samsung > 0'],
      //   }),
      // ]
    }
  },
  
  htmlLoader: {
    loader: 'html-loader',
    options: {
      minimize: true,
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: false,
      collapseInlineTagWhitespace: true,
      removeTagWhitespace: false,
      removeAttributeQuotes: false,
      removeEmptyAttributes: false,
      removeRedundantAttributes: false,
      // sortAttributes: false,
      // trimCustomFragments: false,
      minifyJS: false,
      minifyCSS: false
    }
  },
};
