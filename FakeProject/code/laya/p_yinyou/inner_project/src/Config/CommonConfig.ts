export default class CommonConfig {

    /**
     * laya所需要文件,每次更新
     */
    static needCopy = [
        'src/LTGame',
        'src/SDK',
        'bin/res/ltgame',
        'bin/libs',
        'bin/index.js',
        'libs'
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
     * unity所需文件,配置文件保留
     */
    static needCopyUnity = [
        'Assets/Plugins',
        'Assets/LayaAir3D',
        'Assets/StreamingAssets'
    ];

}