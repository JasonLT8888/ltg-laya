const fs = require("fs");
function readconfig() {
    game_js_path = 'https://hs.yz061.com/res/down/public/configs/SelfAdConfig.json';
    fs.openSync(game_js_path, 'r', (err, fd) => {
        console.log(fd);
    });
    // console.log(text);
}
readconfig();