export default class CommonConfig {

    /**
     * laya所需要文件,每次更新
     */
    static needCopy = [
        'src/LTGame',
        'src/SDK',
        'src/LTG_CommonUI',
        'bin/res/ltgame',
        'bin/libs',
        'bin/index.js',
        'libs',
        '.vscode/launch.json',
        'bin/game.js',
        'bin/game.json',
        'bin/index.html',
        'tsconfig.json'
    ];

    /**
     * fgui所需要文件,只创建第一次
     */
    static needCopyFGUI = [
        'assets/Load',
        'settings',
        'p_yinyou.fairy'
    ];

    /**
     * fgui所需文件,只创建第一次
     */
    static needUpdateFGUI = [
        'assets',
        'settings',
        'p_yinyou.fairy'
    ];

    /**
     * unity所需文件,配置文件保留
     */
    static needCopyUnity = [
        'Assets/Plugins',
        'Assets/LayaAir3D',
        'Assets/StreamingAssets',
        'Assets/LTEditorData.asset',
        'Packages',
        'ProjectSettings'
    ];

    /**
     * 初始工程需要文件
     */
    static initProject = [
        "src/script/ui/UI_MainMediator.ts",
        "src/script/common/GlobalUnit.ts",
        "src/script/common/GameData.ts",
        "src/script/common/ResDefine.ts",
        "src/script/scene/MainScene.ts",
        "src/script/scene/SplashScene.ts",
        "src/script/config/PackConst.ts",
        "src/script/config/GameConst.ts",
        "src/script/config/AudioConfig.ts",
        "src/script/config/EffectConfig.ts",
        "src/script/manager/AudioManager.ts",
        "src/script/manager/EffectManager.ts",
        "src/script/MainStart.ts",
        "src/Main.ts",
    ];

    /**
     * 需要初始化的配置内容
     */
    static needCopyExcel = [
        "game_const.xlsx",
        "pack_const.xlsx",
        "effect_config.xlsx",
        "audio_config.xlsx"
    ];

}