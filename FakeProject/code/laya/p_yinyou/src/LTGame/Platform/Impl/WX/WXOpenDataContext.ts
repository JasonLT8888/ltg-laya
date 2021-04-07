import OpenDataContext from "../OpenDataContext";



export default class WXOpenDataContext extends OpenDataContext {
    openDataContext: any;
    base: any;
    private group: string = "defaultUserGroup"
    constructor(_base: any) {
        super(_base);
        this.supportOpenContext = true;
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
    subscribeAppMsg(longTime: boolean = true) {
        return new Promise<boolean>((resolve, reject) => {
            if (longTime) {
                this.base.subscribeAppMsg({
                    subscribe: true,
                    success: (res) => {
                        console.log("----subscribeAppMsg----success", res);
                        this.base.requestSubscribeSystemMessage({
                            msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
                            success(res) {
                                console.log("----requestSubscribeSystemMessage----success", res);
                                resolve(true);
                                // res === {
                                //   errMsg: "requestSubscribeSystemMessage:ok",
                                //   SYS_MSG_TYPE_INTERACTIVE: "accept",
                                //   SYS_MSG_TYPE_RANK: 'reject'
                                // }
                            }
                        })
                    },
                    fail: (res) => {
                        resolve(false);
                        console.log("----subscribeAppMsg----fail", res);
                    }
                });
            } else {
                this.base.subscribeAppMsg({
                    tmplIds: ['497925a3da1a6bca31ee9b75e06003e0'],
                    subscribe: true,
                    success: (res) => {
                        console.log("----subscribeAppMsg----success", res);
                        this.base.requestSubscribeSystemMessage({
                            msgTypeList: ['SYS_MSG_TYPE_INTERACTIVE', 'SYS_MSG_TYPE_RANK'],
                            success(res) {
                                console.log("----requestSubscribeSystemMessage----success", res);
                                // res === {
                                //   errMsg: "requestSubscribeSystemMessage:ok",
                                //   SYS_MSG_TYPE_INTERACTIVE: "accept",
                                //   SYS_MSG_TYPE_RANK: 'reject'
                                // }
                                resolve(true);
                            }
                        })
                    },
                    fail: (res) => {
                        resolve(false);
                        console.log("----subscribeAppMsg----fail", res);
                    }
                })
            }
        })


    }
}