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
        console.log("更新框架完成");
    }

    private _CopyFGUI(currentWorkPath: string) {
        let projectName = LTUtils.GetDirName(currentWorkPath);
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/fgui');
        let targetPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/');
        if (LTUtils.IsFileExist(targetPath)) {
            console.log("fgui工程仅在创建第一次进行拷贝,已跳过");
            return;
        }

        for (let value of CommonConfig.needUpdateFGUI) {
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
            console.log("拷贝", combieSrc, "完成");
        }

        // 处理发布路径
        // 默认发布路径
        let defaultJsonPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/settings/Publish.json');
        let readDefaultJson = JSON.parse(LTUtils.ReadStrFrom(defaultJsonPath));
        readDefaultJson['codeGeneration']['codePath'] = '..\\\\..\\\\laya\\\\' + projectName + '\\\\src\\\\ui';
        readDefaultJson['path'] = '..\\\\..\\\\laya\\\\' + projectName + '\\\\bin\\\\res\\\\fgui';
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
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget, function (fileName: string, targetPath: string) {
                    if (fileName == "Configuration.xml") {
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
    }

}

new UpdateProject();