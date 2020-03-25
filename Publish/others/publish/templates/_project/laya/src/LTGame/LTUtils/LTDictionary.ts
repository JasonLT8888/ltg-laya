export default class LTDictionary<T1, T2> {
    private _values: Array<T2> = [];
    private _keys: Array<T1> = [];

    /**
     * 获取所有的子元素列表。
     */
    public get values(): Array<T2> {
        return this._values;
    }

    /**
     * 获取所有的子元素键名列表。
     */
    public get keys(): Array<T1> {
        return this._keys;
    }

    public get count(): number {
        return this._keys.length;
    }

    /**
     * 给指定的键名设置值。
     * @param   key 键名。
     * @param   value 值。
     */
    public set(key: T1, value: T2): void {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    }

    /**
     * 获取指定对象的键名索引。
     * @param   key 键名对象。
     * @return 键名索引。
     */
    public indexOf(key: T1): number {
        var index: number = this._keys.indexOf(key);
        if (index >= 0) return index;
        return -1;
    }

    /**
     * 返回指定键名的值。
     * @param   key 键名对象。
     * @return 指定键名的值。
     */
    public Get(key: T1): T2 {
        var index: number = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    }

    public ContainsKey(key: T1): boolean {
        return this.indexOf(key) >= 0;
    }

    public Add(key: T1, value: T2): boolean {
        var index = this.indexOf(key);
        if (index >= 0) {
            return false;
        }
        this._keys.push(key);
        this._values.push(value);
        return true;
    }

    /**
     * 移除指定键名的值。
     * @param   key 键名对象。
     * @return 是否成功移除。
     */
    public Remove(key: T1): boolean {
        var index: number = this.indexOf(key);
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * 清除此对象的键名列表和键值列表。
     */
    public Clear(): void {
        this._values.length = 0;
        this._keys.length = 0;
    }
}