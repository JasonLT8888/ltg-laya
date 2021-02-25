import * as path from 'path';
import * as process from 'process';
import CommonConfig from 'Config/CommonConfig';
import { LTUtils } from 'Utils/LTUtils';
import { EFileType } from 'Config/EFileType';

/**
 * 更新项目内的框架内容
 * 详见CommonConfig.ts
 */
class UpdateProject {

    constructor() {
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou
        let currentWorkPath = process.cwd();
        console.log("开始更新框架内容");
        this._CopyLaya(currentWorkPath);
        this._CopyUnity(currentWorkPath);
        this._CopyFGUI(currentWorkPath);
        this._CopyExcel(currentWorkPath);
        console.log("更新框架完成");
    }

    private _CopyFGUI(currentWorkPath: string) {
        let projectName = LTUtils.GetDirName(currentWorkPath);
        let targetPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/');
        if (LTUtils.IsFileExist(targetPath)) {
            console.log("fgui工程仅在创建第一次进行拷贝,已跳过");
            return;
        }

        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/fgui/p_yinyou/');
        LTUtils.CopyDir(srcPath, targetPath);
        console.log("拷贝", srcPath, "完成");

        srcPath = path.join(currentWorkPath, './others/publish/templates/_project/fgui/p_common_ui/');
        targetPath = path.join(currentWorkPath, './../../fgui/p_common_ui/');
        LTUtils.CopyDir(srcPath, targetPath);
        console.log("拷贝", srcPath, "完成");

        // 处理发布路径
        // fgui_main
        {
            // 默认发布路径
            let defaultJsonPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/settings/Publish.json');
            let readDefaultJson = JSON.parse(LTUtils.ReadStrFrom(defaultJsonPath));
            readDefaultJson['codeGeneration']['codePath'] = '..\\..\\laya\\' + projectName + '\\src\\ui';
            readDefaultJson['path'] = '..\\..\\laya\\' + projectName + '\\bin\\res\\fgui';
            let saveStr = JSON.stringify(readDefaultJson);
            LTUtils.WriteStrTo(defaultJsonPath, saveStr);
            // Load发布路径
            let loadXmlPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/assets/Load/package.xml');
            let oldStr = '..\\..\\laya\\p_yinyou\\bin\\res\\fgui_load';
            let newStr = '..\\..\\laya\\' + projectName + '\\bin\\res\\fgui_load';
            let readStr = LTUtils.ReadStrFrom(loadXmlPath);
            readStr = LTUtils.ReplaceAll(readStr, oldStr, newStr);
            LTUtils.WriteStrTo(loadXmlPath, readStr);
            // 重命名项目工程
            let oldProjectPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/p_yinyou.fairy');
            let newProjectPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/' + projectName + '.fairy');
            LTUtils.Rename(oldProjectPath, newProjectPath);
        }
        // fgui_common
        {
            // 重写导出路径即可
            projectName = 'p_common_ui';
            let defaultJsonPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/settings/Publish.json');
            let readDefaultJson = JSON.parse(LTUtils.ReadStrFrom(defaultJsonPath));
            readDefaultJson['codeGeneration']['codePath'] = '..\\..\\laya\\' + projectName + '\\src\\LTG_CommonUI\\UI';
            readDefaultJson['path'] = '..\\..\\laya\\' + projectName + '\\bin\\res\\ltgame\\ui';
            let saveStr = JSON.stringify(readDefaultJson);
            LTUtils.WriteStrTo(defaultJsonPath, saveStr);
        }


    }

    private _CopyUnity(currentWorkPath: string) {
        let projectName = LTUtils.GetDirName(currentWorkPath);
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/unity');
        let targetPath = path.join(currentWorkPath, './../../unity/' + projectName + '/');

        for (let value of CommonConfig.needCopyUnity) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (value == 'Packages' || value == 'ProjectSettings') {
                if (LTUtils.IsFileExist(combieTarget)) {
                    console.log(combieTarget, '已存在,跳过拷贝');
                    continue;
                }
            }
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                // 跳过这两个文件,这两个文件会保存数据
                let skipFiles = [
                    "Configuration.xml",
                    "LTEditorData.asset"
                ];
                LTUtils.CopyDir(combieSrc, combieTarget, function (fileName: string, targetPath: string) {
                    if (skipFiles.indexOf(targetPath) >= 0) {
                        if (LTUtils.IsFileExist(targetPath)) {
                            console.log(fileName, '已存在,跳过拷贝');
                            return false;
                        }
                    }
                    return true;
                });
            }
            console.log("拷贝", combieSrc, "完成");
        }

        // Unity
        {
            // laya导出路径
            let loadConfigurationPath = path.join(currentWorkPath, './../../unity/' + projectName + '/Assets/LayaAir3D/LayaTool/Configuration.xml');
            let oldStr = '<SavePath>D:/Work_Projects/ltg-laya/FakeProject/code/laya/p_yinyou/bin/res</SavePath>';
            let newStr = '<SavePath>' + path.join(currentWorkPath, './../../laya/' + projectName + '/bin/res') + '</SavePath>';
            let readStr = LTUtils.ReadStrFrom(loadConfigurationPath);
            readStr = LTUtils.ReplaceAll(readStr, oldStr, newStr);
            LTUtils.WriteStrTo(loadConfigurationPath, readStr);

            // 框架导出路径
            let loadAssetPath = path.join(currentWorkPath, './../../unity/' + projectName + '/Assets/LTEditorData.asset');
            let oldStrs = [
                '/../../../laya/p_yinyou/src/script/config/',
                '/../../../laya/p_yinyou/bin/res/config/'
            ];
            let newStrs = [
                '/../../../laya/' + projectName + '/src/script/config/',
                '/../../../laya/' + projectName + '/bin/res/config/'
            ];
            readStr = LTUtils.ReadStrFrom(loadAssetPath);
            for (let i = 0; i < oldStrs.length; ++i) {
                let oldStr = oldStrs[i];
                let newStr = newStrs[i];
                readStr = LTUtils.ReplaceAll(readStr, oldStr, newStr);
            }
            LTUtils.WriteStrTo(loadAssetPath, readStr);
        }
    }

    private _CopyExcel(currentWorkPath: string) {
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/excel');
        let targetPath = path.join(currentWorkPath, './../../../design/excel/');
        for (let value of CommonConfig.needCopyExcel) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (!LTUtils.IsFileExist(combieTarget)) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            }
            console.log("拷贝", combieSrc, "完成");
        }
    }

    private _CopyLaya(currentWorkPath: string) {
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/laya');
        let targetPath = currentWorkPath;
        for (let value of CommonConfig.needCopy) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                if (value != 'tsconfig.json') {
                    LTUtils.CopyFile(combieSrc, combieTarget);
                } else {
                    if (!LTUtils.IsFileExist(combieTarget)) {
                        LTUtils.CopyFile(combieSrc, combieTarget);
                    }
                }
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }
            console.log("拷贝", combieSrc, "完成");
        }

        for (let value of CommonConfig.initProject) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (!LTUtils.IsFileExist(combieTarget)) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            }
            console.log("拷贝", combieSrc, "完成");
        }
    }

}

new UpdateProject();