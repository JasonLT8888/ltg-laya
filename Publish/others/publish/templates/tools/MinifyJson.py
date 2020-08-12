#!/usr/bin/python3
import re
import json
import os

# objName='player_01.lh'
# path='bin/res/export/Conventional/HeightFog.ls' 
dirPath='bin/res'

def minify(f):
    if (f.endswith('.ls')|f.endswith('.lh')|f.endswith('.lmat')|f.endswith('.json')):
        print('minify:'+f)
        data=open(f,"r",encoding='utf-8')
        info=json.dumps(json.load(data)).replace(': ',':').replace(', ',',')
        newText=open(f,"w",encoding="utf-8")
        newText.write(info)

def miniFiles(dirPath):
    dirs= os.listdir(dirPath)
    for f in dirs:
        path=dirPath+'/'+f
        if(os.path.isdir(path)):
            miniFiles(path)
        else:
            minify(path)

miniFiles(dirPath)