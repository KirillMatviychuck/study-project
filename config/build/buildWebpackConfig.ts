import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): Configuration {

    const { mode, paths, isDev } = options
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths.html),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}