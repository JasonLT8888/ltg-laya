import * as path from 'path';
import { LTUtils } from 'Utils/LTUtils';

class Test {

    constructor() {

        let currentWorkPath = process.cwd();
        let projectName = LTUtils.GetDirName(currentWorkPath);
        let loadJsonPath = path.join(currentWorkPath, './../../fgui/' + projectName + '/assets/Load/package.xml');
        let oldStr = '..\\..\\laya\\p_yinyou\\bin\\res\\fgui_load';
        let newStr = '..\\..\\laya\\' + projectName + '\\bin\\res\\fgui_load';
        let readStr = LTUtils.ReadStrFrom(loadJsonPath);
        readStr = LTUtils.ReplaceAll(readStr, oldStr, newStr);
    }

}

new Test();