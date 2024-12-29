import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';



export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode;
    const PORT = env.port || 5000;

    const isDev = mode === 'development';

    const config: Configuration = buildWebpackConfig({
        mode: 'production',
        paths,
        isDev,
        port: PORT
    });

    return config
};