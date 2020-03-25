export class ConfigManager {

    static _configList: any[] = [];

    static get needLoadCount(): number {
        return this._configList.length;
    }

    public static AddConfig(configName: any) {
        ConfigManager._configList.push(configName);
    }

    public static StartLoad(onFinished: Laya.Handler, onProgress: Laya.Handler = null) {

        if (ConfigManager._configList.length == 0) {
            if (onFinished) {
                onFinished.run();
            }
            return;
        }

        var loadUrls = [];
        for (let configName of ConfigManager._configList) {
            loadUrls.push(configName.path);
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, () => {
            for (let configName of ConfigManager._configList) {
                configName.data = Laya.loader.getRes(configName.path);
                configName.dataList = [];
                for (let configKey in configName.data) {
                    let value = configName.data[configKey];
                    if (value != null) {
                        configName.dataList.push(value);
                    }
                }
            }
            if (onFinished) {
                onFinished.run();
            }
        }), onProgress);
    }

}
