export default class StringEx {
    public static SplitToIntArray(str: string, splitStr: string): number[] {
        var splits = str.split(splitStr);
        var result = [];
        for (var i = 0; i < splits.length; ++i) {
            var parseNum = parseInt(splits[i]);
            if (isNaN(parseNum)) {
                parseNum = 0;
            }
            result.push(parseNum);
        }
        return result;
    }

    public static IntArrToStr(arr: number[]): string {
        var str = "";
        for (var i = 0; i < arr.length; ++i) {
            str += arr[i].toFixed(0);
            if (i < arr.length - 1) {
                str += ","
            }
        }
        return str;
    }

    public static IsNullOrEmpty(str : string) : boolean {
        if(str == null) return true;
        if(str == "") return true;
        return false;
    }
}