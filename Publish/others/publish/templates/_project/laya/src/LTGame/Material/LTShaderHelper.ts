import LTRes from "../Res/LTRes";
import LTPlatform from "../Platform/LTPlatform";
import { EPlatformType } from "../Platform/EPlatformType";

const COLLECT_SHADER_INFO = false;
export class LTShaderHelper {

    public static InitRecorder() {
        if (LTPlatform.instance.platform == EPlatformType.Web && COLLECT_SHADER_INFO) {
            Laya.Shader3D.debugMode = true;
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, function (event: Laya.Event): void {
                let shaderObj: any = {};
                for (let i = 0; i < Laya.Shader3D.debugShaderVariantCollection.variantCount; i++) {
                    let shadervariant: Laya.ShaderVariant = Laya.Shader3D.debugShaderVariantCollection.getByIndex(i);
                    let shaderName: string = shadervariant.shader.name;
                    if (!shaderObj[shaderName]) shaderObj[shaderName] = [];
                    let arr = shaderObj[shaderName];
                    let obj: any = {};
                    obj.defineNames = shadervariant.defineNames;
                    obj.passIndex = shadervariant.passIndex;
                    obj.subShaderIndex = shadervariant.subShaderIndex;
                    arr.push(obj);
                }
                console.log(JSON.stringify(shaderObj));
                console.log("请保存为res/config/shader_warm.json");
            });
            console.error("开始收集shader信息,按下鼠标右键可以导出信息");
        } else {
            Laya.Shader3D.debugMode = false;
        }
    }

    public static async WarmShader() {
        let configJson = await LTRes.LoadAndGet("res/config/shader_warm.json", true);
        if (configJson == null) {
            console.log("无shader信息,跳过预热");
            return;
        }
        let keys = Object.getOwnPropertyNames(configJson);
        for (let key of keys) {
            let value = configJson[key];
            if (value == null) continue;
            let arr = value as Array<any>;
            for (let index = 0; index < arr.length; index++) {
                let obj = arr[index];
                Laya.Shader3D.compileShaderByDefineNames(key, obj.subShaderIndex, obj.passIndex, obj.defineNames);
            }
        }
        console.log("Shader预编译完成");
    }

}