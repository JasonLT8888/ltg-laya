from urllib import request
from urllib import parse
import json 
import re

 
url = 'https://hs.yz061.com/res/down/public/configs/SelfAdConfig.json'
projectPath='others/publish/templates/tt/project.config.json'
targetPath='release/tt/game.json'
gamejson='others/publish/templates/tt/game.json'
remoteJson = request.urlopen(url) 
cfgjson= open(projectPath,encoding='utf-8')
cfg=json.load(cfgjson)  
appid=cfg['appid'] 
result = remoteJson.read().decode()
data=json.loads(result)
updateData=[];
for item in data:
    if item['id'].strip() != appid and len(updateData) <10:
        updateData.append(item['id'])
        pass
    pass

appids="\",\"".join(updateData)
cont="[\"%s\"]"%appids 
content=open(gamejson) 
 
def alter(file,old_str,new_str):
 
    file_data = ""
    with open(file, "r", encoding="utf-8") as f:
        for line in f:
            if old_str in line:
                line = line.replace(old_str,new_str)
            file_data += line
    with open(file,"w",encoding="utf-8") as f:
        f.write(file_data)
 
alter(targetPath, "[]", cont)
print('更新 appid 完成 ')
 