import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildResolvers } from "./buildResolvers";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";


export function buildWebpackConfig(options: BuildOptions): Configuration {

    const { mode, paths } = options
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: '[main].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths.html)
    }
}