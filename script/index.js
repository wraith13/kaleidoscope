var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define("script/control", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Control = void 0;
    var Control;
    (function (Control) {
        var makeSelectOption = function (value, text) {
            var option = document.createElement("option");
            option.value = value;
            option.innerText = text;
            return option;
        };
        Control.getDom = function (data) {
            var result = "dom" in data ?
                data.dom :
                document.getElementById(data.id);
            if (null == result || undefined === result) {
                console.error("🦋 FIXME: Contorl.getDom.NotExistsDom", data);
            }
            else if (!(result instanceof HTMLElement)) {
                console.error("🦋 FIXME: Contorl.getDom.InvalidDom", data, result);
            }
            return result;
        };
        var Button = /** @class */ (function () {
            function Button(data) {
                var _this = this;
                this.data = data;
                this.dom = Control.getDom(data);
                this.dom.addEventListener("click", function (event) {
                    console.log("👆 Button.Click:", event, _this);
                    _this.data.click(event, _this);
                });
            }
            return Button;
        }());
        Control.Button = Button;
        Control.preventOnChange = "preventOnChange";
        var Select = /** @class */ (function () {
            function Select(data, options) {
                var _this = this;
                var _a;
                this.data = data;
                this.options = options;
                this.switch = function (valueOrDirection, preventOnChange) {
                    var _a, _b;
                    if ("boolean" === typeof valueOrDirection) {
                        var options = Array.from(_this.dom.getElementsByTagName("option"));
                        var optionValues = options.map(function (i) { return i.value; });
                        var index = optionValues.indexOf(_this.dom.value);
                        var nextIndex = index + (valueOrDirection ? -1 : 1);
                        var nextValue = optionValues[nextIndex];
                        if (undefined !== nextValue) {
                            _this.dom.value = nextValue;
                        }
                    }
                    else {
                        _this.dom.value = "".concat(valueOrDirection);
                    }
                    if (undefined === preventOnChange) {
                        (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this);
                    }
                };
                this.get = function () { return _this.dom.value; };
                this.dom = Control.getDom(data);
                if (!(this.dom instanceof HTMLSelectElement)) {
                    console.error("🦋 FIXME: Contorl.Select.InvalidDom", data, this.dom);
                }
                this.data.enum.forEach(function (i) { var _a, _b, _c; return _this.dom.appendChild(makeSelectOption("".concat(i), (_c = (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.makeLabel) === null || _b === void 0 ? void 0 : _b.call(_a, i)) !== null && _c !== void 0 ? _c : "".concat(i))); });
                this.switch(this.data.default, [Control.preventOnChange][false !== ((_a = this.options) === null || _a === void 0 ? void 0 : _a.preventOnChangeWhenNew) ? 0 : 1]);
                this.dom.addEventListener("change", function (event) {
                    var _a, _b;
                    console.log("👆 Select.Change:", event, _this);
                    (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, event, _this);
                });
            }
            return Select;
        }());
        Control.Select = Select;
        var Checkbox = /** @class */ (function () {
            function Checkbox(data, options) {
                var _this = this;
                var _a;
                this.data = data;
                this.options = options;
                this.toggle = function (checked, preventOnChange) {
                    var _a, _b;
                    _this.dom.checked = checked !== null && checked !== void 0 ? checked : !_this.get();
                    if (undefined === preventOnChange) {
                        (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this);
                    }
                };
                this.get = function () { return _this.dom.checked; };
                this.dom = Control.getDom(data);
                if (!(this.dom instanceof HTMLInputElement) || "checkbox" !== this.dom.type.toLowerCase()) {
                    console.error("🦋 FIXME: Contorl.Checkbox.InvalidDom", data, this.dom);
                }
                if (undefined !== this.data.default) {
                    this.toggle(this.data.default, [Control.preventOnChange][false !== ((_a = this.options) === null || _a === void 0 ? void 0 : _a.preventOnChangeWhenNew) ? 0 : 1]);
                }
                this.dom.addEventListener("change", function (event) {
                    var _a, _b;
                    console.log("👆 Checkbox.Change:", event, _this);
                    (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, event, _this);
                });
            }
            return Checkbox;
        }());
        Control.Checkbox = Checkbox;
    })(Control || (exports.Control = Control = {}));
});
define("resource/config", [], {
    "applicationTitle": "Kaleidoscope",
    "repositoryUrl": "https://github.com/wraith13/kaleidoscope/",
    "log": {
        "mousemove": false,
        "ToggleClassForWhileTimer.Timeout": false
    },
    "colors": {
        "monochrome": [
            "black",
            "white"
        ],
        "primaryColors": [
            "red",
            "green",
            "blue"
        ],
        "phiColors": {
            "saturation": 0.8,
            "lightness": 0.6
        }
    },
    "intervalSize": {
        "minRate": 0.03,
        "maxRate": 0.6
    },
    "informations": [
        "informationFuseFps"
    ],
    "informations.full": [
        "informationFuseFps",
        "informationLayers",
        "informationPattern"
    ],
    "maximumFractionDigits": 2,
    "startWait": 750
});
define("script/ui", ["require", "exports", "resource/config"], function (require, exports, config_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UI = void 0;
    config_json_1 = __importDefault(config_json_1);
    var UI;
    (function (UI) {
        UI.showPickerOnLabel = function (label) {
            var selectId = label.getAttribute("for");
            if (selectId) {
                var select_1 = document.getElementById(selectId);
                if (select_1 && "select" === select_1.tagName.toLowerCase()) {
                    label.addEventListener('click', function (e) {
                        e.preventDefault();
                        select_1.focus();
                        if ("showPicker" in select_1) {
                            select_1.showPicker();
                        }
                        else {
                            select_1.click();
                        }
                    });
                }
                else {
                    console.error("🦋 FIXME: UI.showPickerOnLabel.NotFoundSelect", label, select_1);
                }
            }
            else {
                console.error("🦋 FIXME: UI.showPickerOnLabel.NotFoundForAttribute", label);
            }
        };
        var ToggleClassForWhileTimer = /** @class */ (function () {
            function ToggleClassForWhileTimer() {
                var _this = this;
                this.isOn = function () { return undefined !== _this.timer; };
                this.timer = undefined;
            }
            ToggleClassForWhileTimer.prototype.start = function (element, token, span) {
                var _this = this;
                if (this.isOn()) {
                    clearTimeout(this.timer);
                }
                element.classList.toggle(token, true);
                this.timer = setTimeout(function () {
                    if (config_json_1.default.log["ToggleClassForWhileTimer.Timeout"]) {
                        console.log("⌛️ ToggleClassForWhileTimer.Timeout", element, token, span);
                    }
                    _this.timer = undefined;
                    element.classList.toggle(token, false);
                }, span);
            };
            return ToggleClassForWhileTimer;
        }());
        UI.ToggleClassForWhileTimer = ToggleClassForWhileTimer;
        UI.fullscreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled;
        UI.requestFullscreen = function (dom) {
            if (dom === void 0) { dom = document.body; }
            if (dom.requestFullscreen) {
                dom.requestFullscreen();
            }
            else if ("webkitRequestFullscreen" in dom) {
                dom.webkitRequestFullscreen();
            }
        };
        UI.exitFullscreen = function () {
            if (document.fullscreenElement || ("webkitFullscreenElement" in document && null !== document.webkitFullscreenElement)) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if ("webkitCancelFullScreen" in document) {
                    document.webkitCancelFullScreen();
                }
            }
        };
        UI.setOptions = function (element, options) {
            if (options === void 0) { options = {}; }
            var text = options.text, _a = options.attributes, attributes = _a === void 0 ? {} : _a, _b = options.children, children = _b === void 0 ? [] : _b, _c = options.styles, styles = _c === void 0 ? {} : _c, _d = options.events, events = _d === void 0 ? {} : _d;
            if ("string" === typeof text) {
                element.textContent = text;
            }
            Object.entries(attributes).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                return element.setAttribute(key, String(value));
            });
            Object.entries(styles).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                return element.style[key] = value;
            });
            Object.entries(events).forEach(function (_a) {
                var event = _a[0], handler = _a[1];
                return element.addEventListener(event, handler);
            });
            children.forEach(function (child) { return element.appendChild(child); });
            return element;
        };
        UI.createElement = function (element) {
            return element instanceof Element ?
                element :
                UI.setOptions(document.createElement(element.tag), element);
        };
        UI.removeAllChildren = function (parent) {
            Array.from(parent.children).forEach(function (i) { return parent.removeChild(i); });
            return parent;
        };
        UI.appendChild = function (parent, element) {
            parent.appendChild(UI.createElement(element));
            return parent;
        };
        UI.replaceChild = function (parent, element) {
            UI.removeAllChildren(parent);
            return UI.appendChild(parent, element);
        };
        UI.appendChildren = function (parent, elements) {
            if ("append" in parent) {
                parent.append.apply(parent, elements.map(function (i) { return UI.createElement(i); }));
            }
            else {
                elements.forEach(function (i) { return UI.appendChild(parent, i); });
            }
            return parent;
        };
        UI.replaceChildren = function (parent, elements) {
            UI.removeAllChildren(parent);
            return UI.appendChildren(parent, elements);
        };
        UI.getElementsByClassName = function (tag, className) {
            var result = Array.from(document.getElementsByClassName(className));
            result.forEach(function (i) {
                if (tag !== i.tagName.toLowerCase()) {
                    console.error("🦋 FIXME: UI.getElementsByClassName.InvalidDom", className, tag, i);
                }
            });
            return result;
        };
        UI.querySelectorAllWithFallback = function (tag, selectorss) {
            var lastError;
            for (var i = 0; i < selectorss.length; ++i) {
                try {
                    var result = Array.from(document.querySelectorAll(selectorss[i]));
                    result.forEach(function (j) {
                        if (tag !== j.tagName.toLowerCase()) {
                            console.error("🦋 FIXME: UI.querySelectorAllWithFallback.InvalidDom", i, tag, j);
                        }
                    });
                    return result;
                }
                catch (error) {
                    lastError = error;
                }
            }
            console.error("🦋 FIXME: querySelectorAllWithFallback.AllQueryFailed", selectorss, lastError);
            return [];
        };
        UI.getElementById = function (tag, id) {
            var result = document.getElementById(id);
            if (null == result || undefined === result) {
                console.error("🦋 FIXME: UI.getElementById.NotExistsDom", id);
            }
            else if (tag !== result.tagName.toLowerCase()) {
                console.error("🦋 FIXME: UI.getElementById.InvalidDom", id, tag, result);
            }
            return result;
        };
        UI.querySelector = function (tag, selectors) {
            var result = document.querySelector(selectors);
            if (null == result || undefined === result) {
                console.error("🦋 FIXME: UI.querySelector.NotExistsDom", selectors);
            }
            else if (tag !== result.tagName.toLowerCase()) {
                console.error("🦋 FIXME: UI.querySelector.InvalidDom", selectors, tag, result);
            }
            return result;
        };
    })(UI || (exports.UI = UI = {}));
});
define("script/fps", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fps = void 0;
    var Fps;
    (function (Fps) {
        var fpsWindow = 1000;
        var frameTimings = [];
        var fpsHistory = [];
        Fps.reset = function () {
            Fps.isValid = false;
            frameTimings = [];
            fpsHistory = [];
        };
        Fps.step = function (now) {
            frameTimings.push(now);
            Fps.isValid = 2 <= frameTimings.length;
            if (Fps.isValid) {
                while (2 < frameTimings.length && fpsWindow < now - frameTimings[0]) {
                    frameTimings.shift();
                }
                var timeSpan = Math.max(now - frameTimings[0], 0.001); // max for avoid 0 div
                var frameCount = frameTimings.length - 1;
                var fps = (frameCount * 1000) / timeSpan;
                Fps.currentNowFps =
                    {
                        fps: fps,
                        now: now,
                        text: makeFpsText(fps),
                    };
                var expiredAt = now - 1000;
                while (0 < fpsHistory.length && fpsHistory[0].now < expiredAt) {
                    fpsHistory.shift();
                }
                fpsHistory.push(Fps.currentNowFps);
                Fps.currentMaxFps = Fps.currentNowFps;
                Fps.currentMinFps = Fps.currentNowFps;
                fpsHistory.forEach(function (i) {
                    if (Fps.currentMaxFps.fps < i.fps) {
                        Fps.currentMaxFps = i;
                    }
                    if (i.fps < Fps.currentMinFps.fps) {
                        Fps.currentMinFps = i;
                    }
                });
                if (Fps.isUnderFuseFps()) {
                    console.error("❌ UnderFuseFps:", {
                        fuseFps: Fps.fuseFps,
                        maxFps: Fps.currentMaxFps.fps,
                        nowFps: Fps.currentMaxFps.fps,
                        minFps: Fps.currentMinFps.fps,
                    });
                }
            }
        };
        var makeFpsText = function (fps) {
            return "".concat(fps.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: 2, minimumFractionDigits: 2, }), " FPS");
        };
        Fps.getText = function () {
            return Fps.isValid ? Fps.currentMaxFps.text + "(Max)\n" + Fps.currentNowFps.text + "(Now)\n" + Fps.currentMinFps.text + "(Min)" : "";
        };
        Fps.isUnderFuseFps = function () { return Fps.isValid && Fps.currentMaxFps.fps < Fps.fuseFps; };
    })(Fps || (exports.Fps = Fps = {}));
});
define("resource/lang.en", [], {
    "description": "Kaleidoscope Web Screen Saver",
    "pattern-label": "Pattern:",
    "coloring-label": "Coloring:",
    "canvas-size-label": "Canvas Size:",
    "layers-label": "Layers:",
    "cycle-span-label": "Cycle Span:",
    "fuse-fps-label": "Fuse FPS:",
    "easing-label": "Easing:",
    "with-fullscreen-label": "FullScreen:",
    "show-fps-label": "Show FPS:",
    "DELETEME.warningText": "Web browsers and operating systems may crash due to excessive load.",
    "informationFuseFps": "⚠️ It will automatically stop when FPS(Max) falls below \"Fuse FPS\" to avoid crashing web browser or OS.",
    "DELETEME.informationLayers": "The larger the \"Layers\", the more delicate the image can be enjoyed, but the load on the machine will also increase.",
    "DELETEME.informationPattern": "\"Pattern\" is heavy on \"spots\" and light on \"lines\".",
    "timeUnitMs": "ms",
    "timeUnitS": "s",
    "timeUnitM": "m",
    "timeUnitH": "h",
    "timeUnitD": "d",
    "ago": "ago",
    "Hide UI": "Hide UI",
    "Play / Pause": "Play / Pause",
    "Switch Pattern (Forward)": "Switch Pattern (Forward)",
    "Switch Pattern (Backward)": "Switch Pattern (Backward)",
    "Switch Coloring (Forward)": "Switch Coloring (Forward)",
    "Switch Coloring (Backward)": "Switch Coloring (Backward)",
    "Increase Canvas Size": "Increase Canvas Size",
    "Decrease Canvas Size": "Decrease Canvas Size",
    "Increase Layer": "Increase Layer",
    "Decrease Layer": "Decrease Layer",
    "Speed Down": "Speed Down",
    "Speed Up": "Speed Up",
    "FullScreen": "FullScreen",
    "Show FPS": "Show FPS"
});
define("resource/lang.ja", [], {
    "description": "万華鏡 Web スクリーンセーバー",
    "pattern-label": "パターン:",
    "coloring-label": "カラーリング:",
    "canvas-size-label": "キャンバスサイズ:",
    "layers-label": "レイヤー数:",
    "cycle-span-label": "サイクルスパン:",
    "fuse-fps-label": "フューズ FPS:",
    "easing-label": "イージング:",
    "with-fullscreen-label": "フルスクリーン:",
    "show-fps-label": "FPS を表示:",
    "DELETEME.warningText": "高過ぎる負荷により Web ブラウザや OS がクラッシュすることがあります。",
    "informationFuseFps": "⚠️ Web ブラウザや OS がクラッシュする事を避ける為に FPS(Max) が \"Fuse FPS\" を下回ると自動停止します。",
    "DELETEME.informationLayers": "\"Layers\" が大きくなるほど繊細な映像をお楽しみ頂けますが、マシンの負荷も増大します。",
    "DELETEME.informationPattern": "\"Pattern\" は \"spots\" が重く \"lines\" が軽いです。",
    "timeUnitMs": "ミリ秒",
    "timeUnitS": "秒",
    "timeUnitM": "分",
    "timeUnitH": "時間",
    "timeUnitD": "日",
    "ago": "前",
    "Hide UI": "UI 非表示",
    "Play / Pause": "再生 / 一時停止",
    "Switch Pattern (Forward)": "パターン切り替え (順方向)",
    "Switch Pattern (Backward)": "パターン切り替え (逆方向)",
    "Switch Coloring (Forward)": "カラーリング切り替え (順方向)",
    "Switch Coloring (Backward)": "カラーリング切り替え (逆方向)",
    "Increase Canvas Size": "キャンバスサイズ拡大",
    "Decrease Canvas Size": "キャンバスサイズ縮小",
    "Increase Layer": "レイヤー増加",
    "Decrease Layer": "レイヤー減少",
    "Speed Down": "スピードダウン",
    "Speed Up": "スピードアップ",
    "FullScreen": "フルスクリーン",
    "Show FPS": "FPS 表示"
});
define("script/locale", ["require", "exports", "resource/lang.en", "resource/lang.ja"], function (require, exports, lang_en_json_1, lang_ja_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locale = void 0;
    lang_en_json_1 = __importDefault(lang_en_json_1);
    lang_ja_json_1 = __importDefault(lang_ja_json_1);
    var Locale;
    (function (Locale) {
        var lang = "ja" === navigator.language.substring(0, 2) ? "ja" : "en";
        Locale.master = {
            en: lang_en_json_1.default,
            ja: lang_ja_json_1.default,
        };
        Locale.map = function (key) { return Locale.master[lang][key]; };
    })(Locale || (exports.Locale = Locale = {}));
});
define("flounder.style.js/evil-type.ts/common/evil-type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EvilType = void 0;
    // Original: https://github.com/wraith13/evil-type.ts/blob/master/common/evil-type.ts
    // License: BSL-1.0 ( https://github.com/wraith13/evil-type.ts/blob/master/LICENSE_1_0.txt )
    var EvilType;
    (function (EvilType) {
        EvilType.comparer = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return function (a, b) {
                for (var i = 0; i < args.length; ++i) {
                    var focus_1 = args[i];
                    var af = focus_1(a);
                    var bf = focus_1(b);
                    if (af < bf) {
                        return -1;
                    }
                    if (bf < af) {
                        return 1;
                    }
                }
                return 0;
            };
        };
        EvilType.lazy = function (invoker) {
            return (function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return invoker().apply(void 0, args);
            });
        };
        var Error;
        (function (Error) {
            Error.makeListener = function (path) {
                if (path === void 0) { path = ""; }
                return ({
                    path: path,
                    matchRate: {},
                    errors: [],
                });
            };
            Error.nextListener = function (name, listner) {
                return (listner ?
                    {
                        path: Error.makePath(listner.path, name),
                        matchRate: listner.matchRate,
                        errors: listner.errors,
                    } :
                    undefined);
            };
            Error.makePath = function (path, name) {
                var base = path.includes("#") ? path : "".concat(path, "#");
                var separator = base.endsWith("#") || "string" !== typeof name ? "" : ".";
                var tail = "string" === typeof name ? name : "[".concat(name, "]");
                return base + separator + tail;
            };
            Error.getPathDepth = function (path) {
                var valuePath = path.replace(/\[(\d+)\]/g, ".$1");
                return valuePath.split(/[#\.]/).filter(function (i) { return 0 < i.length; }).length;
            };
            Error.getType = function (isType) {
                var transactionListner = Error.makeListener();
                isType(undefined, transactionListner);
                return transactionListner.errors
                    .map(function (i) { return i.requiredType.split(" | "); })
                    .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, [])
                    .filter(function (i, ix, list) { return ix === list.indexOf(i); });
            };
            Error.isMtached = function (matchRate) { return true === matchRate; };
            Error.matchRateToNumber = function (matchRate) {
                switch (matchRate) {
                    case false:
                        return 0;
                    case true:
                        return 1;
                    default:
                        return matchRate;
                }
            };
            Error.setMatchRate = function (listner, matchRate) {
                if (listner) {
                    listner.matchRate[listner.path] = matchRate;
                }
                return Error.isMtached(matchRate);
            };
            Error.getMatchRate = function (listner, path) {
                if (path === void 0) { path = listner.path; }
                if (path in listner.matchRate) {
                    return listner.matchRate[path];
                }
                return Error.calculateMatchRate(listner, path);
            };
            Error.calculateMatchRate = function (listner, path) {
                if (path === void 0) { path = listner.path; }
                var depth = Error.getPathDepth(path);
                var childrenKeys = Object.keys(listner.matchRate)
                    .filter(function (i) { return 0 === i.indexOf(path) && Error.getPathDepth(i) === depth + 1; });
                var length = childrenKeys.length;
                var sum = childrenKeys
                    .map(function (i) { return listner.matchRate[i]; })
                    .map(function (i) { return Error.matchRateToNumber(i); })
                    .reduce(function (a, b) { return a + b; }, 0.0);
                var result = 0 < length ? sum / length : true;
                if (true === result || 1.0 <= result) {
                    console.error("🦋 FIXME: \"MatchWithErrors\": " + JSON.stringify({ sum: sum, length: length, result: result, listner: listner }));
                }
                return listner.matchRate[path] = result;
            };
            Error.setMatch = function (listner) {
                if (listner) {
                    var paths = Object.keys(listner.matchRate)
                        .filter(function (path) { return 0 === path.indexOf(listner.path); });
                    if (paths.every(function (path) { return Error.isMtached(listner.matchRate[path]); })) {
                        paths.forEach(function (path) { return delete listner.matchRate[path]; });
                    }
                }
                Error.setMatchRate(listner, true);
            };
            Error.raiseError = function (listner, requiredType, actualValue) {
                if (listner) {
                    Error.setMatchRate(listner, false);
                    listner.errors.push({
                        type: "solid",
                        path: listner.path,
                        requiredType: "string" === typeof requiredType ? requiredType : requiredType(),
                        actualValue: Error.valueToString(actualValue),
                    });
                }
                return false;
            };
            Error.orErros = function (listner, modulus, errors, fullErrors) {
                var _a;
                var paths = errors.map(function (i) { return i.path; }).filter(function (i, ix, list) { return ix === list.indexOf(i); });
                (_a = listner.errors).push.apply(_a, paths.map(function (path) {
                    return ({
                        type: modulus <= fullErrors.filter(function (i) { return "solid" === i.type && i.path === path; }).length ?
                            "solid" :
                            "fragment",
                        path: path,
                        requiredType: errors
                            .filter(function (i) { return i.path === path; })
                            .map(function (i) { return i.requiredType; })
                            .map(function (i) { return i.split(" | "); })
                            .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, [])
                            .filter(function (i, ix, list) { return ix === list.indexOf(i); })
                            .join(" | "),
                        actualValue: errors.filter(function (i) { return i.path === path; }).map(function (i) { return i.actualValue; })[0],
                    });
                }));
            };
            Error.andErros = function (listner, errors) {
                var _a;
                var paths = errors.map(function (i) { return i.path; }).filter(function (i, ix, list) { return ix === list.indexOf(i); });
                (_a = listner.errors).push.apply(_a, paths.map(function (path) {
                    return ({
                        type: errors.some(function (i) { return "solid" === i.type && i.path === path; }) ?
                            "solid" :
                            "fragment",
                        path: path,
                        requiredType: errors
                            .filter(function (i) { return i.path === path; })
                            .map(function (i) { return i.requiredType; })
                            .map(function (i) { return i.split(" & "); })
                            .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, [])
                            .filter(function (i, ix, list) { return ix === list.indexOf(i); })
                            .join(" & "),
                        actualValue: errors.filter(function (i) { return i.path === path; }).map(function (i) { return i.actualValue; })[0],
                    });
                }));
            };
            Error.valueToString = function (value) {
                return undefined === value ? "undefined" : JSON.stringify(value);
            };
            Error.withErrorHandling = function (isMatchType, listner, requiredType, actualValue) {
                if (listner) {
                    if (isMatchType) {
                        Error.setMatch(listner);
                    }
                    else {
                        Error.raiseError(listner, requiredType, actualValue);
                    }
                }
                return isMatchType;
            };
        })(Error = EvilType.Error || (EvilType.Error = {}));
        var Validator;
        (function (Validator) {
            Validator.makeErrorListener = Error.makeListener;
            Validator.isJust = function (target) { return null !== target && "object" === typeof target ?
                function (value, listner) {
                    return Error.withErrorHandling(JSON.stringify(target) === JSON.stringify(value), listner, function () { return Error.valueToString(target); }, value);
                } :
                function (value, listner) {
                    return Error.withErrorHandling(target === value, listner, function () { return Error.valueToString(target); }, value);
                }; };
            Validator.isNever = function (value, listner) {
                return Error.withErrorHandling(false, listner, "never", value);
            };
            Validator.isUndefined = Validator.isJust(undefined);
            Validator.isUnknown = function (_value, _listner) { return true; };
            Validator.isAny = function (_value, _listner) { return true; };
            Validator.isNull = Validator.isJust(null);
            Validator.isBoolean = function (value, listner) {
                return Error.withErrorHandling("boolean" === typeof value, listner, "boolean", value);
            };
            Validator.isInteger = function (value, listner) {
                return Error.withErrorHandling(Number.isInteger(value), listner, "integer", value);
            };
            Validator.isSafeInteger = function (value, listner) {
                return Error.withErrorHandling(Number.isSafeInteger(value), listner, "safe-integer", value);
            };
            Validator.isDetailedInteger = function (data, safeInteger) {
                var base = "safe" === safeInteger ? Validator.isSafeInteger : Validator.isInteger;
                if ([data.minimum, data.exclusiveMinimum, data.maximum, data.exclusiveMaximum, data.multipleOf].every(function (i) { return undefined === i; })) {
                    return base;
                }
                else {
                    var result = function (value, listner) { return Error.withErrorHandling(base(value) &&
                        (undefined === data.minimum || data.minimum <= value) &&
                        (undefined === data.exclusiveMinimum || data.exclusiveMinimum < value) &&
                        (undefined === data.maximum || value <= data.maximum) &&
                        (undefined === data.exclusiveMaximum || value < data.exclusiveMaximum) &&
                        (undefined === data.multipleOf || 0 === value % data.multipleOf), listner, function () {
                        var details = [];
                        if (undefined !== data.minimum) {
                            details.push("minimum:".concat(data.minimum));
                        }
                        if (undefined !== data.exclusiveMinimum) {
                            details.push("exclusiveMinimum:".concat(data.exclusiveMinimum));
                        }
                        if (undefined !== data.maximum) {
                            details.push("maximum:".concat(data.maximum));
                        }
                        if (undefined !== data.exclusiveMaximum) {
                            details.push("exclusiveMaximum:".concat(data.exclusiveMaximum));
                        }
                        if (undefined !== data.multipleOf) {
                            details.push("multipleOf:".concat(data.multipleOf));
                        }
                        return "".concat("safe" === safeInteger ? "safe-integer" : "integer", "(").concat(details.join(","), ")");
                    }, value); };
                    return result;
                }
            };
            Validator.isNumber = function (value, listner) {
                return Error.withErrorHandling("number" === typeof value, listner, "number", value);
            };
            Validator.isSafeNumber = function (value, listner) {
                return Error.withErrorHandling(Number.isFinite(value), listner, "safe-number", value);
            };
            Validator.isDetailedNumber = function (data, safeNumber) {
                var base = "safe" === safeNumber ? Validator.isSafeNumber : Validator.isNumber;
                if ([data.minimum, data.exclusiveMinimum, data.maximum, data.exclusiveMaximum, data.multipleOf].every(function (i) { return undefined === i; })) {
                    return base;
                }
                else {
                    var result = function (value, listner) { return Error.withErrorHandling(base(value) &&
                        (undefined === data.minimum || data.minimum <= value) &&
                        (undefined === data.exclusiveMinimum || data.exclusiveMinimum < value) &&
                        (undefined === data.maximum || value <= data.maximum) &&
                        (undefined === data.exclusiveMaximum || value < data.exclusiveMaximum) &&
                        (undefined === data.multipleOf || 0 === value % data.multipleOf), listner, function () {
                        var details = [];
                        if (undefined !== data.minimum) {
                            details.push("minimum:".concat(data.minimum));
                        }
                        if (undefined !== data.exclusiveMinimum) {
                            details.push("exclusiveMinimum:".concat(data.exclusiveMinimum));
                        }
                        if (undefined !== data.maximum) {
                            details.push("maximum:".concat(data.maximum));
                        }
                        if (undefined !== data.exclusiveMaximum) {
                            details.push("exclusiveMaximum:".concat(data.exclusiveMaximum));
                        }
                        if (undefined !== data.multipleOf) {
                            details.push("multipleOf:".concat(data.multipleOf));
                        }
                        return "".concat("safe" === safeNumber ? "safe-number" : "number", "(").concat(details.join(","), ")");
                    }, value); };
                    return result;
                }
            };
            Validator.isString = function (value, listner) {
                return Error.withErrorHandling("string" === typeof value, listner, "string", value);
            };
            Validator.makeStringTypeName = function (data) {
                var details = [];
                if (undefined !== data.minLength) {
                    details.push("minLength:".concat(data.minLength));
                }
                if (undefined !== data.maxLength) {
                    details.push("maxLength:".concat(data.maxLength));
                }
                if (undefined !== data.format) {
                    details.push("format:".concat(data.format));
                }
                else if (undefined !== data.pattern) {
                    details.push("pattern:".concat(data.pattern));
                }
                if (undefined !== data.regexpFlags) {
                    details.push("regexpFlags:".concat(data.regexpFlags));
                }
                return "string(".concat(details.join(","), ")");
            };
            Validator.regexpTest = function (pattern, flags, text) {
                switch (pattern) {
                    case "^[[:regex:]]$":
                        try {
                            new RegExp(text, flags);
                            return true;
                        }
                        catch (_a) {
                            return false;
                        }
                    default:
                        return new RegExp(pattern, flags).test(text);
                }
            };
            Validator.isDetailedString = function (data, regexpFlags) {
                if ([data.minLength, data.maxLength, data.pattern, data.format].every(function (i) { return undefined === i; })) {
                    return Validator.isString;
                }
                var pattern = data.pattern;
                var result = function (value, listner) {
                    var _a, _b, _c;
                    return Error.withErrorHandling("string" === typeof value &&
                        (undefined === data.minLength || data.minLength <= value.length) &&
                        (undefined === data.maxLength || value.length <= data.maxLength) &&
                        (undefined === pattern || ((_a = data.regexpTest) !== null && _a !== void 0 ? _a : Validator.regexpTest)(pattern, (_c = (_b = data.regexpFlags) !== null && _b !== void 0 ? _b : regexpFlags) !== null && _c !== void 0 ? _c : "u", value)), listner, function () { return Validator.makeStringTypeName(data); }, value);
                };
                return result;
            };
            Validator.isObject = function (value) {
                return null !== value && "object" === typeof value && !Array.isArray(value);
            };
            Validator.isEnum = function (list) {
                return function (value, listner) {
                    return Error.withErrorHandling(list.includes(value), listner, function () { return list.map(function (i) { return Error.valueToString(i); }).join(" | "); }, value);
                };
            };
            Validator.isUniqueItems = function (list) {
                return list.map(function (i) { return JSON.stringify(i); }).every(function (i, ix, list) { return ix === list.indexOf(i); });
            };
            Validator.makeArrayTypeName = function (data) {
                var details = [];
                if (undefined !== (data === null || data === void 0 ? void 0 : data.minItems)) {
                    details.push("minItems:".concat(data.minItems));
                }
                if (undefined !== (data === null || data === void 0 ? void 0 : data.maxItems)) {
                    details.push("maxItems:".concat(data.maxItems));
                }
                if (true === (data === null || data === void 0 ? void 0 : data.uniqueItems)) {
                    details.push("uniqueItems:".concat(data.uniqueItems));
                }
                return details.length <= 0 ? "array" : "array(".concat(details.join(","), ")");
            };
            Validator.isArray = function (isType, data) {
                return function (value, listner) {
                    if (Array.isArray(value) &&
                        (undefined === (data === null || data === void 0 ? void 0 : data.minItems) || data.minItems <= value.length) &&
                        (undefined === (data === null || data === void 0 ? void 0 : data.maxItems) || value.length <= data.maxItems) &&
                        (true !== (data === null || data === void 0 ? void 0 : data.uniqueItems) || Validator.isUniqueItems(value))) {
                        var result = value.map(function (i) { return isType(i, listner); }).every(function (i) { return i; });
                        if (listner) {
                            if (result) {
                                Error.setMatch(listner);
                            }
                            else {
                                Error.calculateMatchRate(listner);
                            }
                        }
                        return result;
                    }
                    else {
                        return undefined !== listner && Error.raiseError(listner, function () { return Validator.makeArrayTypeName(data); }, value);
                    }
                };
            };
            Validator.makeOrTypeNameFromIsTypeList = function () {
                var isTypeList = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    isTypeList[_i] = arguments[_i];
                }
                return isTypeList.map(function (i) { return Error.getType(i); })
                    .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, [])
                    .filter(function (i, ix, list) { return ix === list.indexOf(i); });
            };
            Validator.getBestMatchErrors = function (listeners) {
                return listeners.map(function (listener) {
                    return ({
                        listener: listener,
                        matchRate: Error.getMatchRate(listener),
                    });
                })
                    .sort(EvilType.comparer(function (i) { return -Error.matchRateToNumber(i.matchRate); }))
                    .filter(function (i, _ix, list) { return i.matchRate === list[0].matchRate; })
                    .map(function (i) { return i.listener; });
            };
            Validator.isOr = function () {
                var isTypeList = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    isTypeList[_i] = arguments[_i];
                }
                return function (value, listner) {
                    if (listner) {
                        var resultList = isTypeList.map(function (i) {
                            var transactionListner = Error.makeListener(listner.path);
                            var result = {
                                transactionListner: transactionListner,
                                result: i(value, transactionListner),
                            };
                            return result;
                        });
                        var success = resultList.filter(function (i) { return i.result; })[0];
                        var result = Boolean(success);
                        if (result) {
                            Error.setMatch(listner);
                        }
                        else {
                            var requiredType = Validator.makeOrTypeNameFromIsTypeList.apply(void 0, isTypeList);
                            if ((Validator.isObject(value) && requiredType.includes("object")) || (Array.isArray(value) && requiredType.includes("array"))) {
                                var bestMatchErrors = Validator.getBestMatchErrors(resultList.map(function (i) { return i.transactionListner; }));
                                var errors = bestMatchErrors.map(function (i) { return i.errors; }).reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, []);
                                var fullErrors = resultList.map(function (i) { return i.transactionListner; }).map(function (i) { return i.errors; }).reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, []);
                                Error.orErros(listner, isTypeList.length, errors, fullErrors);
                                if (errors.length <= 0) {
                                    console.error("🦋 FIXME: \"UnmatchWithoutErrors\": " + JSON.stringify(resultList));
                                }
                                if (0 < bestMatchErrors.length) {
                                    Object.entries(bestMatchErrors[0].matchRate).forEach(function (kv) { return listner.matchRate[kv[0]] = kv[1]; });
                                }
                            }
                            else {
                                Error.raiseError(listner, requiredType.join(" | "), value);
                            }
                        }
                        return result;
                    }
                    else {
                        return isTypeList.some(function (i) { return i(value); });
                    }
                };
            };
            Validator.isAnd = function () {
                var isTypeList = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    isTypeList[_i] = arguments[_i];
                }
                return function (value, listner) {
                    if (listner) {
                        var resultList = isTypeList.map(function (i) {
                            var transactionListner = Error.makeListener(listner.path);
                            var result = {
                                transactionListner: transactionListner,
                                result: i(value, transactionListner),
                            };
                            return result;
                        });
                        var result = resultList.every(function (i) { return i.result; });
                        if (result) {
                            Error.setMatch(listner);
                        }
                        else {
                            var requiredType = Validator.makeOrTypeNameFromIsTypeList.apply(void 0, isTypeList);
                            if ((Validator.isObject(value) && requiredType.includes("object")) || (Array.isArray(value) && requiredType.includes("array"))) {
                                var transactionListners_1 = resultList.map(function (i) { return i.transactionListner; });
                                var errors = transactionListners_1.map(function (i) { return i.errors; }).reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, []);
                                Error.andErros(listner, errors);
                                if (errors.length <= 0) {
                                    console.error("🦋 FIXME: \"UnmatchWithoutErrors\": " + JSON.stringify(resultList));
                                }
                                if (0 < transactionListners_1.length) {
                                    var paths = transactionListners_1
                                        .map(function (i) { return Object.keys(i.matchRate); })
                                        .reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }, [])
                                        .filter(function (i, ix, list) { return ix === list.indexOf(i); });
                                    paths.forEach(function (path) {
                                        var matchRates = transactionListners_1.map(function (i) { return i.matchRate[path]; })
                                            .filter(function (i) { return undefined !== i; });
                                        if (matchRates.every(function (i) { return true === i; })) {
                                            listner.matchRate[path] = true;
                                        }
                                        else {
                                            listner.matchRate[path] = matchRates
                                                .map(function (i) { return Error.matchRateToNumber(i); })
                                                .reduce(function (a, b) { return a + b; }, 0)
                                                / matchRates.length;
                                        }
                                    });
                                }
                            }
                            else {
                                Error.raiseError(listner, requiredType.join(" & "), value);
                            }
                        }
                        return result;
                    }
                    else {
                        return isTypeList.some(function (i) { return i(value); });
                    }
                };
            };
            Validator.isNeverTypeGuard = function (value, listner) {
                return Validator.isSpecificObject({
                    $type: Validator.isJust("never-type-guard"),
                })(value, listner);
            };
            Validator.isNeverMemberType = function (value, member, _neverTypeGuard, listner) {
                return !(member in value) || Validator.isNever(value[member], listner);
            };
            Validator.isOptionalTypeGuard = function (value, listner) {
                return Validator.isSpecificObject({
                    $type: Validator.isJust("optional-type-guard"),
                    isType: function (value, listner) {
                        return "function" === typeof value || (null !== value && "object" === typeof value) || (undefined !== listner && Error.raiseError(listner, "IsType<unknown> | ObjectValidator<unknown>", value));
                    },
                })(value, listner);
            };
            Validator.makeOptionalTypeGuard = function (isType) {
                return ({
                    $type: "optional-type-guard",
                    isType: isType,
                });
            };
            Validator.invokeIsType = function (isType) {
                return "function" === typeof isType ? isType : Validator.isSpecificObject(isType);
            };
            Validator.isOptional = Validator.makeOptionalTypeGuard;
            Validator.isOptionalMemberType = function (value, member, optionalTypeGuard, listner) {
                var result = !(member in value) || Validator.invokeIsType(optionalTypeGuard.isType)(value[member], listner);
                if (!result && listner) {
                    var error = listner.errors.filter(function (i) { return i.path === listner.path; })[0];
                    if (error) {
                        error.requiredType = "never | " + error.requiredType;
                    }
                    else {
                        // Not wrong, but noisy!
                        // listner.errors.filter(i => 0 === i.path.indexOf(listner.path) && "fragment" !== i.type).forEach(i => i.type = "fragment");
                        // listner.errors.push
                        // ({
                        //     type: "fragment",
                        //     path: listner.path,
                        //     requiredType: "never",
                        //     actualValue: Error.valueToString((value as ObjectType)[member]),
                        // });
                    }
                }
                return result;
            };
            Validator.isMemberType = function (value, member, isType, listner) {
                return Validator.isNeverTypeGuard(isType) ?
                    Validator.isNeverMemberType(value, member, isType, listner) :
                    Validator.isOptionalTypeGuard(isType) ?
                        Validator.isOptionalMemberType(value, member, isType, listner) :
                        Validator.invokeIsType(isType)(value[member], listner);
            };
            Validator.mergeObjectValidator = function (target) {
                var sources = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    sources[_i - 1] = arguments[_i];
                }
                return Object.assign.apply(Object, __spreadArray([{}, target], sources, true));
            };
            Validator.isSpecificObject = function (memberValidator, options) {
                return function (value, listner) {
                    if (Validator.isObject(value)) {
                        var result = Object.entries("function" === typeof memberValidator ? memberValidator() : memberValidator).map(function (kv) { return Validator.isMemberType(value, kv[0], kv[1], Error.nextListener(kv[0], listner)); })
                            .every(function (i) { return i; });
                        if (false === (options === null || options === void 0 ? void 0 : options.additionalProperties)) {
                            var regularKeys_1 = Object.keys(memberValidator);
                            var additionalKeys = Object.keys(value)
                                .filter(function (key) { return !regularKeys_1.includes(key); });
                            if (additionalKeys.some(function (_) { return true; })) {
                                additionalKeys.map(function (key) { return Error.raiseError(Error.nextListener(key, listner), "never", value[key]); });
                                result = false;
                            }
                        }
                        if (listner) {
                            if (result) {
                                Error.setMatch(listner);
                            }
                            else {
                                Error.calculateMatchRate(listner);
                            }
                        }
                        return result;
                    }
                    else {
                        return undefined !== listner && Error.raiseError(listner, "object", value);
                    }
                };
            };
            Validator.isDictionaryObject = function (isType, keys, options) {
                return function (value, listner) {
                    if (Validator.isObject(value)) {
                        var result = undefined === keys ?
                            Object.entries(value).map(function (kv) { return isType(kv[1], Error.nextListener(kv[0], listner)); }).every(function (i) { return i; }) :
                            keys.map(function (key) { return isType(value, Error.nextListener(key, listner)); }).every(function (i) { return i; });
                        if (undefined !== keys && false === (options === null || options === void 0 ? void 0 : options.additionalProperties)) {
                            var additionalKeys = Object.keys(value)
                                .filter(function (key) { return !keys.includes(key); });
                            if (additionalKeys.some(function (_) { return true; })) {
                                additionalKeys.map(function (key) { return Error.raiseError(Error.nextListener(key, listner), "never", value[key]); });
                                result = false;
                            }
                        }
                        if (listner) {
                            if (result) {
                                Error.setMatch(listner);
                            }
                            else {
                                Error.calculateMatchRate(listner);
                            }
                        }
                        return result;
                    }
                    else {
                        return undefined !== listner && Error.raiseError(listner, "object", value);
                    }
                };
            };
        })(Validator = EvilType.Validator || (EvilType.Validator = {}));
    })(EvilType || (exports.EvilType = EvilType = {}));
});
define("flounder.style.js/generated/type", ["require", "exports", "flounder.style.js/evil-type.ts/common/evil-type"], function (require, exports, evil_type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Type = exports.EvilType = void 0;
    Object.defineProperty(exports, "EvilType", { enumerable: true, get: function () { return evil_type_1.EvilType; } });
    var Type;
    (function (Type) {
        Type.isFlounderType = evil_type_1.EvilType.Validator.isOr(evil_type_1.EvilType.Validator.isEnum(["trispot",
            "tetraspot"]), evil_type_1.EvilType.Validator.isEnum(["stripe", "diline", "triline"]));
        Type.isLayoutAngle = evil_type_1.EvilType.Validator.isEnum(["regular", "alternative"]);
        Type.isHexColor = evil_type_1.EvilType.Validator.isDetailedString({
            pattern: "^#(?:[0-9A-Fa-f]){3,4,6,8}$",
        }, "u");
        Type.isNamedColor = evil_type_1.EvilType.Validator.isEnum(["black", "silver", "gray", "white",
            "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue",
            "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue",
            "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
            "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred",
            "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink",
            "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold",
            "goldenrod", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
            "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
            "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue",
            "lightyellow", "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
            "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
            "navajowhite", "oldlace", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
            "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rebeccapurple", "rosybrown", "royalblue",
            "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "slategrey", "snow",
            "springgreen", "steelblue", "tan", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen"
        ]);
        Type.isColor = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isOr(Type.isHexColor, Type.isNamedColor); });
        Type.isRate = evil_type_1.EvilType.Validator.isDetailedNumber({ minimum: 0, maximum: 1, });
        Type.isSignedRate = evil_type_1.EvilType.Validator.isDetailedNumber({ minimum: -1, maximum: 1, });
        Type.isPixel = evil_type_1.EvilType.Validator.isDetailedNumber({ minimum: 0, });
        Type.isSignedPixel = evil_type_1.EvilType.Validator.isNumber;
        Type.isCount = evil_type_1.EvilType.Validator.isDetailedInteger({ minimum: 0, });
        Type.isNamedDirectionAngle = evil_type_1.EvilType.Validator.isEnum(["right", "right-down",
            "down", "left-down", "left", "left-up", "up", "right-up"]);
        Type.isDirectionAngle = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isOr(Type.isNamedDirectionAngle, Type.isSignedRate); });
        Type.isArgumentsBase = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isSpecificObject(Type.argumentsBaseValidatorObject, {
            additionalProperties: false
        }); });
        Type.isSpotArguments = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isSpecificObject(Type.spotArgumentsValidatorObject, {
            additionalProperties: false
        }); });
        Type.isLineArguments = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isSpecificObject(Type.lineArgumentsValidatorObject, {
            additionalProperties: false
        }); });
        Type.isArguments = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isOr(Type.isSpotArguments, Type.isLineArguments); });
        Type.argumentsBaseValidatorObject = ({ $schema: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isJust("https://raw.githubusercontent.com/wraith13/flounder.style.js/master/generated/schema.json#")), type: Type.isFlounderType,
            layoutAngle: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isLayoutAngle, Type.isSignedRate)), offsetX: evil_type_1.EvilType.Validator.isOptional(Type.isSignedPixel), offsetY: evil_type_1.EvilType.Validator.isOptional(Type.isSignedPixel), foregroundColor: Type.isColor,
            backgroundColor: evil_type_1.EvilType.Validator.isOptional(Type.isColor), intervalSize: evil_type_1.EvilType.Validator.isOptional(Type.isPixel), depth: Type.isRate, blur: evil_type_1.EvilType.Validator.isOptional(Type.isPixel), maxPatternSize: evil_type_1.EvilType.Validator.isOptional(Type.isPixel), reverseRate: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isSignedRate, evil_type_1.EvilType.Validator.isJust("auto"), evil_type_1.EvilType.Validator.isJust("-auto"))), anglePerDepth: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isSignedRate, evil_type_1.EvilType.Validator.isJust("auto"), evil_type_1.EvilType.Validator.isJust("-auto"))), maximumFractionDigits: evil_type_1.EvilType.Validator.isOptional(Type.isCount), });
        Type.spotArgumentsValidatorObject = evil_type_1.EvilType.Validator.mergeObjectValidator(Type.argumentsBaseValidatorObject, { type: evil_type_1.EvilType.Validator.isEnum(["trispot", "tetraspot"]), layoutAngle: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isLayoutAngle, evil_type_1.EvilType.Validator.isJust(0))), anglePerDepth: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isJust(0)), });
        Type.lineArgumentsValidatorObject = evil_type_1.EvilType.Validator.mergeObjectValidator(Type.argumentsBaseValidatorObject, { type: evil_type_1.EvilType.Validator.isEnum(["stripe", "diline", "triline"]), });
    })(Type || (exports.Type = Type = {}));
});
define("flounder.style.js/config", [], {
    "defaultSpotIntervalSize": 24,
    "defaultBlur": 0.0,
    "defaultMaximumFractionDigits": 4
});
define("flounder.style.js/index", ["require", "exports", "flounder.style.js/generated/type", "flounder.style.js/config"], function (require, exports, type_1, config_json_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FlounderStyle = exports.EvilType = void 0;
    config_json_2 = __importDefault(config_json_2);
    Object.defineProperty(exports, "EvilType", { enumerable: true, get: function () { return type_1.EvilType; } });
    var FlounderStyle;
    (function (FlounderStyle) {
        FlounderStyle.Type = type_1.Type;
        FlounderStyle.sin = function (rate) { return Math.sin(Math.PI * 2.0 * rate); };
        FlounderStyle.cos = function (rate) { return Math.cos(Math.PI * 2.0 * rate); };
        FlounderStyle.atan2 = function (direction) { return Math.atan2(direction.y, direction.x) / (Math.PI * 2.0); };
        FlounderStyle.styleToStylePropertyList = function (style) {
            return Object.keys(style).map(function (key) { return ({ key: key, value: style[key], }); });
        };
        FlounderStyle.setStyleProperty = function (element, style) {
            var current = element.style.getPropertyValue(style.key);
            if (current !== style.value) // for DOM rendering performance
             {
                if (undefined !== style.value) {
                    element.style.setProperty(style.key, style.value);
                }
                else {
                    element.style.removeProperty(style.key);
                }
            }
            return element;
        };
        FlounderStyle.makeSureStyle = function (styleOrArguments) {
            return FlounderStyle.isArguments(styleOrArguments) ? FlounderStyle.makeStyle(styleOrArguments) : styleOrArguments;
        };
        FlounderStyle.setStyle = function (element, styleOrArguments) {
            FlounderStyle.styleToStylePropertyList(FlounderStyle.makeSureStyle(styleOrArguments)).forEach(function (i) { return FlounderStyle.setStyleProperty(element, i); });
            return element;
        };
        FlounderStyle.stylePropertyToString = function (style) { var _a; return "".concat(style.key, ": ").concat((_a = style.value) !== null && _a !== void 0 ? _a : "inherit", ";"); };
        FlounderStyle.styleToString = function (styleOrArguments, separator) {
            if (separator === void 0) { separator = " "; }
            return FlounderStyle.styleToStylePropertyList(FlounderStyle.makeSureStyle(styleOrArguments))
                .filter(function (i) { return undefined !== i.value; })
                .map(function (i) { return FlounderStyle.stylePropertyToString(i); })
                .join(separator);
        };
        FlounderStyle.regulateRate = function (rate) {
            var result = rate % 1.0;
            if (result < -0.0000000000001) {
                result += 1.0;
            }
            return result;
        };
        FlounderStyle.directionAngleToRate = function (angle) {
            switch (angle) {
                case "right":
                    return 0.0 / 8.0;
                case "right-down":
                    return 1.0 / 8.0;
                case "down":
                    return 2.0 / 8.0;
                case "left-down":
                    return 3.0 / 8.0;
                case "left":
                    return 4.0 / 8.0;
                case "left-up":
                    return 5.0 / 8.0;
                case "up":
                    return 6.0 / 8.0;
                case "right-up":
                    return 7.0 / 8.0;
                default:
                    return FlounderStyle.regulateRate(angle);
            }
        };
        FlounderStyle.isArguments = function (value) {
            return null !== value &&
                "object" === typeof value &&
                "type" in value && "string" === typeof value.type &&
                "foregroundColor" in value && "string" === typeof value.foregroundColor &&
                "depth" in value && "number" === typeof value.depth;
        };
        FlounderStyle.getPatternType = function (data) { var _a; return (_a = data.type) !== null && _a !== void 0 ? _a : "trispot"; };
        FlounderStyle.getLayoutAngle = function (data) {
            var _a;
            if ("number" === typeof data.layoutAngle) {
                if (0 === data.layoutAngle) {
                    return "regular";
                }
                else {
                    throw new Error("When using ".concat(data.type, ", number cannot be used for layoutAngle."));
                }
            }
            if (undefined !== data.anglePerDepth && null !== data.anglePerDepth && 0 !== data.anglePerDepth) {
                throw new Error("anglePerDepth cannot be used when using ".concat(data.type, "."));
            }
            return (_a = data.layoutAngle) !== null && _a !== void 0 ? _a : "regular";
        };
        FlounderStyle.getActualLayoutAngle = function (data) {
            var _a;
            return "number" === typeof data.layoutAngle ? data.layoutAngle :
                "regular" === ((_a = data.layoutAngle) !== null && _a !== void 0 ? _a : "regular") ? 0.0 :
                    "stripe" === data.type ? 0.25 :
                        "tetraspot" === data.type ? 0.125 :
                            "diline" === data.type ? 0.125 :
                                "trispot" === data.type ? 0.25 :
                                    "triline" === data.type ? 0.25 :
                                        0.5;
        };
        FlounderStyle.getAutoAnglePerDepth = function (data) {
            return "stripe" === FlounderStyle.getPatternType(data) ? (1.0 / 2.0) :
                "diline" === FlounderStyle.getPatternType(data) ? (1.0 / 4.0) :
                    "triline" === FlounderStyle.getPatternType(data) ? (1.0 / 6.0) :
                        1.0;
        };
        FlounderStyle.getActualAnglePerDepth = function (data) {
            return "number" === typeof data.anglePerDepth ? data.anglePerDepth :
                "auto" === data.anglePerDepth ? FlounderStyle.getAutoAnglePerDepth(data) :
                    "-auto" === data.anglePerDepth ? -FlounderStyle.getAutoAnglePerDepth(data) :
                        0.0;
        };
        FlounderStyle.getAngleOffsetByDepth = function (data) {
            return FlounderStyle.getActualAnglePerDepth(data) * data.depth;
        };
        FlounderStyle.getAngleOffset = function (data) {
            return FlounderStyle.getActualLayoutAngle(data) + FlounderStyle.getAngleOffsetByDepth(data);
        };
        FlounderStyle.getBackgroundColor = function (data) { var _a; return (_a = data.backgroundColor) !== null && _a !== void 0 ? _a : "transparent"; };
        FlounderStyle.getIntervalSize = function (data) { var _a; return (_a = data.intervalSize) !== null && _a !== void 0 ? _a : config_json_2.default.defaultSpotIntervalSize; };
        FlounderStyle.getBlur = function (data) { var _a; return (_a = data.blur) !== null && _a !== void 0 ? _a : config_json_2.default.defaultBlur; };
        FlounderStyle.getActualReverseRate = function (data) {
            return "number" === typeof data.reverseRate ? data.reverseRate :
                ("auto" === data.reverseRate && "trispot" === FlounderStyle.getPatternType(data)) ? triPatternHalfRadiusSpotArea :
                    ("auto" === data.reverseRate && "tetraspot" === FlounderStyle.getPatternType(data)) ? TetraPatternHalfRadiusSpotArea :
                        ("auto" === data.reverseRate && "stripe" === FlounderStyle.getPatternType(data)) ? 0.0 :
                            ("auto" === data.reverseRate && "diline" === FlounderStyle.getPatternType(data)) ? 0.0 :
                                ("auto" === data.reverseRate && "triline" === FlounderStyle.getPatternType(data)) ? 0.0 :
                                    999;
        };
        FlounderStyle.getAbsoulteReverseRate = function (data) {
            return "number" === typeof data.reverseRate && data.reverseRate < 0.0 ? Math.abs(data.reverseRate) :
                "-auto" === data.reverseRate ? "auto" :
                    data.reverseRate;
        };
        var numberToString = function (data, value) { var _a; return value.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: (_a = data.maximumFractionDigits) !== null && _a !== void 0 ? _a : config_json_2.default.defaultMaximumFractionDigits, }); };
        var makeResult = function (_a) {
            var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? undefined : _b, _c = _a.backgroundImage, backgroundImage = _c === void 0 ? undefined : _c, _d = _a.backgroundSize, backgroundSize = _d === void 0 ? undefined : _d, _e = _a.backgroundPosition, backgroundPosition = _e === void 0 ? undefined : _e;
            return ({
                "background-color": backgroundColor,
                "background-image": backgroundImage,
                "background-size": backgroundSize,
                "background-position": backgroundPosition,
            });
        };
        var makeAxis = function (data, value) {
            return "calc(".concat(numberToString(data, value), "px + 50%)");
        };
        var makeOffsetAxis = function (data, offset, value) {
            return makeAxis(data, value + offset);
        };
        var makeOffsetPosition = function (data, x, y) { var _a, _b; return "".concat(makeOffsetAxis(data, (_a = data.offsetX) !== null && _a !== void 0 ? _a : 0.0, x), " ").concat(makeOffsetAxis(data, (_b = data.offsetY) !== null && _b !== void 0 ? _b : 0.0, y)); };
        FlounderStyle.makeStyle = function (data) {
            switch (FlounderStyle.getPatternType(data)) {
                case "trispot":
                    return FlounderStyle.makeTrispotStyle(data);
                case "tetraspot":
                    return FlounderStyle.makeTetraspotStyle(data);
                case "stripe":
                    return FlounderStyle.makeStripeStyle(data);
                case "diline":
                    return FlounderStyle.makeDilineStyle(data);
                case "triline":
                    return FlounderStyle.makeTrilineStyle(data);
                default:
                    throw new Error("Unknown FlounderType: ".concat(data.type));
            }
        };
        var makeRadialGradientString = function (data, radius, blur) {
            if (blur === void 0) { blur = Math.min(radius, FlounderStyle.getBlur(data)) / 0.5; }
            return "radial-gradient(circle at center, ".concat(data.foregroundColor, " ").concat(numberToString(data, radius - blur), "px, transparent ").concat(numberToString(data, radius + blur), "px)");
        };
        var makeLinearGradientString = function (data, radius, intervalSize, angle, blur) {
            var _a, _b;
            if (blur === void 0) { blur = Math.min(intervalSize - radius, radius, FlounderStyle.getBlur(data)) / 0.5; }
            var deg = numberToString(data, 360.0 * angle);
            var offset = undefined === data.offsetX && undefined === data.offsetY ?
                0 : FlounderStyle.sin(angle) * ((_a = data.offsetX) !== null && _a !== void 0 ? _a : 0.0) - FlounderStyle.cos(angle) * ((_b = data.offsetY) !== null && _b !== void 0 ? _b : 0.0);
            var patternStart = 0 + offset;
            var a = Math.max(0, radius - blur) + offset;
            var b = Math.min(intervalSize * 0.5, radius + blur) + offset;
            var c = Math.max(intervalSize * 0.5, intervalSize - radius - blur) + offset;
            var d = Math.min(intervalSize, intervalSize - radius + blur) + offset;
            var patternEnd = intervalSize + offset;
            return "repeating-linear-gradient(".concat(deg, "deg, ").concat(data.foregroundColor, " ").concat(makeAxis(data, patternStart), ", ").concat(data.foregroundColor, " ").concat(makeAxis(data, a), ", transparent ").concat(makeAxis(data, b), ", transparent ").concat(makeAxis(data, c), ", ").concat(data.foregroundColor, " ").concat(makeAxis(data, d), ", ").concat(data.foregroundColor, " ").concat(makeAxis(data, patternEnd), ")");
        };
        var root2 = Math.sqrt(2.0);
        var root3 = Math.sqrt(3.0);
        var triPatternHalfRadiusSpotArea = Math.PI / (2 * root3);
        var TetraPatternHalfRadiusSpotArea = Math.PI / 4;
        FlounderStyle.makePlainStyleOrNull = function (data) {
            var _a;
            if (data.depth <= 0.0) {
                return makeResult({ backgroundColor: (_a = data.backgroundColor) !== null && _a !== void 0 ? _a : "transparent" });
            }
            else if (1.0 <= data.depth) {
                return makeResult({ backgroundColor: data.foregroundColor });
            }
            else {
                return null;
            }
        };
        var calculateMaxPatternSize = function (data, intervalSize, radius) {
            if (undefined !== data.maxPatternSize && data.maxPatternSize < radius) {
                intervalSize = intervalSize * data.maxPatternSize / radius;
                radius = data.maxPatternSize;
            }
            return { intervalSize: intervalSize, radius: radius, };
        };
        var calculateSpotSize = function (data, halfRadiusSpotArea, maxRadiusRate) {
            var radius;
            var intervalSize = FlounderStyle.getIntervalSize(data);
            if (data.depth <= halfRadiusSpotArea) {
                radius = Math.sqrt(data.depth / halfRadiusSpotArea) * (intervalSize * 0.5);
            }
            else {
                var minRadius = intervalSize * 0.5;
                var maxRadius = intervalSize * maxRadiusRate;
                var MaxRadiusWidth = maxRadius - minRadius;
                var minAreaRate = 1.0 - Math.sqrt(1.0 - halfRadiusSpotArea);
                var maxAreaRate = 1.0;
                var maxAreaRateWidth = minAreaRate - maxAreaRate;
                var areaRate = 1.0 - Math.sqrt(1.0 - data.depth);
                var areaRateWidth = areaRate - minAreaRate;
                radius = minRadius + (MaxRadiusWidth * Math.pow(areaRateWidth / maxAreaRateWidth, 2));
            }
            return calculateMaxPatternSize(data, intervalSize, radius);
        };
        var calculatePatternSize = function (data) {
            switch (FlounderStyle.getPatternType(data)) {
                case "trispot":
                    return calculateSpotSize(data, triPatternHalfRadiusSpotArea, 1.0 / root3);
                case "tetraspot":
                    return calculateSpotSize(data, TetraPatternHalfRadiusSpotArea, 0.5 * root2);
                case "stripe":
                    return calculateMaxPatternSize(data, FlounderStyle.getIntervalSize(data), data.depth * (FlounderStyle.getIntervalSize(data) / 2.0));
                case "diline":
                    return calculateMaxPatternSize(data, FlounderStyle.getIntervalSize(data), (1.0 - Math.sqrt(1.0 - data.depth)) * (FlounderStyle.getIntervalSize(data) / 2.0));
                case "triline":
                    return calculateMaxPatternSize(data, FlounderStyle.getIntervalSize(data), (1.0 - Math.sqrt(1.0 - data.depth)) * (FlounderStyle.getIntervalSize(data) / 3.0));
                default:
                    throw new Error("Unknown FlounderType: ".concat(data.type));
            }
        };
        FlounderStyle.simpleStructuredClone = (function (value) {
            if (undefined !== value && null !== value) {
                if (Array.isArray(value)) {
                    return value.map(function (i) { return FlounderStyle.simpleStructuredClone(i); });
                }
                if ("object" === typeof value) {
                    var result_1 = {};
                    Object.keys(value).forEach(function (key) { return result_1[key] = FlounderStyle.simpleStructuredClone(value[key]); });
                    return result_1;
                }
            }
            return value;
        });
        FlounderStyle.reverseArguments = function (data) {
            var result = FlounderStyle.simpleStructuredClone(data);
            result.foregroundColor = FlounderStyle.getBackgroundColor(data);
            result.backgroundColor = data.foregroundColor;
            if ("number" === typeof data.layoutAngle) {
                result.layoutAngle = FlounderStyle.getActualLayoutAngle(data) + FlounderStyle.getActualAnglePerDepth(data);
            }
            result.depth = 1.0 - data.depth;
            delete result.reverseRate;
            if ("number" === typeof data.anglePerDepth) {
                result.anglePerDepth = -data.anglePerDepth;
            }
            else if ("auto" === data.anglePerDepth) {
                result.anglePerDepth = "-auto";
            }
            else if ("-auto" === data.anglePerDepth) {
                result.anglePerDepth = "auto";
            }
            return result;
        };
        var makeStyleCommon = function (data, maker) {
            if ("transparent" === data.foregroundColor) {
                throw new Error("foregroundColor must be other than \"transparent\".");
            }
            var plain = FlounderStyle.makePlainStyleOrNull(data);
            if (null !== plain) {
                return plain;
            }
            var reverseRate = FlounderStyle.getAbsoulteReverseRate(data);
            if (reverseRate !== data.reverseRate) {
                if ("transparent" === FlounderStyle.getBackgroundColor(data)) {
                    throw new Error("When using reverseRate, backgroundColor must be other than \"transparent\".");
                }
                var absoulteData = FlounderStyle.reverseArguments(data);
                absoulteData.reverseRate = reverseRate;
                return maker(absoulteData);
            }
            else if (FlounderStyle.getActualReverseRate(data) < data.depth) {
                if ("transparent" === FlounderStyle.getBackgroundColor(data)) {
                    throw new Error("When using reverseRate, backgroundColor must be other than \"transparent\".");
                }
                return maker(FlounderStyle.reverseArguments(data));
            }
            else {
                return maker(data);
            }
        };
        FlounderStyle.makeTrispotStyle = function (data) { return makeStyleCommon(data, function (data) {
            var _a = calculatePatternSize(data), intervalSize = _a.intervalSize, radius = _a.radius;
            var radialGradient = makeRadialGradientString(data, radius);
            var backgroundColor = FlounderStyle.getBackgroundColor(data);
            var backgroundImage = Array.from({ length: 4 }).map(function (_) { return radialGradient; }).join(", ");
            switch (FlounderStyle.getLayoutAngle(data)) {
                case "regular": // horizontal
                    {
                        var xUnit = intervalSize * 2.0;
                        var yUnit = intervalSize * root3;
                        return makeResult({
                            backgroundColor: backgroundColor,
                            backgroundImage: backgroundImage,
                            backgroundSize: "".concat(numberToString(data, xUnit), "px ").concat(numberToString(data, yUnit), "px"),
                            backgroundPosition: "".concat(makeOffsetPosition(data, 0, 0), ", ").concat(makeOffsetPosition(data, intervalSize, 0), ", ").concat(makeOffsetPosition(data, intervalSize * 0.5, intervalSize * root3 * 0.5), ", ").concat(makeOffsetPosition(data, intervalSize * 1.5, intervalSize * root3 * 0.5)),
                        });
                    }
                case "alternative": // vertical
                    {
                        var xUnit = intervalSize * root3;
                        var yUnit = intervalSize * 2.0;
                        return makeResult({
                            backgroundColor: backgroundColor,
                            backgroundImage: backgroundImage,
                            backgroundSize: "".concat(numberToString(data, xUnit), "px ").concat(numberToString(data, yUnit), "px"),
                            backgroundPosition: "".concat(makeOffsetPosition(data, 0, 0), ", ").concat(makeOffsetPosition(data, 0, intervalSize), ", ").concat(makeOffsetPosition(data, intervalSize * root3 * 0.5, intervalSize * 0.5), ", ").concat(makeOffsetPosition(data, intervalSize * root3 * 0.5, intervalSize * 1.5)),
                        });
                    }
                default:
                    throw new Error("Unknown LayoutAngle: ".concat(data.layoutAngle));
            }
        }); };
        FlounderStyle.makeTetraspotStyle = function (data) { return makeStyleCommon(data, function (data) {
            var _a = calculatePatternSize(data), intervalSize = _a.intervalSize, radius = _a.radius;
            var radialGradient = makeRadialGradientString(data, radius);
            var backgroundColor = FlounderStyle.getBackgroundColor(data);
            switch (FlounderStyle.getLayoutAngle(data)) {
                case "regular": // straight
                    {
                        var xUnit = intervalSize;
                        var yUnit = intervalSize;
                        return makeResult({
                            backgroundColor: backgroundColor,
                            backgroundImage: radialGradient,
                            backgroundSize: "".concat(numberToString(data, xUnit), "px ").concat(numberToString(data, yUnit), "px"),
                            backgroundPosition: makeOffsetPosition(data, 0, 0),
                        });
                    }
                case "alternative": // slant
                    {
                        var xUnit = (intervalSize * 2.0) / root2;
                        var yUnit = (intervalSize * 2.0) / root2;
                        return makeResult({
                            backgroundColor: backgroundColor,
                            backgroundImage: Array.from({ length: 2 }).map(function (_) { return radialGradient; }).join(", "),
                            backgroundSize: "".concat(numberToString(data, xUnit), "px ").concat(numberToString(data, yUnit), "px"),
                            backgroundPosition: "".concat(makeOffsetPosition(data, 0, 0), ", ").concat(makeOffsetPosition(data, intervalSize / root2, intervalSize / root2)),
                        });
                    }
                default:
                    throw new Error("Unknown LayoutAngle: ".concat(data.layoutAngle));
            }
        }); };
        FlounderStyle.makeStripeStyle = function (data) { return makeStyleCommon(data, function (data) {
            var backgroundColor = FlounderStyle.getBackgroundColor(data);
            var angleOffset = FlounderStyle.getAngleOffset(data);
            var _a = calculatePatternSize(data), intervalSize = _a.intervalSize, radius = _a.radius;
            var angles = [
                FlounderStyle.regulateRate(angleOffset),
            ];
            return makeResult({
                backgroundColor: backgroundColor,
                backgroundImage: angles
                    .map(function (angle) { return makeLinearGradientString(data, radius, intervalSize, angle); })
                    .join(", ")
            });
        }); };
        FlounderStyle.makeDilineStyle = function (data) { return makeStyleCommon(data, function (data) {
            var backgroundColor = FlounderStyle.getBackgroundColor(data);
            var angleOffset = FlounderStyle.getAngleOffset(data);
            var _a = calculatePatternSize(data), intervalSize = _a.intervalSize, radius = _a.radius;
            var angles = [
                FlounderStyle.regulateRate((0.0 / 4.0) + angleOffset),
                FlounderStyle.regulateRate((1.0 / 4.0) + angleOffset),
            ];
            return makeResult({
                backgroundColor: backgroundColor,
                backgroundImage: angles
                    .map(function (angle) { return makeLinearGradientString(data, radius, intervalSize, angle); })
                    .join(", ")
            });
        }); };
        FlounderStyle.makeTrilineStyle = function (data) { return makeStyleCommon(data, function (data) {
            var backgroundColor = FlounderStyle.getBackgroundColor(data);
            var angleOffset = FlounderStyle.getAngleOffset(data);
            var _a = calculatePatternSize(data), intervalSize = _a.intervalSize, radius = _a.radius;
            var angles = [
                FlounderStyle.regulateRate((0.0 / 6.0) + angleOffset),
                FlounderStyle.regulateRate((1.0 / 6.0) + angleOffset),
                FlounderStyle.regulateRate((2.0 / 6.0) + angleOffset)
            ];
            return makeResult({
                backgroundColor: backgroundColor,
                backgroundImage: angles
                    .map(function (angle) { return makeLinearGradientString(data, radius, intervalSize, angle); })
                    .join(", ")
            });
        }); };
        FlounderStyle.calculateOffsetCoefficientDirections = function (data) {
            var calculateDirection = function (angleOffset, a, b) {
                return ({
                    x: a * FlounderStyle.cos(angleOffset + b),
                    y: a * FlounderStyle.sin(angleOffset + b),
                });
            };
            var makeAngleVariation = function (divisionCount, masterMaker) {
                var angleOffset = FlounderStyle.getAngleOffset(data);
                var base = Array.from({ length: divisionCount, }).map(function (_i, ix) { return masterMaker(angleOffset + (ix / (divisionCount * 2.0))); })
                    .reduce(function (a, b) { return a.concat(b); }, []);
                var result = base
                    .concat(base.map(function (i) { return ({ x: -i.x, y: -i.y, }); }))
                    .sort(FlounderStyle.makeComparer(function (i) { return FlounderStyle.regulateRate(FlounderStyle.atan2(i)); }));
                return result;
            };
            switch (FlounderStyle.getPatternType(data)) {
                case "stripe":
                    return makeAngleVariation(1, function (angleOffset) {
                        return [
                            calculateDirection(angleOffset, 1.0, 1.0 / 4.0),
                        ];
                    });
                case "tetraspot":
                case "diline":
                    return makeAngleVariation(2, function (angleOffset) {
                        return [
                            calculateDirection(angleOffset, 1.0, 0.0),
                            calculateDirection(angleOffset, root2, 1.0 / 8.0),
                        ];
                    });
                case "trispot":
                    return makeAngleVariation(3, function (angleOffset) {
                        return [
                            calculateDirection(angleOffset, 2.0, 0.0),
                            calculateDirection(angleOffset, 2.0 * root3, 1.0 / 4.0),
                        ];
                    });
                case "triline":
                    return makeAngleVariation(3, function (angleOffset) {
                        return [
                            calculateDirection(angleOffset, 2.0 / root3, 0.0),
                            calculateDirection(angleOffset, 2.0, 1.0 / 4.0),
                        ];
                    });
                default:
                    throw new Error("Unknown FlounderType: ".concat(data.type));
            }
        };
        FlounderStyle.calculateOffsetCoefficient = function (data) {
            var _a = calculatePatternSize(data), intervalSize = _a.intervalSize, radius = _a.radius;
            var result = {
                directions: FlounderStyle.calculateOffsetCoefficientDirections(data),
                intervalSize: intervalSize,
                radius: radius,
            };
            return result;
        };
        FlounderStyle.comparer = function (a, b) {
            return a < b ? -1 :
                b < a ? 1 :
                    0;
        };
        FlounderStyle.makeComparer = function (f) {
            return function (a, b) { return FlounderStyle.comparer(f(a), f(b)); };
        };
        FlounderStyle.compareAngles = function (a, b) {
            var result = (b - a) % 1.0;
            if (0.5 < result) {
                result -= 1.0;
            }
            else if (result < -0.5) {
                result += 1.0;
            }
            return result;
        };
        FlounderStyle.selectClosestAngleDirection = function (directions, angle) {
            var rate = FlounderStyle.directionAngleToRate(angle);
            return directions.sort(FlounderStyle.makeComparer(function (i) { return Math.abs(FlounderStyle.compareAngles(FlounderStyle.atan2(i), rate)); }))[0];
        };
    })(FlounderStyle || (exports.FlounderStyle = FlounderStyle = {}));
});
define("resource/control", [], {
    "pattern": {
        "id": "pattern",
        "enum": [
            "lines",
            "spots",
            "multi"
        ],
        "default": "lines"
    },
    "coloring": {
        "id": "coloring",
        "enum": [
            "monochrome",
            "primary-colors",
            "phi-colors"
        ],
        "default": "phi-colors"
    },
    "canvasSize": {
        "id": "canvas-size",
        "enum": [
            100,
            75,
            50,
            30,
            25,
            20,
            15,
            10,
            5,
            3,
            2,
            1
        ],
        "default": 100
    },
    "layers": {
        "id": "layers",
        "enum": [
            97,
            89,
            83,
            79,
            73,
            71,
            67,
            61,
            59,
            53,
            47,
            43,
            41,
            37,
            31,
            29,
            23,
            19,
            17,
            13,
            11,
            7,
            5,
            3,
            2,
            1
        ],
        "default": 17
    },
    "cycleSpan": {
        "id": "cycle-span",
        "enum": [
            3600000,
            1800000,
            900000,
            750000,
            600000,
            450000,
            300000,
            180000,
            90000,
            60000,
            45000,
            30000,
            18000,
            12500,
            10000,
            7500,
            5000,
            4000,
            3000,
            2500,
            2000,
            1500,
            1000
        ],
        "default": 5000
    },
    "fuseFps": {
        "id": "fuse-fps",
        "enum": [
            25,
            20,
            15,
            12.5,
            10,
            7.5,
            5,
            3
        ],
        "default": 7.5
    },
    "easing": {
        "id": "easing",
        "default": true
    },
    "withFullscreen": {
        "id": "with-fullscreen",
        "default": false
    },
    "showFPS": {
        "id": "show-fps",
        "default": false
    }
});
define("script/animation", ["require", "exports", "flounder.style.js/index", "phi-colors", "script/ui", "resource/control", "resource/config"], function (require, exports, flounder_style_js_1, phi_colors_1, ui_1, control_json_1, config_json_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animation = void 0;
    control_json_1 = __importDefault(control_json_1);
    config_json_3 = __importDefault(config_json_3);
    var Animation;
    (function (Animation) {
        var scale = function (min, max) { return function (r) { return min + ((max - min) * r); }; };
        var makeRandomInteger = function (size) { return Math.floor(Math.random() * size); };
        var randomSelect = function (list) { return list[makeRandomInteger(list.length)]; };
        var indexSelect = function (list, ix) { return list[ix % list.length]; };
        var makeRandomSpotArguments = function (type, intervalSize) {
            return ({
                type: type,
                layoutAngle: randomSelect(["regular", "alternative",]),
                foregroundColor: "forestgreen",
                backgroundColor: "blanchedalmond",
                intervalSize: intervalSize,
                depth: 0.0,
                maxPatternSize: randomSelect([undefined, intervalSize / 4,]),
                reverseRate: randomSelect([undefined, 0.0,]),
                maximumFractionDigits: config_json_3.default.maximumFractionDigits,
            });
        };
        var makeRandomTrispotArguments = function (intervalSize) {
            return makeRandomSpotArguments("trispot", intervalSize);
        };
        var makeRandomTetraspotArguments = function (intervalSize) {
            return makeRandomSpotArguments("tetraspot", intervalSize);
        };
        var makeRandomLineArguments = function (type, intervalSize) {
            return ({
                type: type,
                layoutAngle: Math.random(),
                foregroundColor: "forestgreen",
                backgroundColor: "blanchedalmond",
                intervalSize: intervalSize,
                depth: 0.0,
                maxPatternSize: randomSelect([undefined, intervalSize / (2 + makeRandomInteger(9)),]),
                reverseRate: randomSelect([undefined, 0.0,]),
                anglePerDepth: randomSelect([undefined, "auto", "-auto", 1, 0, -1.0,]),
                maximumFractionDigits: config_json_3.default.maximumFractionDigits,
            });
        };
        var makeRandomStripeArguments = function (intervalSize) {
            return makeRandomLineArguments("stripe", intervalSize);
        };
        var makeRandomDilineArguments = function (intervalSize) {
            return makeRandomLineArguments("diline", intervalSize);
        };
        var makeRandomTrilineArguments = function (intervalSize) {
            return makeRandomLineArguments("triline", intervalSize);
        };
        var PhiColoring = /** @class */ (function () {
            function PhiColoring(hue, saturation, lightness, hueUnit) {
                if (hue === void 0) { hue = Math.random(); }
                if (saturation === void 0) { saturation = config_json_3.default.colors.phiColors.saturation; }
                if (lightness === void 0) { lightness = config_json_3.default.colors.phiColors.lightness; }
                if (hueUnit === void 0) { hueUnit = 1 / phi_colors_1.phiColors.phi; }
                var _this = this;
                this.hue = hue;
                this.hueUnit = hueUnit;
                this.makeColor = function (step) {
                    return phi_colors_1.phiColors.rgbForStyle(phi_colors_1.phiColors.clipRgb(phi_colors_1.phiColors.hslToRgb({
                        h: PhiColoring.regulateH((_this.hue + (_this.hueUnit * step)) % 1),
                        s: _this.s,
                        l: _this.l,
                    })));
                };
                //this.h = rate(phiColors.HslHMin, phiColors.HslHMax)((hue);
                this.s = PhiColoring.regulateL(saturation);
                this.l = PhiColoring.regulateL(lightness);
            }
            PhiColoring.regulateH = function (h) { return scale(phi_colors_1.phiColors.HslHMin, phi_colors_1.phiColors.HslHMax)(h); };
            PhiColoring.regulateS = function (s) { return scale(phi_colors_1.phiColors.HslSMin, phi_colors_1.phiColors.HslSMax)(s); };
            PhiColoring.regulateL = function (l) { return scale(phi_colors_1.phiColors.HslLMin, phi_colors_1.phiColors.HslLMax)(l); };
            return PhiColoring;
        }());
        Animation.PhiColoring = PhiColoring;
        var Animator = /** @class */ (function () {
            function Animator(canvas, phiColoring) {
                if (phiColoring === void 0) { phiColoring = new PhiColoring(); }
                var _this = this;
                this.canvas = canvas;
                this.phiColoring = phiColoring;
                this.layers = [];
                this.pattern = control_json_1.default.pattern.default;
                this.startAt = 0;
                this.offsetAt = 0;
                this.cycleSpan = control_json_1.default.cycleSpan.default;
                this.diagonalSize = 0;
                this.getDiagonalSize = function () { var _a, _b; return Math.sqrt(Math.pow((_a = _this.canvas.clientWidth) !== null && _a !== void 0 ? _a : 0, 2) + Math.pow((_b = _this.canvas.clientHeight) !== null && _b !== void 0 ? _b : 0, 2)); };
                this.easing = function (t) { return t; };
                this.argumentHistory = [];
                this.startStep = function (now) {
                    return _this.startAt = now - _this.offsetAt;
                };
                this.getPatterns = function () {
                    switch (_this.pattern) {
                        case "lines":
                            return [
                                makeRandomStripeArguments,
                                makeRandomDilineArguments,
                                makeRandomTrilineArguments,
                            ];
                        case "spots":
                            return [
                                makeRandomTrispotArguments,
                                makeRandomTetraspotArguments,
                            ];
                        case "multi":
                        default:
                            return [
                                makeRandomStripeArguments,
                                makeRandomDilineArguments,
                                makeRandomTrilineArguments,
                                makeRandomTrispotArguments,
                                makeRandomTetraspotArguments,
                            ];
                    }
                };
                this.makeRandomArguments = function () {
                    var result = randomSelect(_this.getPatterns())(scale(_this.diagonalSize * config_json_3.default.intervalSize.minRate, _this.diagonalSize * config_json_3.default.intervalSize.maxRate)(Math.random()));
                    _this.argumentHistory.push(result);
                    if (3 <= _this.argumentHistory.length) {
                        _this.argumentHistory.shift();
                    }
                    return result;
                };
                this.getNextColorMaker = function (coloring) {
                    switch (coloring) {
                        case "monochrome":
                            return function (mile, _offset, _ix) {
                                return indexSelect(config_json_3.default.colors.monochrome, mile + 1.0);
                            };
                        case "primary-colors":
                            return function (mile, _offset, ix) {
                                return indexSelect(config_json_3.default.colors.primaryColors, ix + mile + 1.0);
                            };
                        case "phi-colors":
                        default:
                            return function (mile, offset, _ix) {
                                return _this.phiColoring.makeColor(mile + offset + 1.0);
                            };
                    }
                };
                this.getForegroundColor = this.getNextColorMaker("phi-colors");
                this.getBackgroundColor = function (mile, offset, ix) {
                    if (0 < mile) {
                        return _this.getForegroundColor(mile - 1, offset, ix);
                    }
                    else if (0 === ix) {
                        return _this.phiColoring.makeColor(0.0);
                    }
                    else {
                        return "black";
                    }
                };
                this.getStep = function (universalStep, layer) { return universalStep - (layer.mile + layer.offset); };
                this.step = function (now) {
                    _this.offsetAt = now - _this.startAt;
                    var universalStep = _this.offsetAt / _this.cycleSpan;
                    _this.layers.forEach(function (i, ix) {
                        var _a, _b;
                        var step = _this.getStep(universalStep, i);
                        if (0 <= step) {
                            if (1.0 <= step || undefined === i.arguments) {
                                while (1.0 <= step) {
                                    ++i.mile;
                                    step = _this.getStep(universalStep, i);
                                }
                                i.arguments = Object.assign({}, (_b = (_a = _this.layers[ix - 1]) === null || _a === void 0 ? void 0 : _a.arguments) !== null && _b !== void 0 ? _b : _this.makeRandomArguments(), {
                                    foregroundColor: _this.getForegroundColor(i.mile, i.offset, ix),
                                    backgroundColor: _this.getBackgroundColor(i.mile, i.offset, ix),
                                });
                            }
                            i.arguments.depth = _this.easing(step);
                            flounder_style_js_1.FlounderStyle.setStyle(i.layer, i.arguments);
                        }
                    });
                };
                this.update = function () {
                    return _this.step(_this.startAt + _this.offsetAt);
                };
                this.updatePattern = function (newPattern) {
                    return _this.pattern = newPattern;
                };
                this.updateColoring = function (coloring) {
                    return _this.getForegroundColor = _this.getNextColorMaker(coloring);
                };
                this.updateDiagonalSize = function () {
                    var newDiagonalSize = _this.getDiagonalSize();
                    var fixRate = newDiagonalSize / _this.diagonalSize;
                    _this.diagonalSize = newDiagonalSize;
                    _this.layers.forEach(function (i) {
                        var _a;
                        if (undefined !== ((_a = i.arguments) === null || _a === void 0 ? void 0 : _a.intervalSize)) {
                            i.arguments.intervalSize *= fixRate;
                            if (undefined !== i.arguments.maxPatternSize) {
                                i.arguments.maxPatternSize *= fixRate;
                            }
                        }
                    });
                    _this.argumentHistory.forEach(function (i) {
                        if (undefined !== i.intervalSize) {
                            i.intervalSize *= fixRate;
                            if (undefined !== i.maxPatternSize) {
                                i.maxPatternSize *= fixRate;
                            }
                        }
                    });
                };
                this.updateCycleSpan = function (newCycleSpan) {
                    var fixRate = newCycleSpan / _this.cycleSpan;
                    var now = performance.now();
                    _this.offsetAt = _this.offsetAt * fixRate;
                    _this.startStep(now);
                    _this.cycleSpan = newCycleSpan;
                };
                this.updateLayers = function (newLayers) {
                    var _a, _b, _c;
                    var oldLayerList = ui_1.UI.getElementsByClassName("div", "layer");
                    if (oldLayerList.length < newLayers) {
                        for (var i = oldLayerList.length; i < newLayers; ++i) {
                            _this.canvas.appendChild(ui_1.UI.createElement({ tag: "div", attributes: { class: "layer", }, }));
                        }
                    }
                    else {
                        for (var i = newLayers; i < oldLayerList.length; ++i) {
                            _this.canvas.removeChild(oldLayerList[i]);
                        }
                    }
                    var layerList = ui_1.UI.getElementsByClassName("div", "layer");
                    var newArguments = (_a = _this.layers[0]) === null || _a === void 0 ? void 0 : _a.arguments;
                    var oldArguments = _this.argumentHistory[_this.argumentHistory.length - 2];
                    var newMile = (_c = (_b = _this.layers[0]) === null || _b === void 0 ? void 0 : _b.mile) !== null && _c !== void 0 ? _c : 0;
                    var oldMile = Math.max(newMile - 1, 0);
                    var restoreArgument = function (i, ix) {
                        if (undefined !== i) {
                            var result = Object.assign({}, i);
                            var offset = ix / layerList.length;
                            result.foregroundColor = _this.getForegroundColor(oldMile, offset, ix);
                            result.backgroundColor = _this.getBackgroundColor(oldMile, offset, ix);
                            return result;
                        }
                        return undefined;
                    };
                    _this.layers = layerList.map(function (layer, ix) {
                        return ({
                            layer: layer,
                            mile: 0 === ix ? newMile : oldMile,
                            offset: ix / layerList.length,
                            arguments: 0 === ix ? newArguments : restoreArgument(oldArguments, ix),
                        });
                    });
                };
                this.updateEasing = function (enabled) {
                    _this.easing = enabled ?
                        function (t) { return t <= 0.5 ?
                            2 * Math.pow(t, 2) :
                            1 - (2 * Math.pow(1 - t, 2)); } :
                        function (t) { return t; };
                };
            }
            ;
            return Animator;
        }());
        Animation.Animator = Animator;
    })(Animation || (exports.Animation = Animation = {}));
});
define("resource/shortcuts", [], [
    {
        "description": "Hide UI",
        "keys": [
            "U", "I"
        ],
        "onKeyDown": "toggleHideUI",
        "onKeyUp": "nop"
    },
    {
        "description": "Play / Pause",
        "keys": [
            " "
        ],
        "onKeyDown": "playOrPause"
    },
    {
        "description": "Switch Pattern (Forward)",
        "keys": [
            "P"
        ],
        "onKeyDown": "switchPatternForward"
    },
    {
        "description": "Switch Pattern (Backward)",
        "keys": [
            "Shift",
            "P"
        ],
        "onKeyDown": "switchPatternBackward"
    },
    {
        "description": "Switch Coloring (Forward)",
        "keys": [
            "C"
        ],
        "onKeyDown": "switchColoringForward"
    },
    {
        "description": "Switch Coloring (Backward)",
        "keys": [
            "Shift",
            "C"
        ],
        "onKeyDown": "switchColoringBackward"
    },
    {
        "description": "Increase Canvas Size",
        "keys": [
            "Shift",
            "ArrowUp"
        ],
        "onKeyDown": "increaseCanvasSize"
    },
    {
        "description": "Decrease Canvas Size",
        "keys": [
            "Shift",
            "ArrowDown"
        ],
        "onKeyDown": "decreaseCanvasSize"
    },
    {
        "description": "Increase Layer",
        "keys": [
            "ArrowUp"
        ],
        "onKeyDown": "increaseLayer"
    },
    {
        "description": "Decrease Layer",
        "keys": [
            "ArrowDown"
        ],
        "onKeyDown": "decreaseLayer"
    },
    {
        "description": "Speed Down",
        "keys": [
            "ArrowLeft"
        ],
        "onKeyDown": "speedDown"
    },
    {
        "description": "Speed Up",
        "keys": [
            "ArrowRight"
        ],
        "onKeyDown": "speedUp"
    },
    {
        "description": "FullScreen",
        "keys": [
            "F"
        ],
        "onKeyDown": "toggleFullScreen"
    },
    {
        "description": "Show FPS",
        "keys": [
            "S"
        ],
        "onKeyDown": "toggleShowFPS"
    }
]);
define("script/shortcuts", ["require", "exports", "resource/shortcuts"], function (require, exports, shortcuts_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Shortcuts = void 0;
    shortcuts_json_1 = __importDefault(shortcuts_json_1);
    var Shortcuts;
    (function (Shortcuts) {
        var keyDisplayNames = {
            "ArrowUp": "↑",
            "ArrowDown": "↓",
            "ArrowLeft": "←",
            "ArrowRight": "→",
            " ": "Space",
            "Control": "Ctrl",
        };
        var getDisplayKeyName = function (key) { return keyDisplayNames[key] || key; };
        Shortcuts.getDisplayList = function () {
            return shortcuts_json_1.default.map(function (i) {
                return ({
                    keys: i.keys.map(function (key) { return getDisplayKeyName(key); }),
                    description: i.description,
                });
            });
        };
        var isInputElementFocused = function () { var _a, _b, _c; return ["input", "textarea", "button"].includes((_c = (_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : ""); };
        var normalizeKey = function (key, code) {
            return code === "Space" ? " " :
                key.length === 1 ? key.toUpperCase() :
                    key;
        };
        // const joinable = <T>(value: T, condition?: boolean) =>
        //     undefined !== value && null !== value && (condition ?? true) ? [ value, ]: [];
        var pressedKeys = [];
        Shortcuts.handleKeyEvent = function (type, event, commandMap) {
            var normalizedKey = normalizeKey(event.key, event.code);
            var shortcutkeys = pressedKeys.concat([]);
            switch (type) {
                case "onKeyDown":
                    pressedKeys.push(normalizedKey);
                    shortcutkeys = pressedKeys;
                    break;
                case "onKeyUp":
                    while (0 < pressedKeys.splice(pressedKeys.indexOf(normalizedKey), 1).length)
                        ;
                    break;
            }
            if (!isInputElementFocused()) {
                var commandKeys = shortcuts_json_1.default.filter(function (shortcut) {
                    return shortcut.keys.length === shortcutkeys.length &&
                        shortcut.keys.every(function (key) { return shortcutkeys.includes(key); }) &&
                        shortcut[type];
                })
                    .map(function (i) { return i[type]; });
                if (0 < commandKeys.length) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                commandKeys.forEach(function (i) {
                    console.log("👆 KeyboardShortcut:", i, type, pressedKeys);
                    var command = commandMap[i];
                    if (command) {
                        command();
                    }
                    else {
                        console.error("🦋 FIXME: Shortcuts.handleKeyEvent.NotFountCommand", i);
                    }
                });
                if ("onKeyDown" === type && commandKeys.length <= 0 && !["Shift", "Control"].includes(normalizedKey)) {
                    console.log("💡 UnknownKeyDown:", pressedKeys);
                }
            }
        };
        Shortcuts.setCommandMap = function (commandMap) {
            window.addEventListener("keydown", function (event) { return Shortcuts.handleKeyEvent("onKeyDown", event, commandMap); });
            window.addEventListener("keyup", function (event) { return Shortcuts.handleKeyEvent("onKeyUp", event, commandMap); });
        };
    })(Shortcuts || (exports.Shortcuts = Shortcuts = {}));
});
define("resource/powered-by", [], {
    "build.js": "https://github.com/wraith13/build.js",
    "evil-commonjs": "https://github.com/wraith13/evil-commonjs",
    "evil-timer.js": "https://github.com/wraith13/evil-timer.js",
    "flounder.style.js": "https://github.com/wraith13/flounder.style.js",
    "phi-colors": "https://github.com/wraith13/phi-colors"
});
define("script/index", ["require", "exports", "script/control", "script/ui", "script/fps", "script/locale", "script/animation", "script/shortcuts", "resource/control", "resource/config", "resource/powered-by"], function (require, exports, control_1, ui_2, fps_1, locale_1, animation_1, shortcuts_1, control_json_2, config_json_4, powered_by_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    control_json_2 = __importDefault(control_json_2);
    config_json_4 = __importDefault(config_json_4);
    powered_by_json_1 = __importDefault(powered_by_json_1);
    var numberToString = function (value, maximumFractionDigits) {
        return value.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: maximumFractionDigits, });
    };
    var timespanToString = function (value, maximumFractionDigits) {
        return value < 1000 ? "".concat(numberToString(value, maximumFractionDigits), " ").concat(locale_1.Locale.map("timeUnitMs")) :
            value < 60 * 1000 ? "".concat(numberToString(value / 1000, maximumFractionDigits), " ").concat(locale_1.Locale.map("timeUnitS")) :
                value < 60 * 60 * 1000 ? "".concat(numberToString(value / (60 * 1000), maximumFractionDigits), " ").concat(locale_1.Locale.map("timeUnitM")) :
                    value < 24 * 60 * 60 * 1000 ? "".concat(numberToString(value / (60 * 60 * 1000), maximumFractionDigits), " ").concat(locale_1.Locale.map("timeUnitH")) :
                        "".concat(numberToString(value / (24 * 60 * 60 * 1000), maximumFractionDigits), " ").concat(locale_1.Locale.map("timeUnitD"));
    };
    var screenBody = ui_2.UI.getElementById("div", "screen-body");
    var canvas = ui_2.UI.getElementById("div", "canvas");
    var animator = new animation_1.Animation.Animator(canvas);
    var topCoat = ui_2.UI.getElementById("div", "top-coat");
    var isInAnimation = function () { return document.body.classList.contains("immersive"); };
    var playAnimation = function () {
        document.body.classList.toggle("immersive", true);
        document.body.classList.toggle("mousemove", false);
        updateFullscreenState();
        fpsElement.innerText = "";
        start();
    };
    var pauseAnimation = function () {
        document.body.classList.toggle("immersive", false);
        //fpsElement.innerText = "";
        updateFullscreenState(false);
    };
    var update = function () {
        if (!isInAnimation()) {
            animator.update();
        }
    };
    var playOrPauseAnimation = function () {
        return isInAnimation() ? pauseAnimation() : playAnimation();
    };
    var updateDiagonalSize = function () {
        animator.updateDiagonalSize();
        update();
    };
    var updatePattern = function () {
        return animator.updatePattern(patternSelect.get());
    };
    var updateColoring = function () {
        animator.updateColoring(coloringSelect.get());
    };
    var updateLayers = function () {
        animator.updateLayers(parseInt(layersSelect.get()));
        update();
    };
    var updateCanvasSize = function () {
        var newCanvasSize = parseFloat(canvasSizeSelect.get());
        var newCanvasSizeRate = Math.sqrt(newCanvasSize / 100.0);
        var canvasMergin = (1 - newCanvasSizeRate) * 100 / 2;
        ["top", "right", "bottom", "left",].forEach(function (i) { return canvas.style.setProperty(i, "".concat(canvasMergin, "%")); });
        updateDiagonalSize();
    };
    var updateCycleSpan = function () {
        return animator.updateCycleSpan(parseInt(cycleSpanSelect.get()));
    };
    var updateFuseFps = function () {
        return fps_1.Fps.fuseFps = parseFloat(fuseFpsSelect.get());
    };
    var updateEasing = function () {
        animator.updateEasing(easingCheckbox.get());
        update();
    };
    //const playButton =
    new control_1.Control.Button({
        id: "play-button",
        click: function (event, button) {
            event.stopPropagation();
            button.dom.blur();
            playOrPauseAnimation();
        }
    });
    var patternSelect = new control_1.Control.Select(control_json_2.default.pattern, { change: function () { return updatePattern(); }, });
    var coloringSelect = new control_1.Control.Select(control_json_2.default.coloring, { change: function () { return updateColoring(); }, });
    var canvasSizeSelect = new control_1.Control.Select(control_json_2.default.canvasSize, { makeLabel: function (i) { return "".concat(i, " %"); }, change: function () { return updateCanvasSize(); }, });
    var layersSelect = new control_1.Control.Select(control_json_2.default.layers, { change: function () { return updateLayers(); }, });
    var cycleSpanSelect = new control_1.Control.Select(control_json_2.default.cycleSpan, { makeLabel: timespanToString, change: function () { return updateCycleSpan(); }, });
    var fuseFpsSelect = new control_1.Control.Select(control_json_2.default.fuseFps, { change: function () { return updateFuseFps(); }, });
    var easingCheckbox = new control_1.Control.Checkbox(control_json_2.default.easing);
    var withFullscreen = new control_1.Control.Checkbox(control_json_2.default.withFullscreen);
    if (!ui_2.UI.fullscreenEnabled && withFullscreen.dom.parentElement) {
        withFullscreen.dom.parentElement.style.setProperty("display", "none");
    }
    var showFPS = new control_1.Control.Checkbox(control_json_2.default.showFPS);
    var fpsElement = ui_2.UI.getElementById("div", "fps");
    ui_2.UI.replaceChildren(ui_2.UI.getElementById("div", "keyboard-shortcut"), shortcuts_1.Shortcuts.getDisplayList().map(function (i) {
        return [
            { tag: "span", children: i.keys.map(function (key) { return ui_2.UI.createElement({ tag: "kbd", text: key }); }) },
            { tag: "span", text: locale_1.Locale.map(i.description), },
        ];
    })
        .reduce(function (a, b) { return a.concat(b); }, []));
    ui_2.UI.replaceChildren(ui_2.UI.querySelector("ul", "#powered-by ul"), Object.entries(powered_by_json_1.default).map(function (_a) {
        var text = _a[0], href = _a[1];
        return ({ tag: "li", children: [ui_2.UI.createElement({ tag: "a", text: text, attributes: { href: href, } }),], });
    }));
    ui_2.UI.getElementsByClassName("div", "layer")[0].style.setProperty("background-color", animator.phiColoring.makeColor(0.0));
    ui_2.UI.replaceChildren(ui_2.UI.getElementById("ul", "information-list"), config_json_4.default.informations.map(function (i) { return ({ tag: "li", text: locale_1.Locale.map(i), }); }));
    var updateFullscreenState = function (fullscreen) {
        if (ui_2.UI.fullscreenEnabled) {
            if (fullscreen !== null && fullscreen !== void 0 ? fullscreen : withFullscreen.get()) {
                ui_2.UI.requestFullscreen(document.body);
            }
            else {
                ui_2.UI.exitFullscreen();
            }
        }
    };
    var animation = function (now) {
        if (isInAnimation()) {
            fps_1.Fps.step(now);
            if (showFPS.get()) {
                fpsElement.innerText = fps_1.Fps.getText();
            }
            if (fps_1.Fps.isUnderFuseFps()) {
                pauseAnimation();
            }
            else {
                animator.step(now);
                window.requestAnimationFrame(animation);
            }
        }
    };
    var start = function () { return setTimeout(function () { return window.requestAnimationFrame(function (now) {
        fps_1.Fps.reset();
        animator.startStep(now);
        animation(now);
    }); }, config_json_4.default.startWait); };
    topCoat.addEventListener("click", function (event) {
        event.stopPropagation();
        if (event.target === event.currentTarget) {
            console.log("👆 topCoat.Click:", event, topCoat);
            pauseAnimation();
        }
    });
    var mousemoveTimer = new ui_2.UI.ToggleClassForWhileTimer();
    screenBody.addEventListener("mousemove", function (_event) {
        if (config_json_4.default.log.mousemove && !mousemoveTimer.isOn()) {
            console.log("🖱️ MouseMove:", event, screenBody);
        }
        mousemoveTimer.start(document.body, "mousemove", 1000);
    });
    updatePattern();
    updateColoring();
    updateCanvasSize();
    updateEasing();
    updateLayers();
    updateCycleSpan();
    updateFuseFps();
    ui_2.UI.querySelectorAllWithFallback("label", ["label[for]:has(select)", "label[for]"])
        .forEach(function (label) { return ui_2.UI.showPickerOnLabel(label); });
    ui_2.UI.querySelectorAllWithFallback("span", ["[data-lang-key]"])
        .forEach(function (i) { return i.innerText = locale_1.Locale.map(i.getAttribute("data-lang-key")); });
    shortcuts_1.Shortcuts.setCommandMap({
        "nop": function () { },
        "toggleHideUI": function () { return document.body.classList.toggle("hide-ui"); },
        "playOrPause": function () { return playOrPauseAnimation(); },
        "switchPatternForward": function () { return patternSelect.switch(true); },
        "switchPatternBackward": function () { return patternSelect.switch(false); },
        "switchColoringForward": function () { return coloringSelect.switch(true); },
        "switchColoringBackward": function () { return coloringSelect.switch(false); },
        "increaseCanvasSize": function () { return canvasSizeSelect.switch(true); },
        "decreaseCanvasSize": function () { return canvasSizeSelect.switch(false); },
        "increaseLayer": function () { return layersSelect.switch(true); },
        "decreaseLayer": function () { return layersSelect.switch(false); },
        "speedDown": function () { return cycleSpanSelect.switch(true); },
        "speedUp": function () { return cycleSpanSelect.switch(false); },
        "toggleFullScreen": function () {
            withFullscreen.toggle();
            if (isInAnimation()) {
                updateFullscreenState();
            }
        },
        "toggleShowFPS": function () {
            showFPS.toggle();
            fpsElement.innerText = "";
        }
    });
    window.addEventListener("resize", function () { return updateDiagonalSize(); });
    console.log("\uD83D\uDCE6 BUILD AT: ".concat(build.at, " ( ").concat(timespanToString(new Date().getTime() - build.tick, 1), " ").concat(locale_1.Locale.map("ago"), " )"));
});
//# sourceMappingURL=index.js.map