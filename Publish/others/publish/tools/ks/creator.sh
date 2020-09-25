#!/usr/bin/env bash

PROJECT_PATH=$1
BUILD_CONFIG=$2
CREATOR_VERSION=$3
SPECIAL_CREATOR_PATH=$4
DEFAULT_CREATOR_VERSION="2.3.3"
BUILD_ENV="mac"
TOOL_TYPE=""

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
elif [ "$(expr substr $(uname -s) 1 9)" == "CYGWIN_NT" ]
then
	BUILD_ENV="win32"
	TOOL_TYPE="cygwin"
fi

function chooseCreator
{
	if [ "$SPECIAL_CREATOR_PATH" != "" ]
	then
		CREATOR_PATH=$SPECIAL_CREATOR_PATH
		return
	fi
	CREATOR_PATH_ARR=()
	if [ "$BUILD_ENV" == "mac" ]
	then
		CREATOR_PATHS=$(find /Applications/CocosCreator -name "CocosCreator.app")
		CREATOR_PATH_ARR=(${CREATOR_PATHS// / })
	elif [ "$BUILD_ENV" == "win32" ] 
	then
		CREATOR_PATHS=$(where /R C:\\ CocosCreator.exe)
		if [ "$CREATOR_PATHS" == "" ]
		then
			CREATOR_PATHS=$(where /r D:\\ CocosCreator.exe)
		fi
		CREATOR_PATH_ARR=(${CREATOR_PATHS// / })
	fi

	CREATOR_PATH=""
	if [ "$CREATOR_VERSION" != "" ]
	then
		DEFAULT_CREATOR_VERSION=$CREATOR_VERSION
	fi
	for TMP_PATH in ${CREATOR_PATH_ARR[@]}
	do
		if [[ "$TMP_PATH" =~ "$DEFAULT_CREATOR_VERSION" ]]
		then
			CREATOR_PATH=$TMP_PATH
			break
		fi
	done
	if [ "$CREATOR_PATH" == "" ]
	then
		CREATOR_PATH=${CREATOR_PATH_ARR[${#CREATOR_PATH_ARR[@]}-1]}
	fi

	echo $CREATOR_PATH
	if [ "$CREATOR_PATH" == "" ]
	then
		return -1
	fi
}

function build
{
	echo "start build "$CREATOR_PATH
	if [ "$BUILD_ENV" == "mac" ]
	then
		$CREATOR_PATH/Contents/MacOS/CocosCreator --path "$PROJECT_PATH" --build "$BUILD_CONFIG"
	elif [ "$BUILD_ENV" == "win32" ]
	then
		if [ "$TOOL_TYPE" == "mingw" ]
 		then
 			echo '$CREATOR_PATH --path "$PROJECT_PATH" --build "$BUILD_CONFIG"'
			$CREATOR_PATH --path "$PROJECT_PATH" --build "$BUILD_CONFIG"
 		else
 			echo 'cmd /C $CREATOR_PATH --path "$PROJECT_PATH" --build "$BUILD_CONFIG"'
			cmd /C $CREATOR_PATH --path "$PROJECT_PATH" --build "$BUILD_CONFIG"
 		fi
	fi
}

if [[ $TOOL_TYPE == "mingw" && $SPECIAL_CREATOR_PATH == "" ]]
then
	echo "not support git-bash direct build, plase set special creator path"
	exit 1
fi

if ! chooseCreator
then
	echo "not find creator"
	exit 1
fi

if ! build
then
	echo "build failed"
	exit 1
fi