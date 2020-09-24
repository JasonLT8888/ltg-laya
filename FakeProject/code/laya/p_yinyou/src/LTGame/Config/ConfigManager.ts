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
        let loadUrls = [];
        for (let configName of ConfigManager._configList) {
            loadUrls.push(configName.path);
        }
        Laya.loader.create(loadUrls, Laya.Handler.create(this, () => {
            for (let configName of ConfigManager._configList) {
                configName.data = Laya.loader.getRes(configName.path);
                configName.dataList = [];
                if (configName.isConst) {
                    Object.setPrototypeOf(configName.data, configName.config.prototype);
                } else {
                    for (let configKey in configName.data) {
                        let value = configName.data[configKey];
                        if (value != null) {
                            Object.setPrototypeOf(value, configName.config.prototype);
                            configName.dataList.push(value);
                        }
                    }
                    if (configName.dataList.length > 0) {
                        configName.lastData = configName.dataList[configName.dataList.length - 1];
                    }
                }
            }
            if (onFinished) {
                onFinished.run();
            }
        }), onProgress);
    }

}
