//添加适配代码
window.self = window;
let oldCreateElement = document.createElement;
let hasCreated = false;
document.createElement = function (name) {
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
                // 特殊处理：任何canvas都返回主canvas的webgl
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
    }
    if (name === "textarea" || name === "input") {
        let node = oldCreateElement(name);
        node.focus = function () {
            let inputTarget;
            if (laya && laya.display && laya.display.Input) {
                inputTarget = laya.display.Input["inputElement"].target;
            }
            if (typeof inputTarget === "undefined") {
                return;
            }

            hbs.offKeyboardConfirm();
            hbs.offKeyboardInput();
            hbs.showKeyboard(
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
            hbs.onKeyboardComplete(function () {
                laya.display.Input.isInputting = false;
                inputTarget.focus = false;
            });
            hbs.onKeyboardConfirm(function (res) {
                var str = res ? res.value : "";
                inputTarget.text = str;
                inputTarget.event(/*laya.events.Event.INPUT*/"input");
                inputTarget.focus = false;

                hbs.offKeyboardConfirm();
                hbs.offKeyboardInput();
                hbs.hideKeyboard({
                    success: function (res) {
                    }, fail: function (res) {
                    }
                });
            });
            hbs.onKeyboardInput(function (res) {
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
        node.value = 0;
        node.parentElement = {};
        node.placeholder = {};
        node.type = {};
        node.setColor = function (value) {
        };
        node.setType = function (value) {
        };
        node.setFontFace = function (value) {
        };
        node.addEventListener = function (value) {
        };
        node.contains = function (value) {
            return null
        };
        node.removeChild = function (value) {
        };
        return node
    }
    return oldCreateElement(name);
};
let ce = document.createElementNS;
document.createElementNS = function (ns, name) {
    if (name === "canvas") {
        return this.createElement(name);
    }
    return ce.apply(this, arguments);
};
document.addEventListener = document.getElementById("canvas").addEventListener;
Object.defineProperty(Element.prototype, "firstElementChild", {
    get() {
        let child = this.childNodes[0];
        return child ? child : (this.innerHTML ? new HTMLElement() : undefined);
    }
});

//屏幕适配方法
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

//laya 触摸适配
(function () {
    // // 只需要对主canvas进行屏幕适配
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
}());



window.location = {
    protocol: "file:",
    pathname: "file://"
};
window.navigator.userAgent = "Mobile";
  //适配代码结束