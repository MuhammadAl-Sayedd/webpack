const pathModule = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path:pathModule.resolve(__dirname,'build')
    },
    module: {
        rules: [
          // css file
            {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          //images
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      },
    plugins:[new HtmlWebpackPlugin() , new MiniCssExtractPlugin()],
    optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizerOptions: {
             
              
                
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["mozjpeg", {quality: 60}],
                  ["optipng", { optimizationLevel: 5 }],
                  // Svgo configuration here https://github.com/svg/svgo#configuration
                  [
                    "svgo",
                 
                  ],
                ],
              
            },
          }), new CssMinimizerPlugin()
        ],
      },

}