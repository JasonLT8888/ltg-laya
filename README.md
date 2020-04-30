# LTG-Laya 是一个Laya小游戏快速开发框架
## 相关功能
* 简化开发流程
* 小游戏平台async/await支持
* 简化平台sdk接入流程
* 一键自动发布
* 自动拆分子包
## 对应版本
* Unity: 2018.4.17f1 
* Laya:2.6.0beta 

## 目录说明
* FakeProject 示例工程
* Other 杂项文件
* FGuiProject 框架UI工程
* Publish 发布路径

## 模块化组件规格说明
* 大交叉推广 
	规格:680*408
	预制名字:__othergames  
	![大交叉推广](/Doc/img/img_othergames.png)
* 爆款游戏
	规格:139*176
	预制名字:__hotgame  
	![大交叉推广](/Doc/img/img_hotgame.png)
* Oppo嵌入式原生广告
	规格:自定义,会自动等比拉伸进行填充
	预制名字:__nativeicon  
	备注:  
		1.可以在自定义数据中指定广告id(类似178855,178856)  
		2.代码中进行强制跳转可以直接调用m___nativeicon.ClickAd()  
	![大交叉推广](/Doc/img/img_nativeicon.png)  
	

## 使用说明
1. 使用layaide新建一个工程
2. 将Publish下的*所有文件*(others和package.json)拷贝到工程*根目录*
3. 在根目录执行npm install 命令
4. 运行npm指令:update-ltg
5. 开始写代码

## npm命令说明:
* build:编译代码并持续watch
* publish-xx:发布指定平台代码
* update-ltg:更新框架代码（使用others/内的框架模板替换工程内的）

# 待续

## 其他
如有疑问,请联系QQ:821580467


