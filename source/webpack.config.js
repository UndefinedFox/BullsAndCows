const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    context : path.resolve(__dirname, 'src'),

    devtool: (isDev) ? 'eval' : false,

    entry : {
        main : './js/main.js'
    },

    output : {
        filename:  './js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[path][name][ext]'
    },

    plugins : [
        new HTMLWebpackPlugin({
            template : path.resolve(__dirname, "src/index.html"),
            inject: 'body',
            minify: {
                collapseWhitespace: !isDev,
                removeComments: !isDev
            }
        }),

        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        })

        
    ],

    module: {
        rules: 
        [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
                
              },

            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
              },


            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                    "postcss-loader",
                ]
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                }
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },

    optimization: {
        minimize: isProd,
        minimizer: [

          new TerserPlugin({
            exclude: 'node_modules',
            terserOptions: {
                compress:{}
            }
          }),

          new CssMinimizerPlugin({
            minify: CssMinimizerPlugin.cssnanoMinify,
            minimizerOptions: {
                preset: [
                    "default",
                    {
                      discardComments: { removeAll: true },
                    },
                  ],
            }

          }),
        ],
    },

    devServer : {
        static  : {
            directory : path.join(__dirname, 'dist')
        },
        open : {
            app : {
                name : 'chrome'
            }
        },
        hot : true,
        port : 3000
    }
}