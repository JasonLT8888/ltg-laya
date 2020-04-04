export default class StringEx {

    static ReplaceAll(str: string, oldStr: string, newStr: string): string {
        while (str.indexOf(oldStr) >= 0) {
            str = str.replace(oldStr, newStr);
        }
        return str;
    }

    public static IsNullOrEmpty(str: string): boolean {
        return str == null || str == "";
    }

}