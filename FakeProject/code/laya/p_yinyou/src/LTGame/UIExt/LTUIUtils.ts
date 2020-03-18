export default class LTUIUtils {

    public static CloneLabel(label: Laya.Label): Laya.Label {
        var newText = new Laya.Label();
        LTUIUtils.CloneUIProp(label, newText);
        newText.text = label.text;
        newText.fontSize = label.fontSize;
        newText.color = label.color;
        newText.strokeColor = label.strokeColor;
        newText.stroke = label.stroke;
        return newText;
    }

    public static CloneFontClip(clip : Laya.FontClip) : Laya.FontClip {
        var newFontClip = new Laya.FontClip();
        LTUIUtils.CloneUIProp(clip, newFontClip);
        newFontClip.sizeGrid = clip.sizeGrid;
        newFontClip.skin = clip.skin;
        newFontClip.group = clip.group;
        newFontClip.align = clip.align;
        newFontClip.sheet = clip.sheet;
        newFontClip.value = clip.value;
        newFontClip.spaceX = clip.spaceX;
        newFontClip.spaceY = clip.spaceY;
        newFontClip.direction = clip.direction;
        return newFontClip;
    }

    public static CloneImage(img: Laya.Image): Laya.Image {
        var newImage = new Laya.Image();
        LTUIUtils.CloneUIProp(img, newImage);
        newImage.skin = img.skin;
        newImage.sizeGrid = img.sizeGrid;
        return newImage;
    }

    public static CloneUIProp(srcNode : Laya.UIComponent, dstNode : Laya.UIComponent) {
        dstNode.name = srcNode.name;
        dstNode.anchorX = srcNode.anchorX;
        dstNode.anchorY = srcNode.anchorY;
        dstNode.x = srcNode.x;
        dstNode.y = srcNode.y;
        dstNode.centerX = srcNode.centerX;
        dstNode.centerY = srcNode.centerY;
        dstNode.left = srcNode.left;
        dstNode.right = srcNode.right;
        dstNode.top = srcNode.top;
        dstNode.bottom = srcNode.bottom;
        dstNode.width = srcNode.width;
        dstNode.height = srcNode.height;
        // dstNode._renderType = srcNode._renderType;
    }

    // -------------------微信头像获取器-------------------

    private static _headCache = {};

    /**
     * 微信头像获取器
     * @param {头像Url} headUrl 
     * @param {显示头像Img} showImg 
     */
    public static SetWxHead(headUrl: string, showImg: Laya.Image) {
        if (this._headCache[headUrl] != undefined) {
            showImg.skin = (this._headCache[headUrl]);
        } else {
            // 创建请求
            let httpRequest = new Laya.HttpRequest();
            httpRequest.once(Laya.Event.COMPLETE, this, (data) => {
                let byte = new Laya.Byte(data);
                byte.writeArrayBuffer(data, 4);
                let blob = new Laya.Browser.window.Blob([data], { type: 'image/apng' });
                let url = Laya.Browser.window.URL.createObjectURL(blob);
                showImg.skin = url;
                // 缓存
                this._headCache[headUrl] = url;
            });
            httpRequest.once(Laya.Event.ERROR, this, (data) => {
                // 输出错误
                console.error(data);
            });
            // 发送请求
            httpRequest.send(headUrl, '', 'get', 'arraybuffer');
        }
    }
    // -------------------微信头像获取器-------------------

}