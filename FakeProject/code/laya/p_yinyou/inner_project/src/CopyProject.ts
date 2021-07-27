import * as path from 'path';
import * as process from 'process';
import CommonConfig from 'Config/CommonConfig';
import { LTUtils } from 'Utils/LTUtils';
import { EFileType } from 'Config/EFileType';


/**
 * 根据当前工程生成others文件夹内容
 * 详见CommonConfig.ts
 */
class CopyProject {

    constructor() {
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou\inner_project
        let currentWorkPath = process.cwd();
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou
        let rootPath = path.join(currentWorkPath, './../');
        let deletePath = path.join(rootPath, 'others/publish/templates/_project/');
        LTUtils.DeleteDir(deletePath);
        console.log("删除", deletePath, "完成");

        console.log("开始拷贝工程_Laya");
        this._CopyLaya(rootPath);
        console.log("laya工程拷贝完成");
        console.log("开始拷贝工程_Unity");
        this._CopyUnity(rootPath);
        console.log("unity工程拷贝完成");
        console.log("开始拷贝工程_FGUI");
        this._CopyFGUI(rootPath);
        console.log("fgui工程拷贝完成");
        console.log("开始拷贝工程_Excel");
        this._CopyExcel(rootPath);
        console.log("excel工程拷贝完成");

        console.log("所有工程拷贝完成,开始发布,请耐心等待");
        // 将整个others拷贝到发布目录
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou\others
        let othersPath = path.join(rootPath, 'others');
        // D:\Work_Projects\ltg-laya\Publish\others
        let publishPath = path.join(rootPath, './../../../../Publish/others');
        LTUtils.DeleteDir(publishPath);
        LTUtils.CopyDir(othersPath, publishPath);
        // 拷贝package.json
        let packageJsonPath = path.join(rootPath, 'package.json');
        let targetPackageJsonPath = path.join(rootPath, './../../../../Publish/package.json');
        LTUtils.CopyFile(packageJsonPath, targetPackageJsonPath);
        // 拷贝config目录
        let cfgPath = path.join(rootPath, 'pack_config');
        let targetcfgPath = path.join(rootPath, './../../../../Publish/pack_config');
        LTUtils.DeleteDir(targetcfgPath);
        LTUtils.CopyDir(cfgPath, targetcfgPath);
        console.log("已发布到", path.join(rootPath, './../../../../Publish'));
    }

    /**
     * 拷贝excel
     */
    private _CopyExcel(rootPath: string) {
        let targetPath = path.join(rootPath, 'others/publish/templates/_project/excel/');
        let srcPath = path.join(rootPath, './../../../design/excel/');

        for (let value of CommonConfig.needCopyExcel) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }
        }
    }

    /**
     * 拷贝fgui
     * @param rootPath 
     */
    private _CopyFGUI(rootPath: string) {
        let projectName = LTUtils.GetDirName(rootPath);

        let targetPath = path.join(rootPath, 'others/publish/templates/_project/fgui/' + projectName + "/");
        let srcPath = path.join(rootPath, './../../fgui/' + projectName + '/');
        for (let value of CommonConfig.needCopyFGUI) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }
        }
        console.log("拷贝", projectName, "完成");

        // 单独拷贝main
        let targetMainPath = path.join(rootPath, 'others/publish/templates/_project/fgui/' + projectName + '/assets/Main');
        let srcMainPath = path.join(rootPath, 'fake_res/fgui/Main');
        LTUtils.CopyDir(srcMainPath, targetMainPath);
        console.log("拷贝", srcMainPath, "完成");

        // 拷贝公用ui
        targetPath = path.join(rootPath, 'others/publish/templates/_project/fgui/p_common_ui/');
        srcPath = path.join(rootPath, './../../fgui/p_common_ui/');
        LTUtils.CopyDir(srcPath, targetPath, (fileName: string) => {
            if (fileName == '.objs') {
                return false;
            }
            return true;
        });
        console.log("拷贝", srcPath, "完成");
        // 拷贝公用广告 ui
        var adPath = path.join(rootPath, 'others/publish/templates/_project/fgui/p_ltgame/');
        var adsrcPath = path.join(rootPath, './../../fgui/p_ltgame/');
        LTUtils.CopyDir(adsrcPath, adPath, (fileName: string) => {
            if (fileName == '.objs') {
                return false;
            }
            return true;
        });
        console.log("拷贝", adsrcPath, "完成");
    }

    /**
     * 拷贝unity
     * @param rootPath 
     */
    private _CopyUnity(rootPath: string) {
        let projectName = LTUtils.GetDirName(rootPath);
        let targetPath = path.join(rootPath, 'others/publish/templates/_project/unity/');
        let srcPath = path.join(rootPath, './../../unity/' + projectName + '/');
        for (let value of CommonConfig.needCopyUnity) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }
        }
        console.log("拷贝unity目录完成");
    }

    /**
     * 拷贝laya
     * @param rootPath 
     */
    private _CopyLaya(rootPath: string) {
        let targetPath = path.join(rootPath, 'others/publish/templates/_project/laya/');
        let fakePath = path.join(rootPath, 'fake_res/laya/');
        for (let value of CommonConfig.needCopy) {
            let combieSrc = path.join(rootPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }

        }
        console.log("拷贝fake_res完成");

        // 判定初始工程初始化
        for (let value of CommonConfig.initProject) {
            let combieSrc = path.join(rootPath, value);
            if (value == CommonConfig.initProject[0]) {
                combieSrc = path.join(fakePath, value);
            }
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }
        }
        console.log("拷贝initProject完成");
    }

}

new CopyProject();