import StringEx from "../LTUtils/StringEx";

export default class LTHttp {

    private static _post_method = "post";
    private static _get_method = "get";

    private static _url_split = "?";
    private static _param_split = "&";
    private static _value_split = "=";

    public static enableDebug: boolean = false;

    /**
     * 专业发起HTTP请求,不会自动转get/post,完全按传入参数调用
     * @param url 
     * @param onSuccess 
     * @param onFailed 
     * @param isGet 
     * @param data 
     * @param responseType 
     * @param headers 
     */
    static SendPro(url: string, onSuccess: Laya.Handler = null, onFailed: Laya.Handler = null, method: string = "get",
        data: any = null, responseType: string = "json", headers: any[] = ["Content-Type", "application/json"]) {
        let xhr: Laya.HttpRequest = new Laya.HttpRequest();
        xhr.http.timeout = 10000;//设置超时时间
        if (onSuccess != null) {
            xhr.once(Laya.Event.COMPLETE, onSuccess.caller, onSuccess.method);
        }
        if (onFailed != null) {
            xhr.once(Laya.Event.ERROR, onFailed.caller, onFailed.method);
        }
        xhr.send(url, JSON.stringify(data), method, responseType, headers);
        if (this.enableDebug) {
            console.log(url, data, method, responseType, headers);
        }
    }

    /**
     * 发起HTTP请求,会自动转get/post
     * @param url 
     * @param onSuccess 
     * @param onFailed 
     * @param isGet 默认为false
     * @param data 
     * @param responseType 
     * @param headers 
     */
    static Send(url: string, onSuccess: Laya.Handler = null, onFailed: Laya.Handler = null, isGet: boolean = false,
        data: any = null, responseType: string = "text", headers?: any[] | null) {
        let splitUrl = url.split(this._url_split);
        let origUrl = splitUrl[0];
        let param = splitUrl[1];
        if (param == null) {
            param = "";
        }

        if (isGet) {
            if (data != null) {
                if (!StringEx.IsNullOrEmpty(param)) {
                    param += this._param_split;
                }
                for (let i in data) {
                    param += i + this._value_split + data[i] + this._param_split;
                }
                param = param.slice(0, param.length - 1);
            }
            let combieUrl = origUrl;
            if (!StringEx.IsNullOrEmpty(param)) {
                combieUrl = origUrl + this._url_split + param;
            }
            this.SendPro(combieUrl, onSuccess, onFailed, this._get_method, null, responseType, headers);
        } else {
            if (!StringEx.IsNullOrEmpty(param)) {
                if (data == null) {
                    data = {};
                }
                let splitParam = param.split(this._param_split);
                for (let singleParam of splitParam) {
                    let kv = singleParam.split(this._value_split);
                    data[kv[0]] = kv[1];
                }
            }
            this.SendPro(origUrl, onSuccess, onFailed, this._post_method, data, responseType, headers);
        }
    }

}