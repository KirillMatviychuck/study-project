import MiniCssExtractPlugin from "mini-css-extract-plugin";

import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

export function buildPlugins(htmlPath: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: htmlPath
        }
        ),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.ProgressPlugin()
    ]
}