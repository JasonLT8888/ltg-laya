let rt = loadRuntime();

// 闊抽閫傞厤
let audioEngine;
class AdaptAudioElement extends HTMLElement {
    constructor(url) {
        super();

        if (typeof audioEngine === "undefined") {
            audioEngine = loadRuntime().AudioEngine;
        }
        if (typeof url === "string" && url.startsWith("file://")) {
            url = url.substr("file://".length);
        }

        this._startTime = 0;
        this._volume = 1.0;
        this._src = url;
        this._audioId = undefined;
        this._isLoop = false;
        this._isAutoplay = false;
        this._PLAYING = 1;
        this._PAUSE = 2;
    }

    // HTML Audio Methods

    addTextTrack() {
        console.warn("Audio.addTextTrack is not implemented.");
    }

    load() {
        // console.warn("Audio.load is not implemented.");
        if (this._src === "") {
            console.error("Audio load: please define src before load");
            return;
        }
        let that = this;
        that.dispatchEvent({ type: "loadstart" });
        audioEngine.preload(this._src, function () {
            that.dispatchEvent({ type: "loadedmetadata" });
            that.dispatchEvent({ type: "loadeddata" });
            that.dispatchEvent({ type: "canplay" });
            that.dispatchEvent({ type: "canplaythrough" });
        });
    }

    canPlayType(mediaType = "") {
        if (typeof mediaType !== "string") {
            return "";
        }
        if (mediaType.indexOf("audio/mpeg") > -1 || mediaType.indexOf("audio/mp4")) {
            return "probably";
        }
        return "";
    }

    play() {
        let that = this;
        if (this._src === "") {
            this.dispatchEvent({ type: "emptied" });
            console.error("Audio play: please define src before play");
            return;
        }

        if (this._audioId !== undefined && audioEngine.getState(this._audioId) === this._PAUSE) {
            audioEngine.resume(this._audioId);

            this.dispatchEvent({ type: "play" });
            this.dispatchEvent({ type: "playing" });
        } else {
            this._audioId = audioEngine.play(this._src, this._isLoop, this._volume);

            this.dispatchEvent({ type: "play" });
            let currentAudioId = this._audioId;
            audioEngine.setFinishCallback(currentAudioId, function () {
                that.dispatchEvent({ type: "ended" });
            });
            if (typeof audioEngine.setErrorCallback !== "undefined") {
                audioEngine.setErrorCallback(currentAudioId, function () {
                    that.dispatchEvent({ type: "error" });
                });
            }
            if (typeof audioEngine.setWaitingCallback !== "undefined") {
                audioEngine.setWaitingCallback(currentAudioId, function () {
                    that.dispatchEvent({ type: "waiting" });
                });
            }
        }

    }

    pause() {
        if (this._audioId !== undefined) {
            if (audioEngine.getState(this._audioId) !== this._PAUSE) {
                audioEngine.pause(this._audioId);
                this.dispatchEvent({ type: "pause" });
            } else {
                console.warn("Audio pause: music has been paused.");
            }
        } else {
            console.warn("Audio pause: no music is playing.");
        }
    }

    // HTML Audio Properties

    get currentTime() {
        let ret = 0;
        if (this._audioId !== undefined) {
            ret = audioEngine.getCurrentTime(this._audioId);
        }
        return ret.toFixed(6);
    }
    set currentTime(value) {
        if (this._audioId !== undefined) {
            // this.dispatchEvent({ type: "seeking" });
            audioEngine.setCurrentTime(this._audioId, value);
            // this.dispatchEvent({ type: "seeked" });
        }
    }

    get src() {
        return this._src;
    }
    set src(value) {
        if (typeof value !== "string") {
            console.error("Audio src: please define src as string type");
        }
        if (this._audioId !== undefined) {
            audioEngine.stop(this._audioId);
            this._audioId = undefined;
        }

        if (value.startsWith("file://")) {
            value = value.substr("file://".length);
        }
        this._src = value;
        if (this._isAutoplay) {
            this.play();
            return;
        }
    }

    get loop() {
        let ret = false;
        if (this._audioId !== undefined) {
            ret = audioEngine.isLoop(this._audioId);
        }
        return ret;
    }
    set loop(value) {
        this._isLoop = value;
        if (this._audioId !== undefined) {
            audioEngine.setLoop(this._audioId, value);
        }
    }

    get autoplay() {
        return this._isAutoplay;
    }
    set autoplay(value) {
        this._isAutoplay = value;
    }

    get paused() {
        let ret = false;
        if (this._audioId !== undefined) {
            if (audioEngine.getState(this._audioId) === this._PAUSE) {
                ret = true;
            }
        }
        return ret;
    }

    cloneNode() {
        let newAudio = new AdaptAudioElement();
        newAudio.loop = this.loop;
        newAudio.autoplay = this.autoplay;
        newAudio.src = this.src;
        return newAudio;
    }
}

// 杈撳叆妗嗛€傞厤
let createInputElement = function (name) {
    let node = oldCreateElement(name);

    node.focus = function () {

        let layaInput;
        if (typeof laya !== "undefined" && typeof laya.display !== "undefined" && typeof laya.display.Input !== "undefined") {
            layaInput = laya.display.Input;
        } else if (typeof Laya !== "undefined" && typeof Laya.Input !== "undefined") {
            layaInput = Laya.Input;
        }

        if (typeof layaInput === "undefined") {
            return;
        }
        let inputTarget = layaInput["inputElement"].target;

        if (typeof inputTarget === "undefined") {
            return;
        }

        rt.offKeyboardConfirm();
        rt.offKeyboardInput();
        rt.showKeyboard(
            {
                defaultValue: inputTarget.text,
                maxLength: inputTarget.maxChars,
                multiple: inputTarget.multiline,
                confirmHold: true,
                confirmType: 'done',
                success: function (res) {
                },
                fail: function (res) {
                }
            });
        rt.onKeyboardComplete(function () {
            // layaInput.isInputting = false;
            inputTarget.focus = false;
        });
        rt.onKeyboardConfirm(function (res) {
            var str = res ? res.value : "";
            inputTarget.text = str;
            inputTarget.event(/*laya.events.Event.INPUT*/"input");
            inputTarget.focus = false;

            rt.offKeyboardConfirm();
            rt.offKeyboardInput();
            rt.hideKeyboard({
                success: function (res) {
                }, fail: function (res) {
                }
            });
        });
        rt.onKeyboardInput(function (res) {
            var str = res ? res.value : "";
            if (!inputTarget.multiline) {
                if (str.indexOf("\n") != -1) {
                    inputTarget.focus = false;
                    return;
                }
            }
            inputTarget.text = str;
            inputTarget.event(/*laya.events.Event.INPUT*/"input");
        });
    }

    node.blur = function () { }
    node.style = {};

    return node;
};

let oldCreateElement = document.createElement;
let hasCreated = false;
document.createElement = function (name) {
    // 鐞嗚涓婄涓€娆¤繑鍥炵殑canvas涓轰富canvas锛屽悗缁繑鍥炵殑绂诲睆骞昪anvas
    if (name === "canvas") {
        let node;
        if (!hasCreated) {
            hasCreated = true;
            node = document.getElementById("canvas");
        } else {
            node = oldCreateElement(name);
            let oldGetContext = node.getContext.bind(node);

            node.style = document.getElementById("canvas").style;
            node.getContext = function (name, opts) {
                // 鐗规畩澶勭悊锛氫换浣昪anvas閮借繑鍥炰富canvas鐨剋ebgl
                if (name === "webgl" || name === "experimental-webgl") {
                    return document.getElementById("canvas").getContext(name, opts);
                } else {
                    return oldGetContext(name, opts);
                }
            };

        }
        if (typeof node.toDataURL === "undefined") {
            node.toDataURL = function (tagName) {
                return "";
            };
        }
        return node;
    } else if (name === "audio") {
        return new AdaptAudioElement();
    } else if (name === "textarea" || name === "input") {
        return createInputElement(name);
    }
    return oldCreateElement(name);
}

//閫傞厤 laya 瑙︽懜澶辩伒
let mainCanvas = document.getElementById("canvas");
let style = mainCanvas.style;

Object.defineProperty(style, "left", {
    get() {
        if (this.val === '-10000px') {
            return '0px';
        }
        return this.val;
    },
    set(value) {
        this.val = value;
    }
});

// 灞忓箷閫傞厤
window.getAdapterInfo = function (config) {
    let scaleX = 1;
    let scaleY = 1;
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let w = config.width;
    let h = config.height;
    config.scaleMode = config.scaleMode.toLowerCase();
    switch (config.scaleMode) {
        case "exactfit":
            scaleX = vw / w;
            scaleY = vh / h;
            break;

        case "fixedwidth":
            scaleX = scaleY = vw / w;
            break;
        default:
            scaleX = vw / w;
            scaleY = vh / h;
            break;
    }
    return {
        scaleX: scaleX,
        scaleY: scaleY,
        w: w,
        h: h,
        vw: vw,
        vh: vh,
        rw: w * scaleX,
        rh: h * scaleY
    };
};

// 鍏朵粬
window.location = {
    protocol: "file:",
    pathname: "",
    host: ""
};

window.navigator.userAgent = "Mobile";
window.navigator.getGamepads = function () {
    return [null];
};
window.Audio = AdaptAudioElement;

CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
}