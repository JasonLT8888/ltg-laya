const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const workSpaceDir = path.resolve(__dirname);

// 往上弹一级
const workSpaceDir2 = workSpaceDir + "\\..";
console.log("workSpaceDir", workSpaceDir2);
module.exports = (env) => {
    if (!env) {
        env = { production: false };
    }
    console.log("当前编译配置:", env);
    let result = ({
        entry: {
            core: [
                    path.join(workSpaceDir2, 'laya_sources/layaAir/Config.ts'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/Const.ts'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/ILaya.ts'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/Laya.ts'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/components/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/display/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/events/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/filters/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/layagl/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/maths/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/media/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/net/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/renders/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/resource/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/system/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/utils/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/webgl/**/*.*'),
                    path.join(workSpaceDir2, 'laya_sources/layaAir/laya/effect/**/*.*')
                ],
        },
        output: {
            path: path.join(workSpaceDir2, 'bin/js'),
            filename: 'laya.[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.(md|txt|glsl|vs|fs)$/,
                    use: "raw-loader"
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'glsl', 'md', 'txt'],
            plugins: [
                new TsconfigPathsPlugin({ configFile: path.join(workSpaceDir, 'tsconfig_for_layasource.json') })
            ]
        },
        devtool: env.production ? "" : "source-map",
        mode: env.production ? "production" : "development",
    });
    return result;
};
