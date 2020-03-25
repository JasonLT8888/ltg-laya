export default class ArrayEx {

    public static Replace<T>(arr: T[], oldObj: T, newObj: T): boolean {
        let index = arr.indexOf(oldObj);
        if (index < 0) return false;
        arr.splice(index, 1, newObj);
        return true;
    }

    public static Remove<T>(arr: T[], obj: T): boolean {
        let index = arr.indexOf(obj);
        if (index < 0) return false;
        arr.splice(index, 1);
        return true;
    }

    public static RemoveAt<T>(arr: T[], index: number): boolean {
        if (arr.length <= index) return false;
        arr.splice(index, 1);
        return true;
    }

    public static Contains<T>(arr: T[], obj: T): boolean {
        let index = arr.indexOf(obj);
        return index >= 0;
    }

    public static Copy<T>(arr: T[]): T[] {
        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        return result;
    }

}