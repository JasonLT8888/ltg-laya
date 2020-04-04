import * as process from 'process';
import { PublishHandler } from 'Pack/PublishHandler';

class Main {

    constructor() {
        let platformPath = this._GetParam("-p");
        if (platformPath == null) {
            console.log("需要传入-p 平台参数");
            return;
        }

        let useCompress = this._GetParam("-c") == "true" ? true : false;

        new PublishHandler(platformPath, useCompress).Start();
    }

    private _GetParam(paramName: string): string {
        let paramIndex = process.argv.indexOf(paramName);
        if (paramIndex < 0) return null;
        return process.argv[paramIndex + 1];
    }

}

new Main();