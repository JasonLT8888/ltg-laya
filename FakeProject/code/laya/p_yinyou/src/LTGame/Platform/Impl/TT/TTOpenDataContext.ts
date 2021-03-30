import { OpenDataContext } from "../../IPlatform";

export default class TTOpenDataContext extends OpenDataContext {
    openDataContext: any;
    base: any;
    private group: string = "defaultUserGroup"
    constructor(_base: any) {
        super(_base);
        this.openDataContext = this.base.getOpenDataContext();
    }
    /** 往开放域推送数据 */
    public postMsg(msg: object): void {
        if (this.openDataContext) {
            this.openDataContext.postMessage(msg);
        }
    }

    public setUserGroup(group: string) {
        if (!group) {
            group = this.group;
        } else {
            this.group = group;
        }
        this.base.setUserGroup({
            groupId: group,
            success: (res) => { console.log("set group success", res) },
            fail: (res) => { console.error("set group fail", res) },
            complete: () => { console.log("set group complete") }
        })
        // this.postMsg({
        //     command: "setUserGroup",
        //     data: { groupId: group }
        // });
    }
    public setUserCloudStorage(obj) {
        this.postMsg({
            command: "setUserCloudStorage",
            data: { key: "score", value: obj.score }
        });
    }
    public getUserCloudStorage(keys: string[]) {
        this.postMsg({
            command: "getUserCloudStorage",
            data: keys
        });
    }

    public getCloudStorageByRelation() {
        this.postMsg({
            command: "getCloudStorageByRelation",
            data: this.group
        }); 
        
    }
}