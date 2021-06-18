let unzip = require("unzip");
let fs = require("fs");
let zipPath = "";
let outPath = "";
zipPath = process.argv[2];
outPath = process.argv[3];
if (zipPath.endsWith(".zip") && !outPath) {
    outPath = zipPath.replace(".zip", "");
}
if (fs.existsSync(zipPath)) {
    console.log("正在解压", zipPath);
    fs.createReadStream(zipPath).pipe(unzip.Extract({ path: outPath }));
}


