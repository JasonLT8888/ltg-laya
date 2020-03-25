export default class LTList<T> {

    private _values: Array<T> = [];

    public get Count() {
        return this._values.length;
    }

    public Set(key: number, value: T) {
        if (key >= this._values.length) {
            console.error("数组越界当前长度${this._values.length},尝试访问长度${key}");
            return;
        }
        this._values[key] = value;
    }

    public Get(key: number): T {
        if (key >= this._values.length) {
            console.error("数组越界当前长度${this._values.length},尝试访问长度${key}");
            return null;
        }
        return this._values[key];
    }

    public Add(value: T) {
        this._values.push(value);
    }

    public AddRange(...value: T[]) {
        value.forEach(element => {
            this.Add(element);
        });
    }

    public IndexOf(value: T): number {
        return this._values.indexOf(value);
    }

    public Remove(value: T): boolean {
        var valueIndex = this.IndexOf(value);
        return this.RemoveAt(valueIndex)
    }

    public RemoveAt(index: number): boolean {
        if (index < 0) return false;
        this._values.splice(index, 1);
        return true;
    }

    public Clear() {
        this._values = [];
    }

}