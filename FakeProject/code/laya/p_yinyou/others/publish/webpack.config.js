const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const workSpaceDir = path.resolve(__dirname);

// 往上弹两级
const workSpaceDir2 = workSpaceDir;
console.log("workSpaceDir", workSpaceDir2);
module.exports = (env) => {
    if (!env) {
        env = { production: false };
    }
    console.log("当前编译配置:", env);
    let result = ({
        target: 'node',
        externals: [
            nodeExternals()
        ],
        entry: path.join(workSpaceDir2, 'src/Main.ts'),
        output: {
            path: path.join(workSpaceDir2, 'combie_js/'),
            filename: 'publish.js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(md|txt|glsl|vs|fs)$/,
                    use: "raw-loader",
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'glsl', 'md', 'txt'],
            plugins: [
                new TsconfigPathsPlugin({ configFile: path.join(workSpaceDir, 'tsconfig.json') })
            ]
        },
        devtool: env.production ? "" : "source-map",
        mode: env.production ? "production" : "development",
    });
    return result;
};
