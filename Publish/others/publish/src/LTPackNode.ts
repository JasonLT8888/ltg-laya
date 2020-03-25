export class LTPackNode {

    /**
     * 完整路径
     */
    public fullPath: string;

    /**
     * 
     */
    public isNode: boolean;

    /**
     * 大小
     */
    public size: number;

    /**
     * 父节点
     */
    public parent: LTPackNode;
    /**
     * 子节点
     */
    public childs: LTPackNode[];

    constructor() {
        this.childs = [];
        this.size = 0;
    }
}