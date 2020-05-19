export default class ColorEx {

    public static RgbToHex(r: number, g: number, b: number): string {
        var color = r << 16 | g << 8 | b;
        var str = color.toString(16);
        while (str.length < 6) str = "0" + str;
        return "#" + str;
    }

    public static ColorToHex(color: Laya.Color): string {
        return this.RgbToHex(color.r * 255, color.g * 255, color.b * 255);
    }

    public static HexToColor(colorHex: string, alpha: number = null): Laya.Color {
        if (colorHex.startsWith("#")) {
            colorHex = colorHex.substring(1);
        }
        let cr = colorHex.substring(0, 2);
        let cg = colorHex.substring(2, 4);
        let cb = colorHex.substring(4, 6);
        let ca = colorHex.substring(6, 8);
        let nr = parseInt(cr, 16);
        let ng = parseInt(cg, 16);
        let nb = parseInt(cb, 16);
        let na = alpha ? alpha : parseInt(ca, 16);
        return new Laya.Color(nr / 255, ng / 255, nb / 255, na);
    }

    public static ToV3(color: Laya.Color): Laya.Vector3 {
        return new Laya.Vector3(color.r, color.g, color.b);
    }

    public static ToV4(color: Laya.Color): Laya.Vector4 {
        return new Laya.Vector4(color.r, color.g, color.b, color.a);
    }

    public static HexToV3(colorHex: string): Laya.Vector3 {
        if (colorHex.startsWith("#")) {
            colorHex = colorHex.substring(1);
        }
        let cr = colorHex.substring(0, 2);
        let cg = colorHex.substring(2, 4);
        let cb = colorHex.substring(4, 6);
        let nr = parseInt(cr, 16);
        let ng = parseInt(cg, 16);
        let nb = parseInt(cb, 16);
        return new Laya.Vector3(nr / 255, ng / 255, nb / 255);
    }

    public static HexToV4(colorHex: string, alpha: number = null): Laya.Vector4 {
        if (colorHex.startsWith("#")) {
            colorHex = colorHex.substring(1);
        }
        let cr = colorHex.substring(0, 2);
        let cg = colorHex.substring(2, 4);
        let cb = colorHex.substring(4, 6);
        let ca = colorHex.substring(6, 8);
        let nr = parseInt(cr, 16);
        let ng = parseInt(cg, 16);
        let nb = parseInt(cb, 16);
        let na = alpha ? alpha : parseInt(ca, 16);
        return new Laya.Vector4(nr / 255, ng / 255, nb / 255, na);
    }

    private static _Hex(num: number): string {
        return ("0" + num.toString(16)).slice(-2);
    }

}