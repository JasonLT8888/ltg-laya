#!/usr/bin/env bash

ROOT_DIR="$( cd "$( dirname "$0"  )" && pwd  )"
echo $ROOT_DIR  
PROJECT_PATH=""
XXTEA_KEY=""
OUT_DIR="release/ks/dist"
CREATOR_VERSION="2.3.3"
GAME_VERSION="0.0.1"
CREATOR_PATH=""
CREATOR_EXTEND=""
BUILD_ENV="mac"
TOOL_TYPE=""
WORKSPACE=$ROOT_DIR/tmp-${time=$(date "+%Y%m%d-%H%M%S")}-$(echo $RANDOM)
TOOL_PATH=$ROOT_DIR/tools
LANDSCAPE=0
BETA=0
AUTO_TEST_MODE=0
DEBUG_MODE=0
SPECIAL_CREATOR_PATH=""
VERSION_CODE="1.0.17"
PACAKGE_PATH=""
OVERWRITE=false
OLDFILENAME=""
OUTPUTFILEPATH=""
SCREEN_STYLE=""
ENGINE_TYPE="krt"

echo "Export Kwai Tools: v.${VERSION_CODE}"

echo "remove dist"
rm -rf "$OUT_DIR"

function boolToInt() {
	if [ "$1" == "true" ]
	then
		echo 1
		return
	fi
	if [ "$1" == "false" ]
	then
		echo 0
		return
	fi
	echo $1
}

while getopts "p:t:o:c:e:l:b:v:s:a:d:z:r:f:g:" arg
do
	case $arg in
	    p)
	    	echo "build project path is $OPTARG" 
	    	PROJECT_PATH=$OPTARG
	    	;;
	    t)
			echo "encrypt key is $OPTARG"
			XXTEA_KEY=$OPTARG
			;;
		o)
			echo "out path is $OPTARG"
			OUT_DIR=$OPTARG
			;;
		c)
			echo "creator version is $OPTARG"
			CREATOR_VERSION=$OPTARG
			;;
		e)
			echo "extend is $OPTARG"
			CREATOR_EXTEND=$OPTARG
			;;
		l)
			echo "landscape is $OPTARG"
			LANDSCAPE=$(boolToInt $OPTARG)
			;;
		b)
			echo "beta is $OPTARG"
			BETA=$(boolToInt $OPTARG)
			;;
		v)
			echo "version is $OPTARG"
			GAME_VERSION=$OPTARG
			;;
		s)
			echo "special creator path is $OPTARG"
			SPECIAL_CREATOR_PATH=$OPTARG
			;;
		a)
			echo "set auto test mode is $OPTARG"
			AUTO_TEST_MODE=$(boolToInt $OPTARG)
			;;
		d)
			echo "set debug mode is $OPTARG"
			DEBUG_MODE=$(boolToInt $OPTARG)
			;;
		z)
			echo "set package path is $OPTARG"
			PACAKGE_PATH=$OPTARG
			;;
		r)
		    echo "set overwrite flag is $OPTARG"
			OVERWRITE=$OPTARG
			;;
		f)
		    echo "set screen style flag is $OPTARG"
			SCREEN_STYLE=$OPTARG
			;;
		g)
			echo "set engine type flag is $OPTARG"
			ENGINE_TYPE=$OPTARG
			;;
		?)
			echo "$HELP_CMD"
			exit 1
			;;
	esac
done

echo $(uname)
if [ "$(uname)" == "Darwin" ]
then
	BUILD_ENV="mac"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]
then
	BUILD_ENV="linux"
elif [ "$(expr substr $(uname -s) 1 5)" == "MINGW" ]
then
	BUILD_ENV="win32"
	TOOL_TYPE="mingw"
	WORKSPACE=$(cygpath -w $WORKSPACE)
	TOOL_PATH=$(cygpath -w $TOOL_PATH)
elif [ "$(expr substr $(uname -s) 1 9)" == "CYGWIN_NT" ]
then
	BUILD_ENV="win32"
	TOOL_TYPE="cygwin"
	WORKSPACE=$(cygpath -w $WORKSPACE)
	TOOL_PATH=$(cygpath -w $TOOL_PATH)
fi

echo "Current Env: "$BUILD_ENV
echo "Root Dir: "$ROOT_DIR
echo "Current Workspace: "$WORKSPACE

HELP_CMD_1="1. cocos打包: sh export_kwai.sh <-p Cocos Creator项目的绝对路径> <-v 0.0.1:版本号(需要每次打包递增，否则无法触发更新)> [-l true:横屏; false:竖屏] [-d true:展示调试面板; false:隐藏调试面板] [-a true:自检模式, false:非自检模式] [-f custom:支持全名屏, default:默认显示] [-o 生成包路径] [-c 2.3.3:指定cocos creator版本] [-s 指定cocos creator的路径]"
HELP_CMD_2="2. 其他引擎打包: sh export_kwai.sh <-z Cocos 引擎导出工程的绝对路径> <-v 0.0.1:版本号(需要每次打包递增，否则无法触发更新)> [-l true:横屏; false:竖屏] [-d true:展示调试面板; false:隐藏调试面板] [-a true:自检模式, false:非自检模式] [-f custom:支持全名屏, default:默认显示] [-o 生成包路径]"
HELP_CMD_3="3. 签名包: sh export_kwai.sh <-z 待签名的包地址[zip|cpk]> <-t encryptKey> [-l true:横屏; false:竖屏] [-d true:展示调试面板; false:隐藏调试面板] [-a true:自检模式, false:非自检模式] [-f custom:支持全名屏, default:默认显示]"

if [[ -z "$PROJECT_PATH" && -z "$PACAKGE_PATH" ]]
then
	echo "$HELP_CMD_1"
	echo "$HELP_CMD_2"
	echo "$HELP_CMD_3"
	exit 1
fi

function clean
{
	if [ -d $WORKSPACE ]
	then
		rm -rf $WORKSPACE
	fi
}

function prepare
{
	if [ -d $WORKSPACE ]
	then
		rm -rf $WORKSPACE
	fi
	mkdir $WORKSPACE
}

function build
{
	if [ -n "$PACAKGE_PATH" ]
	then
	    if [[ "$BUILD_ENV" == "mac" || "$BUILD_ENV" == "linux" ]]
	    then
			if [[ "${PACAKGE_PATH##*.}"x = "zip"x || "${PACAKGE_PATH##*.}"x = "cpk"x || "${PACAKGE_PATH##*.}"x = "kwg"x  ]]
			then
				OLDFILENAME=$(basename $PACAKGE_PATH)
				OLDFILENAME="${OLDFILENAME%.*}"
				unzip "$PACAKGE_PATH" -d $WORKSPACE/other
				return;
			fi
		fi
	    cp -rf $PACAKGE_PATH $WORKSPACE/other
		return
	fi
	buildPath=";buildPath=$WORKSPACE;md5Cache=false"
	if [ "$CREATOR_EXTEND" != "" ]
	then
		CREATOR_EXTEND=";"$CREATOR_EXTEND
	fi
	if [ $ENGINE_TYPE == "creator" ]
	then
		BUILD_PARAMS="platform="$BUILD_ENV";template=default""$buildPath""$CREATOR_EXTEND"
		echo "check params: "$BUILD_PARAMS
		sh $ROOT_DIR/creator.sh $PROJECT_PATH $BUILD_PARAMS $CREATOR_VERSION "$SPECIAL_CREATOR_PATH"
	fi
	BUILD_PARAMS="platform="cocos-runtime"$buildPath""$CREATOR_EXTEND"
	echo "check params: "$BUILD_PARAMS
	sh $ROOT_DIR/creator.sh $PROJECT_PATH $BUILD_PARAMS $CREATOR_VERSION "$SPECIAL_CREATOR_PATH"
}

function package
{
	check=false
	if [ ! -d "$WORKSPACE/jsb-default" ]
	then
		check=true
	fi
	if [ ! -d "$WORKSPACE/cocos-runtime" ]
	then
		check=true
	fi
	if [ ! -d "$WORKSPACE/other" ]
	then
		check=true
	fi
	if [ "$check" == "false" ] 
	then
		return -1
	fi
	currentPath=$(pwd)
	filename=kwai-game
 	if [ "$GAME_VERSION" != "" ]
 	then
 		filename=$filename"-"$GAME_VERSION
 	fi
 	filename=$filename"-"${time=$(date "+%Y%m%d-%H%M%S")}
 	mkdir $filename
 	if [ -d "$WORKSPACE/jsb-default" ]
 	then
 		rm -rf $WORKSPACE/jsb-default/frameworks
 		rm -rf $WORKSPACE/jsb-default/"js backups (useful for debugging)"
 		rm -rf $WORKSPACE/jsb-default/cocos-project-template.json

		cd $WORKSPACE/jsb-default/
 		cp -rf * $currentPath/$filename
		cd -
 	fi

 	if [ -d "$WORKSPACE/cocos-runtime" ]
 	then
		cd $WORKSPACE/cocos-runtime/
		rm -rf *.cpk
 		cp -rf * $currentPath/$filename
		cd -
 	fi

 	if [ -d "$WORKSPACE/other" ]
	then
	    cd $WORKSPACE/other/
 		cp -rf * $currentPath/$filename
		cd -
 	fi

    rm -rf $filename/frameworks
 	rm -rf $filename/"js backups (useful for debugging)"
 	rm -rf $filename/cocos-project-template.json
 	cd $filename
 		rm -rf *.cpk
 	cd -

 	KwgConfig="$filename/kwg_config.json"

	if [ "$AUTO_TEST_MODE" == "1" ]
	then 
		DEBUG_MODE=1
	fi

	RENEW=false
    if [[ ! -f $KwgConfig || $OVERWRITE == "true" ]]
	then
	    RENEW=true
	    if [ "$SCREEN_STYLE" != "" ]
	    then
	    	echo "{\"launchType\":\"$ENGINE_TYPE\",\"landscape\":$LANDSCAPE,\"autoTest\":$AUTO_TEST_MODE,\"debugMode\":$DEBUG_MODE,\"screenStyle\":\"$SCREEN_STYLE\"}" > $KwgConfig
	    else
	    	echo "{\"launchType\":\"$ENGINE_TYPE\",\"landscape\":$LANDSCAPE,\"autoTest\":$AUTO_TEST_MODE,\"debugMode\":$DEBUG_MODE}" > $KwgConfig
	    fi
 		echo "{\"type\":1}" > "$filename/ios.json"
 		echo "{\"engineType\":1,\"landscape\":$LANDSCAPE,\"version\":\"$GAME_VERSION\"}" > "$filename/config.json"
	fi

 	zipFilename=${filename}
	if [[ -n $OLDFILENAME && $RENEW == "true" ]]
	then
		zipFilename=${OLDFILENAME}-renew
	fi

	echo ${zipFilename}

 	if [[ "$BUILD_ENV" == "mac" || "$BUILD_ENV" == "linux" ]]
 	then
 		zipCommand="zip -9ry ${currentPath}/${zipFilename}.zip *"
 	elif [ "$BUILD_ENV" == "win32" ] 
 	then
 		if [ "$TOOL_TYPE" == "mingw" ]
 		then
 		 	zipCommand="$(cygpath -w $TOOL_PATH/WinRAR/WinRAR.exe) a $(cygpath -w $currentPath/$zipFilename).zip *"
 		else
 			zipCommand="cmd /C $(cygpath -w $TOOL_PATH/WinRAR/WinRAR.exe) a $(cygpath -w $currentPath/$zipFilename).zip *"
 		fi
 	fi

 	cd ${filename}
 	echo $zipCommand
 	$zipCommand
 	cd -
 	rm -rf "$filename"
 	rm -rf "$WORKSPACE"

	mkdir -p "$OUT_DIR"
	OUTPUTFILEPATH=${currentPath}/"release/ks"/${zipFilename}.zip
 	if [ "$OUT_DIR" != "" ]
 	then
 		mv -f "${currentPath}/${zipFilename}.zip" "$OUT_DIR/${zipFilename}.zip"
		OUTPUTFILEPATH="$OUT_DIR/${zipFilename}.zip"
 	fi
}

function encryptFiles {
	for file in `ls $1`
	do
		if [ -d $1"/"$file ];
		then
			mkdir $2"/"$file
			encryptFiles $1"/"$file $2"/"$file $3
		elif [ -f $1"/"$file ];
		then
			echo "加密文件:" $1"/"$file
			node $TOOL_PATH/encryptjs/index.js $1"/"$file $3
			if [ -f $1"/"$file"c" ]
			then
				mv -f $1"/"$file"c" $2"/"$file"c"
			fi
		fi
	done
}

function encrypt {
	if [[ ! -f $OUTPUTFILEPATH || -z $XXTEA_KEY || $BUILD_ENV == "win32" ]]
	then
		return
	fi
	currentPath=$(pwd)
	filename=$(basename $OUTPUTFILEPATH)
    filename="${filename%.*}"
	prepare 
	unzip $OUTPUTFILEPATH -d $WORKSPACE/$filename > /dev/null
	rm -rf $OUTPUTFILEPATH
	mkdir $WORKSPACE/$filename/src-enc
	encryptFiles $WORKSPACE/$filename/src $WORKSPACE/$filename/src-enc $XXTEA_KEY
	rm -rf $WORKSPACE/$filename/src
	mv -f $WORKSPACE/$filename/src-enc $WORKSPACE/$filename/src
	cd $WORKSPACE/$filename
	zip -9ry ${currentPath}/${filename}-inc.kwg *
	cd -
	rm -rf "$WORKSPACE"
	OUTPUTFILEPATH=${currentPath}/${filename}-inc.kwg
	if [ "$OUT_DIR" != "" ]
 	then
 		mv -f "${currentPath}/${filename}-inc.kwg" "$OUT_DIR/${filename}-inc.kwg"
		OUTPUTFILEPATH="$OUT_DIR/${zipFilename}.kwg"
 	fi
}

if ! prepare
then
	echo "prepare failed"
	clean
	exit 1
fi

if ! build
then
	echo "build failed"
	clean
	exit 1
fi

if ! package
then
	echo "package failed"
	clean
	exit 1
fi

if ! encrypt
then
	echo "encrypt failed"
	clean
	exit 1
fi

echo $OUTPUTFILEPATH
