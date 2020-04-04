const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const workSpaceDir = path.resolve(__dirname);

// 往上弹两级
const workSpaceDir2 = workSpaceDir;
console.log("当前工作路径", workSpaceDir2);
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
        entry: {
            main: path.join(workSpaceDir2, 'src/Main.ts'),
            copy: path.join(workSpaceDir2, 'src/CopyProject.ts'),
            update: path.join(workSpaceDir2, 'src/UpdateProject.ts'),
            publish: path.join(workSpaceDir2, 'src/PublishProject.ts')
        },
        output:
        {
            path: path.join(workSpaceDir2, './../others/publish/bin/'),
            filename: '[name].js'
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
        devtool: "",
        mode: "production"
    });
    return result;
};
