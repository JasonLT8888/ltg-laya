
const base = window["tt"];
const sharedCanvas = base.getSharedCanvas();
const context = sharedCanvas.getContext("2d");

base.onMessage((msg) => {
  console.log(msg);
  if (msg.command) {
    switch (msg.command) {
      case "setUserGroup":
        base.setUserGroup(msg.data);
        break;
      case "setUserCloudStorage":
        let data = {
          ttgame: {
            score: msg.data.value,
            update_time: Date.now(),
          }
        };
        base.setUserCloudStorage({
          KVDataList: [
            {
              key: "score",
              value: JSON.stringify(data)
            },
          ],
          success: (res) => {
            console.log("调用成功");
            console.log(res);

          },
          fail: (res) => {
            console.log("调用失败", res);
          },
          complete: (res) => {
            console.log("调用完成", res);
          },
        });
        break;
      case "getUserCloudStorage":
        base.getUserCloudStorage({
          keyList: ["score"], // 要获取的 key 列表
          success: (res) => {
            console.log("调用成功");
            console.log(res);
          },
          fail: (res) => {
            console.log("调用失败", res);
          },
          complete: (res) => {
            console.log("调用完成", res);
          },
        });
        break;

      case "getCloudStorageByRelation":
        base.getCloudStorageByRelation({
          type: "group",
          keyList: ["score"],
          extra: {
            sortKey: "score", // 指定的key需要在后台配置过
            groupId: "default", // 指定要获取的用户所属分组
          },
          success: (res) => {
            console.log("调用成功");
            console.log(res);
          },
          fail: (res) => {
            console.log("调用失败", res);
          },
          complete: (res) => {
            console.log("调用完成", res);
          },
        })

        break;
      default:
        break;
    }

  }
});

