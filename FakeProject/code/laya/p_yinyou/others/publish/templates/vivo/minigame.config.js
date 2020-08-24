
/**
 * 此配置用于替换之前的config/webpack.config.js。使用此配置文件时，请将原来的config/webpack.config.js里的externals配置同步到此处。
 * 原来 webpack.config.js中拷贝的资源，放到src目录下即可，打包时会自动拷贝到build
 * @param {Object} options 提供一些参数
 * @param {String} options.context   小游戏工程目录
 * @param {String} options.src 小游戏工程src目录
 * @param {String} options.build 小游戏工程的编译目录
 */
module.exports = function (options) {

	// 使用 externals方式引入模块，请参考webpack externals的用法 https://webpack.js.org/configuration/externals/
	/**
	 * 外部依赖配置
	 * module_name [String] 表示模块名  在 game.js的中对这个模块的引用可以使用 require(module_name)
	 * module_path [String] 表示模块路径，是相对于 build 文件夹的路径，使用 module_name引入被打包后转为成为的路径
	 * module_from [String] 表示这个模块相对于当前工程中根目录的路径，在构建时会从这个路径拷贝文件到 build 目录 的modue_path下，然后被引用
	 * 
	 * 例如： 如下有一条配置
	 * const externals = [{
	 *    module_name:'qgame-adapter',
	 *    module_path:'src/qgame-adapter.js',
	 *    module_from:'engine/src/qgame-adapter.js'
	 * }]
	 * 
	 * 表示，在当前工程目录中存在 'engine/src/qgame-adapter.js'这个文件，在打包时会被拷贝到 build目录下的 'src/qgame-adapter.js'。
	 * 而在game.js中 使用 require('qgame-adapter') 引用时，能加载 build目录下的 'src/qgame-adapter.js' 这个模块
	 */
	const externals = [
		{
			module_name: './js/bundle.js',
			module_path: './js/bundle.js',
			module_from: 'js/bundle.js'

		},
		{
			module_name: './libs/fairygui/fairygui.js',
			module_path: './libs/fairygui/fairygui.js',
			module_from: 'libs/fairygui/fairygui.js'
		},
		{
			module_name: './libs/laya.core.js',
			module_path: './libs/laya.core.js',
			module_from: 'libs/laya.core.js'
		},
		{
			module_name: './libs/laya.d3.js',
			module_path: './libs/laya.d3.js',
			module_from: 'libs/laya.d3.js'
		},
		{
			module_name: './libs/laya.html.js',
			module_path: './libs/laya.html.js',
			module_from: 'libs/laya.html.js'
		},
		{
			module_name: './libs/p2.js',
			module_path: './libs/p2.js',
			module_from: 'libs/p2.js'

		},
		{
			module_name: './libs/laya.vvmini.js',
			module_path: './libs/laya.vvmini.js',
			module_from: '../../bin/libs/laya.vvmini.js'
		},
		{
			module_name: './libs/ltgame/generator.js',
			module_path: './libs/ltgame/generator.js',
			module_from: 'libs/ltgame/generator.js'
		},
		{
			module_name: './libs/ltgame/promise.js',
			module_path: './libs/ltgame/promise.js',
			module_from: 'libs/ltgame/promise.js'
		}]

	return {
		externals
	}
}