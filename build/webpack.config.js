"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
require('dotenv').config()
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Webpack = __importStar(require("webpack"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var path = require("path");
function srcPath(subdir) {
    return path.join(__dirname, "../", subdir);
}
var webpackOptions = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            process: "process/browser",
            "@": srcPath('src')
        }
    },
    output: {
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 8003
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            esModule: false,
                            modules: {
                                namedExport: false
                            }
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            modules: {
                                namedExport: false,
                                exportLocalsConvention: 'asIs',
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.(glsl)$/i,
                use: 'raw-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new html_webpack_plugin_1["default"]({
            template: './index.html'
        }),
        new Webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new Webpack.DefinePlugin({
          'NODE_ENV': JSON.stringify('development')
        })
    ]
};
exports["default"] = webpackOptions;
