import * as fs from 'fs';
import * as path from 'path';
import * as uglify_es from 'uglify-es';
import * as child_process from 'child_process';

export class LTUtils {

    static CompressJs(srcPath: string, targetPath: string): string {
        let oldStat = fs.statSync(srcPath);
        let fileName = path.win32.basename(srcPath);
        let srcJs = fs.readFileSync(srcPath, {
            "encoding": "utf-8"
        });
        let minJs = uglify_es.minify(srcJs);
        if (minJs.error) {
            console.error("压缩文件", fileName, "出错", minJs.error);
            throw SyntaxError("文件压缩失败,中断发包");
        }
        this.WriteStrTo(targetPath, minJs.code);
        let newStat = fs.statSync(targetPath);
        let size1 = oldStat.size / 1024;
        let size2 = newStat.size / 1024;
        let rate = size2 / size1;
        let rateStr = "(" + (rate * 100).toFixed(2) + "%)";
        console.log("压缩", fileName.green, size1.toFixed(2) + "Kb >>>>>>>> " + size2.toFixed(2) + "Kb " + (rate > 1 ? rateStr.red : rateStr.green));
        return minJs.code;
    }

    /**
     * 将制定文件转换为es5标准
     * @param srcPath 
     */
    static WrapToES5(srcPath: string) {
        let buffer = child_process.execSync("babel ");
        console.log(buffer);
    }

    static ReplaceAll(str: string, replaceStr: string, newStr: string): string {
        let result = str;
        while (result.indexOf(replaceStr) >= 0) {
            result = result.replace(replaceStr, newStr);
        }
        return result;
    }

    static MakeDirExist(dirPath: string): boolean {
        let dirStat = null;
        if (fs.existsSync(dirPath)) {
            dirStat = fs.statSync(dirPath);
        }
        if (!dirStat || !dirStat.isDirectory()) {
            fs.mkdirSync(dirPath, {
                recursive: true
            });
            if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
                return true;
            }
        } else {
            return true;
        }
        return false;
    }

    static DeleteDir(targetDir: string) {
        let files = [];
        if (fs.existsSync(targetDir)) {
            files = fs.readdirSync(targetDir);
            for (let i = 0; i < files.length; ++i) {
                let file = files[i];
                let curPath = path.join(targetDir, file);
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    this.DeleteDir(curPath);
                } else {
                    // delete file
                    fs.unlinkSync(curPath);
                }
            }
            fs.rmdirSync(targetDir);
        }
    }

    static CopyFile(srcFile: string, targetFile: string) {
        let lastIndex = targetFile.lastIndexOf("\\");
        let dirPath = targetFile.substring(0, lastIndex);
        LTUtils.MakeDirExist(dirPath);
        fs.copyFileSync(srcFile, targetFile);
    }

    static CopyDir(srcDir: string, targetDir: string, checkFunc: Function = null) {
        this.MakeDirExist(targetDir);
        let files = fs.readdirSync(srcDir);
        for (let i = 0; i < files.length; ++i) {
            let fileName = files[i];
            if (checkFunc && !checkFunc(fileName)) {
                // true表示继续使用,false表示跳过
                continue;
            }
            let filePath = path.join(srcDir, fileName);
            let targetPath = path.join(targetDir, fileName);
            let fileStat = fs.statSync(filePath);
            if (fileStat.isDirectory()) {
                this.CopyDir(filePath, targetPath);
            } else {
                fs.copyFileSync(filePath, targetPath);
            }
        }
    }

    /**
     * 从文件读取内容
     * @param filePath 指定文件路径
     */
    public static ReadStrFrom(filePath: string): string {
        if (!LTUtils.IsFileExist(filePath)) {
            return null;
        }
        let fsStat = fs.statSync(filePath);
        if (fsStat.isDirectory()) {
            return null;
        }
        return fs.readFileSync(filePath, {
            "encoding": "utf-8"
        });
    }

    /**
     * 判断文件是否存在
     * @param filePath 
     */
    public static IsFileExist(filePath: string): boolean {
        return fs.existsSync(filePath);
    }

    /**
     * 向文件写入内容
     * @param filePath 指定文件路径
     */
    public static WriteStrTo(filePath: string, writeStr: string) {
        let lastIndex = filePath.lastIndexOf("\\");
        let dirPath = filePath.substring(0, lastIndex);
        LTUtils.MakeDirExist(dirPath);
        fs.writeFileSync(filePath, writeStr, {
            "encoding": "utf-8"
        });
    }
}