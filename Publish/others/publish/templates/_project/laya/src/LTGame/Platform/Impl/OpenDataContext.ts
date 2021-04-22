import LTPlatform from "../LTPlatform";

/**开放数据域 */
export default class OpenDataContext {

    base: any;
    openDataContext: any;
    public supportOpenContext: boolean = false;
    constructor(_base: any) {
        this.base = _base;
    }
    /** 往开放域推送数据 */
    postMsg(msg: object) {

    }
    /**设置用户分组 */
    setUserGroup(group: string) {

    }
    /**上报游戏数据
     * {score:10}
     */
    setUserCloudStorage(obj: object) {

    }
    /**获取用户数据 */
    getUserCloudStorage(keys: string[]) {

    }

    getCloudStorageByRelation() {

    }
    /**
     * 订阅消息
     * @param longTime 是否长期订阅
     */
    subscribeAppMsg(longTime: boolean = false): Promise<boolean> {
        return;
    }
}

export enum EOpenDataMethod {
    resize = "resize",
    getFriendRankData = "getFriendRankData",
    showFriendRank = "showFriendRank",
    changePage = "changePage",
    updateMaxScore = "updateMaxScore",
    getSelfScore = "getSelfScore",
    getUserInfo = "getUserInfo"
}