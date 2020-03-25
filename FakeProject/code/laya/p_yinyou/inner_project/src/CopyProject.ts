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

        let targetPath = path.join(rootPath, 'others/publish/templates/_project/laya/');

        console.log("开始拷贝工程");
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
            console.log("拷贝", combieSrc, "完成");
        }
        console.log("拷贝完成,开始发布,请耐心等待");

        // 将整个others拷贝到发布目录
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou\others
        let othersPath = path.join(rootPath, 'others');
        // D:\Work_Projects\ltg-laya\Publish\others
        let publishPath = path.join(rootPath, './../../../../Publish/others');
        LTUtils.DeleteDir(publishPath);
        LTUtils.CopyDir(othersPath, publishPath, function (fileName: string) {
            if (fileName.endsWith('node_modules')) {
                return false;
            }
            return true;
        });
        // 拷贝package.json
        let packageJsonPath = path.join(rootPath, 'package.json');
        let targetPackageJsonPath = path.join(rootPath, './../../../../Publish/package.json');
        LTUtils.CopyFile(packageJsonPath, targetPackageJsonPath);
        console.log("已发布到", path.join(rootPath, './../../../../Publish'));
    }

}

new CopyProject();