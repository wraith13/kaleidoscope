var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("script/library/type-guards", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeGuards = void 0;
    var TypeGuards;
    (function (TypeGuards) {
        TypeGuards.hasValue = function (value) {
            return value !== null && value !== undefined;
        };
        TypeGuards.has = function (keyOrKeys) {
            return function (object) {
                if (Array.isArray(keyOrKeys)) {
                    return keyOrKeys.every(function (key) { return (object === null || object === void 0 ? void 0 : object[key]) !== undefined; });
                }
                else {
                    return (object === null || object === void 0 ? void 0 : object[keyOrKeys]) !== undefined;
                }
            };
        };
    })(TypeGuards || (exports.TypeGuards = TypeGuards = {}));
});
define("resource/lang.en", [], {
    "lang-label": "English",
    "Auto": "Auto",
    "description": "Kaleidoscope Web Screen Saver",
    "colorspace-label": "Color Space:",
    "coloring-label": "Coloring:",
    "pattern-label": "Pattern:",
    "canvas-size-label": "Canvas Size:",
    "layers-label": "Layers:",
    "spots-layers-label": "Layers(spots):",
    "cycle-span-label": "Cycle Span:",
    "fuse-fps-label": "Fuse FPS:",
    "easing-label": "Easing:",
    "with-fullscreen-label": "FullScreen:",
    "show-fps-label": "Show FPS:",
    "language-label": "Language:",
    "run-benchmark-label": "Run Benchmark",
    "informationFuseFps": "⚠️ Automatically stops if FPS(Max) drops below \"Fuse FPS\" to avoid crashing the web browser or OS.",
    "timeUnitMs": "ms",
    "timeUnitS": "s",
    "timeUnitM": "m",
    "timeUnitH": "h",
    "timeUnitD": "d",
    "ago": "ago",
    "Hide UI": "Hide UI",
    "Play / Pause": "Play / Pause",
    "Switch Pattern": "Switch Pattern",
    "Switch Coloring": "Switch Coloring",
    "Scaling Canvas Size": "Scaling Canvas Size",
    "Increase / Decrease Layer": "Increase / Decrease Layer",
    "Speed Down / Up": "Speed Down / Up",
    "FullScreen": "FullScreen",
    "Show FPS": "Show FPS",
    "benchmark-abort": "Abort",
    "benchmark-close": "Close",
    "DELETEME.benchmarking-in-progress": "Benchmarking in progress",
    "DELETEME.benchmark-phase-preparation": "Preparation",
    "DELETEME.benchmark-phase-screen-resolution": "Screen Resolution",
    "DELETEME.benchmark-phase-fps": "FPS",
    "DELETEME.benchmark-phase-calculation-score": "Calculation Score",
    "DELETEME.benchmark-phase-rendering-score": "Rendering Score",
    "DELETEME.benchmark-phase-finished": "Finished",
    "benchmark-report-label": "Kaleidoscope Benchmark Report",
    "benchmark-total-score": "Total Score",
    "benchmark-score-per-fullhd": "Rendering Score",
    "benchmark-calculation-score": "Calculation Score",
    "benchmark-lines-calculation-score": "Calculation Score (lines)",
    "benchmark-spots-calculation-score": "Calculation Score (spots)",
    "benchmark-lines-rendering-score": "Rendering Score (lines)",
    "benchmark-spots-rendering-score": "Rendering Score (spots)",
    "benchmark-display-score": "Display Score",
    "benchmark-fps-score": "FPS",
    "benchmark-screen-resolution-score": "Screen Resolution Score",
    "benchmark-screen-width": "Screen Width",
    "benchmark-screen-height": "Screen Height",
    "benchmark-device-pixel-ratio": "Device Pixel Ratio",
    "benchmark-screen-color-depth": "Screen Color Depth",
    "benchmark-description-calculation-score": "Calculation score is the performance of animation processing in a hidden state.",
    "benchmark-description-rendering-score": "Rendering score is the performance of animation processing in a visible state.",
    "Unmeasured": "Unmeasured",
    "UnmeasurablePoor": "Unmeasurable (Insufficient Performance)",
    "UnmeasurableRich": "Unmeasurable (Excessive Performance)"
});
define("resource/lang.ja", [], {
    "lang-label": "日本語",
    "Auto": "自動",
    "description": "万華鏡 Web スクリーンセーバー",
    "colorspace-label": "色空間:",
    "coloring-label": "カラーリング:",
    "pattern-label": "パターン:",
    "canvas-size-label": "キャンバスサイズ:",
    "layers-label": "レイヤー数:",
    "spots-layers-label": "レイヤー数(spots):",
    "cycle-span-label": "サイクルスパン:",
    "fuse-fps-label": "フューズ FPS:",
    "easing-label": "イージング:",
    "with-fullscreen-label": "フルスクリーン:",
    "show-fps-label": "FPS を表示:",
    "language-label": "言語:",
    "run-benchmark-label": "ベンチマーク実行",
    "informationFuseFps": "⚠️ Web ブラウザや OS がクラッシュする事を避ける為に FPS(Max) が \"フューズ FPS\" を下回ると自動停止します。",
    "timeUnitMs": "ミリ秒",
    "timeUnitS": "秒",
    "timeUnitM": "分",
    "timeUnitH": "時間",
    "timeUnitD": "日",
    "ago": "前",
    "Hide UI": "UI 非表示",
    "Play / Pause": "再生 / 一時停止",
    "Switch Pattern": "パターン切り替え",
    "Switch Coloring": "カラーリング切り替え",
    "Scaling Canvas Size": "キャンバスサイズ拡大縮小",
    "Increase / Decrease Layer": "レイヤー増減",
    "Speed Down / Up": "スピード ダウン/アップ",
    "FullScreen": "フルスクリーン",
    "Show FPS": "FPS 表示",
    "benchmark-abort": "中断",
    "benchmark-close": "閉じる",
    "DELETEME.benchmarking-in-progress": "ベンチマーク計測中",
    "DELETEME.benchmark-phase-preparation": "準備",
    "DELETEME.benchmark-phase-screen-resolution": "画面解像度",
    "DELETEME.benchmark-phase-fps": "FPS",
    "DELETEME.benchmark-phase-calculation-score": "計算スコア",
    "DELETEME.benchmark-phase-rendering-score": "描画スコア",
    "DELETEME.benchmark-phase-finished": "完了",
    "benchmark-report-label": "Kaleidoscope ベンチマークレポート",
    "benchmark-total-score": "総合スコア",
    "benchmark-score-per-fullhd": "描画スコア",
    "benchmark-calculation-score": "計算スコア",
    "benchmark-lines-calculation-score": "計算スコア(lines)",
    "benchmark-spots-calculation-score": "計算スコア(spots)",
    "benchmark-lines-rendering-score": "描画スコア(lines)",
    "benchmark-spots-rendering-score": "描画スコア(spots)",
    "benchmark-display-score": "ディスプレイスコア",
    "benchmark-fps-score": "FPS",
    "benchmark-screen-resolution-score": "画面解像度スコア",
    "benchmark-screen-width": "画面横幅",
    "benchmark-screen-height": "画面高さ",
    "benchmark-device-pixel-ratio": "デバイスピクセル比",
    "benchmark-screen-color-depth": "画面色深度",
    "benchmark-description-calculation-score": "計算性能は、非表示状態でのアニメーション処理性能です。",
    "benchmark-description-rendering-score": "描画性能は、表示状態でのアニメーション処理性能です。",
    "Unmeasured": "未計測",
    "UnmeasurablePoor": "計測不能(性能不足)",
    "UnmeasurableRich": "計測不能(性能過剰)"
});
define("script/library/locale", ["require", "exports", "resource/lang.en", "resource/lang.ja"], function (require, exports, lang_en_json_1, lang_ja_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locale = void 0;
    lang_en_json_1 = __importDefault(lang_en_json_1);
    lang_ja_json_1 = __importDefault(lang_ja_json_1);
    var Locale;
    (function (Locale) {
        Locale.master = {
            en: lang_en_json_1.default,
            ja: lang_ja_json_1.default,
        };
        var supportedLangs = ["ja", "en"];
        var systemLang = navigator.language.split("-")[0];
        var defaultLang = supportedLangs.includes(systemLang) ? systemLang : "en";
        var lang = defaultLang;
        Locale.getLocale = function () { return lang; };
        Locale.setLocale = function (locale) {
            switch (locale) {
                case undefined:
                case "Auto":
                    lang = defaultLang;
                    break;
                default:
                    lang = locale;
                    break;
            }
        };
        Locale.map = function (key, l) { return Locale.master[l !== null && l !== void 0 ? l : lang][key]; };
    })(Locale || (exports.Locale = Locale = {}));
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
            "#000000",
            "#FFFFFF"
        ],
        "primaryColors": [
            "#FF0000",
            "#00FF00",
            "#0000FF"
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
    "benchmarkDescription": [
        "benchmark-description-calculation-score",
        "benchmark-description-rendering-score"
    ],
    "maximumFractionDigits": 2,
    "startWait": 750,
    "benchmark": {
        "startWait": 1500,
        "stableWait": 1000,
        "adjustLayersWait": 300,
        "nextPatternWait": 1000,
        "screenResolutionWait": 500,
        "refreshRateWait": 1500,
        "endWait": 750,
        "pixelUnit": 2073600,
        "colorDepthUnit": 24,
        "fpsUnit": 60
    }
});
define("script/library/ui", ["require", "exports", "resource/config", "script/library/type-guards"], function (require, exports, config_json_1, type_guards_1) {
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
            var className = options.className, text = options.text, _a = options.attributes, attributes = _a === void 0 ? {} : _a, _b = options.children, children = _b === void 0 ? [] : _b, _c = options.styles, styles = _c === void 0 ? {} : _c, _d = options.events, events = _d === void 0 ? {} : _d;
            if ("string" === typeof className) {
                element.className = className;
            }
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
            children.forEach(function (child) { return UI.appendChild(element, child); });
            return element;
        };
        UI.createElement = function (element) {
            return "string" === typeof element ? document.createTextNode(element) :
                element instanceof Node ? element :
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
        UI.cullOrBreed = function (parent, element, size) {
            while (size < parent.children.length) {
                parent.removeChild(parent.lastChild);
            }
            while (parent.children.length < size) {
                UI.appendChild(parent, element);
            }
            return parent;
        };
        UI.getElementsByClassName = function (tag, className, parent) {
            var result = Array.from((parent !== null && parent !== void 0 ? parent : document).getElementsByClassName(className));
            result.forEach(function (i) {
                if (tag !== i.tagName.toLowerCase()) {
                    console.error("🦋 FIXME: UI.getElementsByClassName.InvalidDom", className, tag, i);
                }
            });
            return result;
        };
        UI.querySelectorAllWithFallback = function (tag, selectorss, parent) {
            var lastError;
            for (var i = 0; i < selectorss.length; ++i) {
                try {
                    var result = Array.from((parent !== null && parent !== void 0 ? parent : document).querySelectorAll(selectorss[i]));
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
            if (!type_guards_1.TypeGuards.hasValue(result)) {
                console.error("🦋 FIXME: UI.getElementById.NotExistsDom", id);
            }
            else if (tag !== result.tagName.toLowerCase()) {
                console.error("🦋 FIXME: UI.getElementById.InvalidDom", id, tag, result);
            }
            return result;
        };
        UI.querySelector = function (tag, selectors, parent) {
            var result = (parent !== null && parent !== void 0 ? parent : document).querySelector(selectors);
            if (!type_guards_1.TypeGuards.hasValue(result)) {
                console.error("🦋 FIXME: UI.querySelector.NotExistsDom", selectors);
            }
            else if (tag !== result.tagName.toLowerCase()) {
                console.error("🦋 FIXME: UI.querySelector.InvalidDom", selectors, tag, result);
            }
            return result;
        };
    })(UI || (exports.UI = UI = {}));
});
define("script/library/control", ["require", "exports", "script/library/ui"], function (require, exports, ui_1) {
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
        Control.eventLog = function (control, event, message) {
            if ("id" in control.data) {
                console.log(message, control.data.id, event, control);
            }
            else {
                console.log(message, event, control);
            }
        };
        var Button = /** @class */ (function () {
            function Button(data) {
                var _this = this;
                this.data = data;
                this.setClick = function (click) {
                    return _this.data.click = click;
                };
                this.fire = function () { var _a, _b; return (_b = (_a = _this.data).click) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this); };
                this.dom = Control.getDom(data);
                this.dom.addEventListener("click", function (event) {
                    var _a, _b;
                    Control.eventLog(_this, event, "👆 Button.Click:");
                    (_b = (_a = _this.data).click) === null || _b === void 0 ? void 0 : _b.call(_a, event, _this);
                });
            }
            return Button;
        }());
        Control.Button = Button;
        Control.preventOnChange = "preventOnChange";
        var Select = /** @class */ (function () {
            function Select(data, options) {
                var _this = this;
                this.data = data;
                this.options = options;
                this.setChange = function (change) {
                    return _this.options = __assign(__assign({}, _this.options), { change: change });
                };
                this.reloadOptions = function (value) {
                    var oldValue = value !== null && value !== void 0 ? value : _this.get();
                    ui_1.UI.replaceChildren(_this.dom, _this.data.enum.map(function (i) { var _a, _b, _c; return makeSelectOption("".concat(i), (_c = (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.makeLabel) === null || _b === void 0 ? void 0 : _b.call(_a, i)) !== null && _c !== void 0 ? _c : "".concat(i)); }));
                    _this.switch(oldValue, Control.preventOnChange);
                };
                this.switch = function (valueOrDirection, preventOnChange) {
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
                        _this.fire();
                    }
                };
                this.get = function () { return _this.dom.value; };
                this.fire = function () { var _a, _b; return (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this); };
                this.dom = Control.getDom(data);
                if (!(this.dom instanceof HTMLSelectElement)) {
                    console.error("🦋 FIXME: Contorl.Select.InvalidDom", data, this.dom);
                }
                this.reloadOptions(this.data.default);
                this.dom.addEventListener("change", function (event) {
                    var _a, _b;
                    Control.eventLog(_this, event, "👆 Select.Change:");
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
                this.setChange = function (change) {
                    return _this.options = __assign(__assign({}, _this.options), { change: change });
                };
                this.toggle = function (checked, preventOnChange) {
                    var _a, _b;
                    _this.dom.checked = checked !== null && checked !== void 0 ? checked : !_this.get();
                    if (undefined === preventOnChange) {
                        (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this);
                    }
                };
                this.get = function () { return _this.dom.checked; };
                this.fire = function () { var _a, _b; return (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this); };
                this.dom = Control.getDom(data);
                if (!(this.dom instanceof HTMLInputElement) || "checkbox" !== this.dom.type.toLowerCase()) {
                    console.error("🦋 FIXME: Contorl.Checkbox.InvalidDom", data, this.dom);
                }
                if (undefined !== this.data.default) {
                    this.toggle(this.data.default, [Control.preventOnChange][false !== ((_a = this.options) === null || _a === void 0 ? void 0 : _a.preventOnChangeWhenNew) ? 0 : 1]);
                }
                this.dom.addEventListener("change", function (event) {
                    var _a, _b;
                    Control.eventLog(_this, event, "👆 Checkbox.Change:");
                    (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, event, _this);
                });
            }
            return Checkbox;
        }());
        Control.Checkbox = Checkbox;
    })(Control || (exports.Control = Control = {}));
});
define("resource/shortcuts", [], [
    {
        "description": "Hide UI",
        "shortcuts": [
            {
                "command": "toggleHideUI",
                "type": "onKeyDown",
                "keys": [
                    "U",
                    "I"
                ]
            }
        ]
    },
    {
        "description": "Play / Pause",
        "shortcuts": [
            {
                "command": "toggleAnimation",
                "type": "onKeyUp",
                "keys": [
                    " "
                ]
            }
        ]
    },
    {
        "description": "Switch Pattern",
        "shortcuts": [
            {
                "command": "switchPatternForward",
                "type": "onKeyDown",
                "keys": [
                    "P"
                ]
            },
            {
                "command": "switchPatternBackward",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "P"
                ]
            }
        ]
    },
    {
        "description": "Switch Coloring",
        "shortcuts": [
            {
                "command": "switchColoringForward",
                "type": "onKeyDown",
                "keys": [
                    "C"
                ]
            },
            {
                "command": "switchColoringBackward",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "C"
                ]
            }
        ]
    },
    {
        "description": "Scaling Canvas Size",
        "shortcuts": [
            {
                "command": "increaseCanvasSize",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "ArrowUp"
                ]
            },
            {
                "command": "decreaseCanvasSize",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "ArrowDown"
                ]
            }
        ]
    },
    {
        "description": "Increase / Decrease Layer",
        "shortcuts": [
            {
                "command": "increaseLayer",
                "type": "onKeyDown",
                "keys": [
                    "ArrowUp"
                ]
            },
            {
                "command": "decreaseLayer",
                "type": "onKeyDown",
                "keys": [
                    "ArrowDown"
                ]
            }
        ]
    },
    {
        "description": "Speed Down / Up",
        "shortcuts": [
            {
                "command": "speedDown",
                "type": "onKeyDown",
                "keys": [
                    "ArrowLeft"
                ]
            },
            {
                "command": "speedUp",
                "type": "onKeyDown",
                "keys": [
                    "ArrowRight"
                ]
            }
        ]
    },
    {
        "description": "FullScreen",
        "shortcuts": [
            {
                "command": "toggleFullScreen",
                "type": "onKeyUp",
                "keys": [
                    "F"
                ]
            }
        ]
    },
    {
        "description": "Show FPS",
        "shortcuts": [
            {
                "command": "toggleShowFps",
                "type": "onKeyDown",
                "keys": [
                    "S"
                ]
            }
        ]
    }
]);
define("script/library/shortcuts", ["require", "exports", "resource/shortcuts"], function (require, exports, shortcuts_json_1) {
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
        var getDisplayKeyName = function (key) { var _a; return (_a = keyDisplayNames[key]) !== null && _a !== void 0 ? _a : key; };
        Shortcuts.getDisplayList = function () {
            return shortcuts_json_1.default.map(function (i) {
                return ({
                    keyss: i.shortcuts.map(function (j) { return j.keys.map(function (key) { return getDisplayKeyName(key); }); }),
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
        var pressedKeys = [];
        var getShortcutKeys = function (type, normalizedKey) {
            switch (type) {
                case "onKeyDown":
                    pressedKeys.push(normalizedKey);
                    return pressedKeys;
                case "onKeyUp":
                    var result = __spreadArray([], pressedKeys, true);
                    pressedKeys = pressedKeys.filter(function (i) { return i !== normalizedKey; });
                    return result;
            }
        };
        Shortcuts.handleKeyEvent = function (type, event, commandMap) {
            var _a;
            var normalizedKey = normalizeKey(event.key, event.code);
            var shortcutKeys = getShortcutKeys(type, normalizedKey);
            if (!isInputElementFocused()) {
                var commandKeys = shortcuts_json_1.default.reduce(function (a, b) { return a.concat(b.shortcuts); }, []).filter(function (shortcut) {
                    return shortcut.keys.length === shortcutKeys.length &&
                        shortcut.keys.every(function (key) { return shortcutKeys.includes(key); }) &&
                        type === shortcut.type;
                })
                    .map(function (i) { return i.command; });
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
                    (_a = commandMap["unknownKeyDown"]) === null || _a === void 0 ? void 0 : _a.call(commandMap);
                }
            }
        };
        Shortcuts.setCommandMap = function (commandMap) {
            window.addEventListener("keydown", function (event) { return Shortcuts.handleKeyEvent("onKeyDown", event, commandMap); });
            window.addEventListener("keyup", function (event) { return Shortcuts.handleKeyEvent("onKeyUp", event, commandMap); });
        };
    })(Shortcuts || (exports.Shortcuts = Shortcuts = {}));
});
define("script/library/index", ["require", "exports", "script/library/type-guards", "script/library/locale", "script/library/ui", "script/library/control", "script/library/shortcuts"], function (require, exports, ImportedTypeGuards, ImportedLocale, ImportedUI, ImportedControl, ImportedShortcuts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Library = void 0;
    ImportedTypeGuards = __importStar(ImportedTypeGuards);
    ImportedLocale = __importStar(ImportedLocale);
    ImportedUI = __importStar(ImportedUI);
    ImportedControl = __importStar(ImportedControl);
    ImportedShortcuts = __importStar(ImportedShortcuts);
    var Library;
    (function (Library) {
        Library.TypeGuards = ImportedTypeGuards.TypeGuards;
        Library.Locale = ImportedLocale.Locale;
        Library.UI = ImportedUI.UI;
        Library.Control = ImportedControl.Control;
        Library.Shortcuts = ImportedShortcuts.Shortcuts;
    })(Library || (exports.Library = Library = {}));
});
define("script/tools/number", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Number = void 0;
    var Number;
    (function (Number) {
        Number.toString = function (value, maximumFractionDigits) {
            return value.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: maximumFractionDigits, });
        };
    })(Number || (exports.Number = Number = {}));
});
define("script/tools/timespan", ["require", "exports", "script/library/index", "script/tools/number"], function (require, exports, _library_1, number_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Timespan = void 0;
    var Timespan;
    (function (Timespan) {
        Timespan.toDisplayString = function (value, maximumFractionDigits) {
            return value < 1000 ? "".concat(number_1.Number.toString(value, maximumFractionDigits), " ").concat(_library_1.Library.Locale.map("timeUnitMs")) :
                value < 60 * 1000 ? "".concat(number_1.Number.toString(value / 1000, maximumFractionDigits), " ").concat(_library_1.Library.Locale.map("timeUnitS")) :
                    value < 60 * 60 * 1000 ? "".concat(number_1.Number.toString(value / (60 * 1000), maximumFractionDigits), " ").concat(_library_1.Library.Locale.map("timeUnitM")) :
                        value < 24 * 60 * 60 * 1000 ? "".concat(number_1.Number.toString(value / (60 * 60 * 1000), maximumFractionDigits), " ").concat(_library_1.Library.Locale.map("timeUnitH")) :
                            "".concat(number_1.Number.toString(value / (24 * 60 * 60 * 1000), maximumFractionDigits), " ").concat(_library_1.Library.Locale.map("timeUnitD"));
        };
    })(Timespan || (exports.Timespan = Timespan = {}));
});
define("script/tools/math", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Math = void 0;
    var Math;
    (function (Math) {
        Math.scale = function (min, max) {
            return function (r) { return min + ((max - min) * r); };
        };
        Math.sum = function (numbers) {
            return numbers.reduce(function (a, v) { return a + v; }, 0);
        };
        Math.mod = function (n, m) {
            return m === 0 ? n : ((n % m) + m) % m;
        };
    })(Math || (exports.Math = Math = {}));
});
define("script/tools/hash", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = void 0;
    var Hash;
    (function (Hash) {
        Hash.fnv1a_32 = function (key) {
            var hash = 2166136261;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var char = key_1[_i];
                hash ^= char.charCodeAt(0);
                hash = (hash * 16777619) >>> 0;
            }
            return hash;
        };
    })(Hash || (exports.Hash = Hash = {}));
});
define("script/tools/random", ["require", "exports", "script/tools/hash"], function (require, exports, hash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Random = void 0;
    var Random;
    (function (Random) {
        Random.makeInteger = function (size, random, index, prime) {
            if (random === void 0) { random = Math.random; }
            return Math.floor(random(index, prime) * size);
        };
        Random.select = function (list, random, index, prime) {
            if (random === void 0) { random = Math.random; }
            return list[Random.makeInteger(list.length, random, index, prime)];
        };
        var IndexedRandom = /** @class */ (function () {
            function IndexedRandom(hash32, seed, prime) {
                if (hash32 === void 0) { hash32 = hash_1.Hash.fnv1a_32; }
                if (seed === void 0) { seed = Math.random(); }
                if (prime === void 0) { prime = 31; }
                var _this = this;
                this.hash32 = hash32;
                this.seed = seed;
                this.prime = prime;
                this.index = 0;
                this.get = function (index, prime) {
                    return _this.hash32("".concat(_this.seed, ":").concat((prime !== null && prime !== void 0 ? prime : _this.prime) * (index !== null && index !== void 0 ? index : (_this.index++)))) / 0xFFFFFFFF;
                };
                this.getFunction = function () {
                    return _this.get.bind(_this);
                };
            }
            return IndexedRandom;
        }());
        Random.IndexedRandom = IndexedRandom;
    })(Random || (exports.Random = Random = {}));
});
define("script/tools/array", ["require", "exports", "script/library/type-guards", "script/tools/math"], function (require, exports, type_guards_2, math_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Array = void 0;
    var Array;
    (function (Array) {
        Array.cycleSelect = function (list, ix) {
            return (0 < list.length ?
                list[math_1.Math.mod(ix, list.length)] :
                undefined);
        };
        Array.joinable = function (value, condition) {
            return type_guards_2.TypeGuards.hasValue(value) && (condition !== null && condition !== void 0 ? condition : true) ? [value,] : [];
        };
        Array.uniqueFilter = function (i, ix, list) {
            return ix === list.indexOf(i);
        };
    })(Array || (exports.Array = Array = {}));
});
define("script/tools/index", ["require", "exports", "script/tools/number", "script/tools/timespan", "script/tools/math", "script/tools/random", "script/tools/array", "script/tools/hash"], function (require, exports, ImportedNumber, ImportedTimespan, ImportedMath, ImportedRandom, ImportedArray, ImportedHash) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tools = void 0;
    ImportedNumber = __importStar(ImportedNumber);
    ImportedTimespan = __importStar(ImportedTimespan);
    ImportedMath = __importStar(ImportedMath);
    ImportedRandom = __importStar(ImportedRandom);
    ImportedArray = __importStar(ImportedArray);
    ImportedHash = __importStar(ImportedHash);
    var Tools;
    (function (Tools) {
        Tools.Number = ImportedNumber.Number;
        Tools.Timespan = ImportedTimespan.Timespan;
        Tools.Math = ImportedMath.Math;
        Tools.Random = ImportedRandom.Random;
        Tools.Array = ImportedArray.Array;
        Tools.Hash = ImportedHash.Hash;
    })(Tools || (exports.Tools = Tools = {}));
});
define("resource/control", [], {
    "colorspace": {
        "id": "colorspace",
        "enum": [
            "sRGB",
            "Display P3",
            "Rec. 2020"
        ],
        "default": "sRGB"
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
    "pattern": {
        "id": "pattern",
        "enum": [
            "lines",
            "spots",
            "all"
        ],
        "default": "all"
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
    "spotsLayers": {
        "id": "spotsLayers",
        "enum": [
            100,
            95,
            90,
            85,
            80,
            75,
            70,
            65,
            60,
            55,
            50,
            45,
            40,
            35,
            30,
            25,
            20,
            15,
            10,
            5
        ],
        "default": 30
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
    },
    "language": {
        "id": "language",
        "enum": [
            "Auto",
            "en",
            "ja"
        ],
        "default": "Auto"
    }
});
define("resource/powered-by", [], {
    "build.js": "https://github.com/wraith13/build.js",
    "evil-commonjs": "https://github.com/wraith13/evil-commonjs",
    "evil-timer.js": "https://github.com/wraith13/evil-timer.js",
    "flounder.style.js": "https://github.com/wraith13/flounder.style.js",
    "phi-colors": "https://github.com/wraith13/phi-colors"
});
define("script/ui", ["require", "exports", "script/library/index", "script/tools/index", "resource/config", "resource/control", "resource/powered-by"], function (require, exports, _library_2, _tools_1, config_json_2, control_json_1, powered_by_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UI = void 0;
    config_json_2 = __importDefault(config_json_2);
    control_json_1 = __importDefault(control_json_1);
    powered_by_json_1 = __importDefault(powered_by_json_1);
    var UI;
    (function (UI) {
        UI.screenBody = _library_2.Library.UI.getElementById("div", "screen-body");
        UI.canvas = _library_2.Library.UI.getElementById("div", "canvas");
        UI.playButton = new _library_2.Library.Control.Button({ id: "play-button", });
        UI.runBenchmarkButton = new _library_2.Library.Control.Button({ id: "run-benchmark", });
        UI.colorspaceSelect = new _library_2.Library.Control.Select(control_json_1.default.colorspace);
        UI.coloringSelect = new _library_2.Library.Control.Select(control_json_1.default.coloring);
        UI.patternSelect = new _library_2.Library.Control.Select(control_json_1.default.pattern);
        UI.canvasSizeSelect = new _library_2.Library.Control.Select(control_json_1.default.canvasSize, { makeLabel: function (i) { return "".concat(i, " %"); } });
        UI.layersSelect = new _library_2.Library.Control.Select(control_json_1.default.layers);
        UI.spotslayersSelect = new _library_2.Library.Control.Select(control_json_1.default.spotsLayers, { makeLabel: function (i) { return "".concat(i, " %"); } });
        UI.cycleSpanSelect = new _library_2.Library.Control.Select(control_json_1.default.cycleSpan, { makeLabel: _tools_1.Tools.Timespan.toDisplayString });
        UI.fuseFpsSelect = new _library_2.Library.Control.Select(control_json_1.default.fuseFps);
        UI.easingCheckbox = new _library_2.Library.Control.Checkbox(control_json_1.default.easing);
        UI.withFullscreen = new _library_2.Library.Control.Checkbox(control_json_1.default.withFullscreen);
        UI.showFps = new _library_2.Library.Control.Checkbox(control_json_1.default.showFPS);
        UI.languageSelect = new _library_2.Library.Control.Select(control_json_1.default.language, {
            makeLabel: function (i) { return "Auto" === i ?
                _library_2.Library.Locale.map("Auto") :
                _library_2.Library.Locale.map("lang-label", i); },
            change: function () { return UI.updateLanguage(); },
        });
        UI.fpsDisplay = _library_2.Library.UI.getElementById("div", "fps");
        UI.benchmarkProgressBar = _library_2.Library.UI.getElementById("div", "benchmark-progress-bar");
        UI.benchmarkCanvas = _library_2.Library.UI.getElementById("div", "benchmark-canvas");
        UI.keyboardShortcut = _library_2.Library.UI.getElementById("div", "keyboard-shortcut");
        UI.benchmarkTotalScore = _library_2.Library.UI.getElementById("span", "benchmark-total-score");
        UI.benchmarkScorePerFullHD = _library_2.Library.UI.getElementById("span", "benchmark-score-per-fullhd");
        UI.benchmarkCalculationScore = _library_2.Library.UI.getElementById("span", "benchmark-calculation-score");
        UI.benchmarkLinesCalculationScore = _library_2.Library.UI.getElementById("span", "benchmark-lines-calculation-score");
        UI.benchmarkSpotsCalculationScore = _library_2.Library.UI.getElementById("span", "benchmark-spots-calculation-score");
        UI.benchmarkLinesRenderingScore = _library_2.Library.UI.getElementById("span", "benchmark-lines-rendering-score");
        UI.benchmarkSpotsRenderingScore = _library_2.Library.UI.getElementById("span", "benchmark-spots-rendering-score");
        UI.benchmarkDisplayScore = _library_2.Library.UI.getElementById("span", "benchmark-display-score");
        UI.benchmarkFpsScore = _library_2.Library.UI.getElementById("span", "benchmark-fps-score");
        UI.benchmarkScreenResolutionScore = _library_2.Library.UI.getElementById("span", "benchmark-screen-resolution-score");
        UI.benchmarkScreenWidth = _library_2.Library.UI.getElementById("span", "benchmark-screen-width");
        UI.benchmarkScreenHeight = _library_2.Library.UI.getElementById("span", "benchmark-screen-height");
        UI.benchmarkDevicePixelRatio = _library_2.Library.UI.getElementById("span", "benchmark-device-pixel-ratio");
        UI.benchmarkScreenColorDepth = _library_2.Library.UI.getElementById("span", "benchmark-screen-color-depth");
        UI.benchmarkPopupLabel = _library_2.Library.UI.getElementById("span", "benchmark-popup-label");
        UI.benchmarkPopupValue = _library_2.Library.UI.getElementById("span", "benchmark-popup-value");
        UI.benchmarkAbortButton = new _library_2.Library.Control.Button({ id: "benchmark-abort-button", });
        UI.benchmarkResultCloseButton = new _library_2.Library.Control.Button({ id: "benchmark-result-close-button", });
        UI.updateLanguage = function () {
            _library_2.Library.Locale.setLocale(UI.languageSelect.get());
            UI.colorspaceSelect.reloadOptions();
            UI.coloringSelect.reloadOptions();
            UI.patternSelect.reloadOptions();
            UI.canvasSizeSelect.reloadOptions();
            UI.layersSelect.reloadOptions();
            UI.cycleSpanSelect.reloadOptions();
            UI.fuseFpsSelect.reloadOptions();
            UI.languageSelect.reloadOptions();
            _library_2.Library.UI.querySelectorAllWithFallback("span", ["[data-lang-key]"])
                .forEach(function (i) { return i.innerText = _library_2.Library.Locale.map(i.getAttribute("data-lang-key")); });
            _library_2.Library.UI.replaceChildren(UI.keyboardShortcut, _library_2.Library.Shortcuts.getDisplayList().map(function (i) {
                return [
                    {
                        tag: "span",
                        children: i.keyss
                            .map(function (j) { return j.map(function (key) { return ({ tag: "kbd", text: key }); }); })
                            .reduce(function (accumulator, item, i) {
                            return __spreadArray(__spreadArray(__spreadArray([], accumulator, true), (0 < i ? [{ tag: "span", className: "separator", text: "/", }] : []), true), item, true);
                        }, []),
                    },
                    { tag: "span", text: _library_2.Library.Locale.map(i.description), }
                ];
            })
                .reduce(function (a, b) { return a.concat(b); }, []));
            _library_2.Library.UI.replaceChildren(_library_2.Library.UI.getElementById("ul", "information-list"), config_json_2.default.informations.map(function (i) { return ({ tag: "li", text: _library_2.Library.Locale.map(i), }); }));
            _library_2.Library.UI.replaceChildren(_library_2.Library.UI.getElementById("ul", "benchmark-description-panel"), config_json_2.default.benchmarkDescription.map(function (i) { return ({ tag: "li", text: _library_2.Library.Locale.map(i), }); }));
        };
        UI.initialize = function () {
            if (!_library_2.Library.UI.fullscreenEnabled && UI.withFullscreen.dom.parentElement) {
                UI.withFullscreen.dom.parentElement.style.setProperty("display", "none");
            }
            _library_2.Library.UI.replaceChildren(_library_2.Library.UI.querySelector("ul", "#powered-by ul"), Object.entries(powered_by_json_1.default).map(function (_a) {
                var text = _a[0], href = _a[1];
                return ({ tag: "li", children: [_library_2.Library.UI.createElement({ tag: "a", text: text, attributes: { href: href, } }),], });
            }));
            UI.updateLanguage();
        };
    })(UI || (exports.UI = UI = {}));
});
define("script/features/fps", ["require", "exports", "script/tools/index"], function (require, exports, _tools_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fps = void 0;
    var Fps;
    (function (Fps) {
        var OnlineStandardDeviation = /** @class */ (function () {
            function OnlineStandardDeviation() {
                var _this = this;
                this.count = 0;
                this.mean = 0;
                this.m2 = 0;
                this.reset = function () {
                    _this.count = 0;
                    _this.mean = 0;
                    _this.m2 = 0;
                };
                this.update = function (value) {
                    _this.count += 1;
                    var delta = value - _this.mean;
                    _this.mean += delta / _this.count;
                    var delta2 = value - _this.mean;
                    _this.m2 += delta * delta2;
                };
                this.isValid = function () { return 1 < _this.count; };
                this.getVariance = function () {
                    return _this.isValid() ? _this.m2 / (_this.count - 1) : 0;
                };
                this.getStandardDeviation = function () {
                    return Math.sqrt(_this.getVariance());
                };
            }
            return OnlineStandardDeviation;
        }());
        Fps.OnlineStandardDeviation = OnlineStandardDeviation;
        Fps.standardDeviation = new OnlineStandardDeviation();
        var fpsWindow = 1000; // ms
        var frameTimings = [];
        var fpsHistory = [];
        Fps.averageFps = NaN; // 直近1秒間の平均FPSを格納する変数
        var makeInvalidFpsHistoryEntry = function () {
            return ({
                fps: NaN,
                now: NaN,
                text: "N/A FPS",
            });
        };
        Fps.reset = function () {
            Fps.isValid = false;
            frameTimings = [];
            fpsHistory = [];
            Fps.currentMaxFps = Fps.currentNowFps = Fps.currentMinFps =
                makeInvalidFpsHistoryEntry();
            Fps.standardDeviation.reset();
            Fps.averageFps = NaN; // リセット時に初期化
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
                Fps.standardDeviation.update(fps);
                Fps.currentNowFps =
                    {
                        fps: fps,
                        now: now,
                        text: makeFpsText(fps),
                    };
                var expiredAt = now - fpsWindow;
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
                var totalFps = _tools_2.Tools.Math.sum(fpsHistory.map(function (i) { return i.fps; }));
                Fps.averageFps = totalFps / fpsHistory.length;
                if (Fps.isUnderFuseFps()) {
                    console.error("❌ UnderFuseFps:", {
                        fuseFps: Fps.fuseFps,
                        maxFps: Fps.currentMaxFps.fps,
                        nowFps: Fps.currentMaxFps.fps,
                        minFps: Fps.currentMinFps.fps,
                        averageFps: Fps.averageFps,
                    });
                }
            }
        };
        var makeFpsText = function (fps) {
            return "".concat(fps.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: 2, minimumFractionDigits: 2, }), " FPS");
        };
        Fps.getText = function () {
            return Fps.currentMaxFps.text + " (Max)\n"
                + "".concat(Fps.averageFps.toFixed(2), " FPS (Avg)\n")
                //+currentNowFps.text + " (Now)\n"
                + Fps.currentMinFps.text + " (Min)";
        };
        Fps.isUnderFuseFps = function () { return Fps.isValid && Fps.currentMaxFps.fps < Fps.fuseFps; };
    })(Fps || (exports.Fps = Fps = {}));
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
define("flounder.style.js/index", ["require", "exports", "flounder.style.js/generated/type", "flounder.style.js/config"], function (require, exports, type_1, config_json_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FlounderStyle = exports.EvilType = void 0;
    config_json_3 = __importDefault(config_json_3);
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
        FlounderStyle.getIntervalSize = function (data) { var _a; return (_a = data.intervalSize) !== null && _a !== void 0 ? _a : config_json_3.default.defaultSpotIntervalSize; };
        FlounderStyle.getBlur = function (data) { var _a; return (_a = data.blur) !== null && _a !== void 0 ? _a : config_json_3.default.defaultBlur; };
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
        var numberToString = function (data, value) { var _a; return value.toLocaleString("en-US", { useGrouping: false, maximumFractionDigits: (_a = data.maximumFractionDigits) !== null && _a !== void 0 ? _a : config_json_3.default.defaultMaximumFractionDigits, }); };
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
define("script/features/animation", ["require", "exports", "flounder.style.js/index", "phi-colors", "script/library/index", "script/tools/index", "resource/control", "resource/config"], function (require, exports, flounder_style_js_1, phi_colors_1, _library_3, _tools_3, control_json_2, config_json_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animation = void 0;
    control_json_2 = __importDefault(control_json_2);
    config_json_4 = __importDefault(config_json_4);
    var Animation;
    (function (Animation) {
        Animation.black = { r: 0, g: 0, b: 0, };
        Animation.white = { r: 1, g: 1, b: 1, };
        var PhiColoring = /** @class */ (function () {
            function PhiColoring(hue, saturation, lightness, PhiHueUnit, RgbHueUnit) {
                if (hue === void 0) { hue = Math.random(); }
                if (saturation === void 0) { saturation = config_json_4.default.colors.phiColors.saturation; }
                if (lightness === void 0) { lightness = config_json_4.default.colors.phiColors.lightness; }
                if (PhiHueUnit === void 0) { PhiHueUnit = 1 / phi_colors_1.phiColors.phi; }
                if (RgbHueUnit === void 0) { RgbHueUnit = 1 / 3; }
                var _this = this;
                this.hue = hue;
                this.PhiHueUnit = PhiHueUnit;
                this.RgbHueUnit = RgbHueUnit;
                this.makeRgb = function (step) { return phi_colors_1.phiColors.clipRgb(phi_colors_1.phiColors.hslToRgb({
                    h: PhiColoring.regulateH(((_this.RgbHueUnit * step)) % 1),
                    s: _this.s,
                    l: _this.l,
                })); };
                this.makePhiRgb = function (step) { return phi_colors_1.phiColors.clipRgb(phi_colors_1.phiColors.hslToRgb({
                    h: PhiColoring.regulateH((_this.hue + (_this.PhiHueUnit * step)) % 1),
                    s: _this.s,
                    l: _this.l,
                })); };
                this.makeSrgbColor = function (rgb) {
                    return phi_colors_1.phiColors.rgbForStyle(rgb);
                };
                this.makeColor = function (colorspace, rgb) {
                    return phi_colors_1.phiColors.rgbForCssColor(colorspace, rgb);
                };
                //this.h = rate(phiColors.HslHMin, phiColors.HslHMax)((hue);
                this.s = PhiColoring.regulateS(saturation);
                this.l = PhiColoring.regulateL(lightness);
            }
            PhiColoring.regulateH = function (h) { return _tools_3.Tools.Math.scale(phi_colors_1.phiColors.HslHMin, phi_colors_1.phiColors.HslHMax)(h); };
            PhiColoring.regulateS = function (s) { return _tools_3.Tools.Math.scale(phi_colors_1.phiColors.HslSMin, phi_colors_1.phiColors.HslSMax)(s); };
            PhiColoring.regulateL = function (l) { return _tools_3.Tools.Math.scale(phi_colors_1.phiColors.HslLMin, phi_colors_1.phiColors.HslLMax)(l); };
            return PhiColoring;
        }());
        Animation.PhiColoring = PhiColoring;
        var Pattern;
        (function (Pattern) {
            var makeRandomSpotArguments = function (type, intervalSize) {
                return ({
                    type: type,
                    layoutAngle: _tools_3.Tools.Random.select(["regular", "alternative",]),
                    foregroundColor: "forestgreen",
                    backgroundColor: "blanchedalmond",
                    intervalSize: intervalSize,
                    depth: 0.0,
                    maxPatternSize: _tools_3.Tools.Random.select([undefined, intervalSize / 4,]),
                    reverseRate: _tools_3.Tools.Random.select([undefined, 0.0,]),
                    maximumFractionDigits: config_json_4.default.maximumFractionDigits,
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
                    maxPatternSize: _tools_3.Tools.Random.select([undefined, intervalSize / (2 + _tools_3.Tools.Random.makeInteger(9)),]),
                    reverseRate: _tools_3.Tools.Random.select([undefined, 0.0,]),
                    anglePerDepth: _tools_3.Tools.Random.select([undefined, "auto", "-auto", 1, 0, -1.0,]),
                    maximumFractionDigits: config_json_4.default.maximumFractionDigits,
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
            var getList = function (pattern) {
                switch (pattern) {
                    case "triline": // for benchmark only
                        return [
                            makeRandomTrilineArguments,
                        ];
                    case "trispot": // for benchmark only
                        return [
                            makeRandomTrispotArguments,
                        ];
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
                    case "all":
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
            Pattern.make = function (pattern, intervalSize, random, index, prime) {
                if (random === void 0) { random = Math.random; }
                return _tools_3.Tools.Random.select(getList(pattern), random, index, prime)(intervalSize);
            };
            Pattern.getTypeCategory = function (type) {
                switch (type) {
                    case "stripe":
                    case "diline":
                    case "triline":
                        return "lines";
                    case "trispot":
                    case "tetraspot":
                        return "spots";
                }
            };
        })(Pattern || (Pattern = {}));
        var Animator = /** @class */ (function () {
            function Animator(canvas, random, phiColoring) {
                if (random === void 0) { random = new _tools_3.Tools.Random.IndexedRandom().getFunction(); }
                if (phiColoring === void 0) { phiColoring = new PhiColoring(); }
                var _this = this;
                this.canvas = canvas;
                this.random = random;
                this.phiColoring = phiColoring;
                this.layers = [];
                this.spotsLayersRate = 1.0;
                this.pattern = control_json_2.default.pattern.default;
                this.startAt = 0;
                this.offsetAt = 0;
                this.cycleSpan = control_json_2.default.cycleSpan.default;
                this.diagonalSize = 0;
                this.getDiagonalSize = function () { var _a, _b; return Math.sqrt(Math.pow((_a = _this.canvas.clientWidth) !== null && _a !== void 0 ? _a : 0, 2) + Math.pow((_b = _this.canvas.clientHeight) !== null && _b !== void 0 ? _b : 0, 2)); };
                this.makeColor = this.phiColoring.makeSrgbColor;
                this.easing = function (t) { return t; };
                this.argumentHistory = [];
                this.startStep = function (now) {
                    return _this.startAt = now - _this.offsetAt;
                };
                this.makeRandomArguments = function (mile) {
                    var result = Pattern.make(_this.pattern, _tools_3.Tools.Math.scale(_this.diagonalSize * config_json_4.default.intervalSize.minRate, _this.diagonalSize * config_json_4.default.intervalSize.maxRate)(_this.random(mile, 17)), _this.random, mile, 23);
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
                                //Tools.Array.cycleSelect(<FlounderStyle.Type.Color[]>config.colors.monochrome, mile +1.0);
                                return _tools_3.Tools.Array.cycleSelect([Animation.black, Animation.white], mile + 1.0);
                            };
                        case "primary-colors":
                            // return (mile: number, _offset: number, ix: number) =>
                            //     Tools.Array.cycleSelect(<FlounderStyle.Type.Color[]>config.colors.primaryColors, ix +mile +1.0);
                            return function (mile, offset, _ix) {
                                return _this.phiColoring.makeRgb(mile + offset + 1.0);
                            };
                        case "phi-colors":
                        default:
                            return function (mile, offset, _ix) {
                                return _this.phiColoring.makePhiRgb(mile + offset + 1.0);
                            };
                    }
                };
                this.makeForegroundRgb = this.getNextColorMaker("phi-colors");
                this.makeBackgroundRgb = function (mile, offset, ix) {
                    switch (true) {
                        case 0 < mile:
                            return _this.makeForegroundRgb(mile - 1, offset, ix);
                        case ix <= 0:
                            return _this.phiColoring.makePhiRgb(0.0);
                        default:
                            return Animation.black;
                    }
                };
                this.makeForegroundColor = function (mile, offset, ix) {
                    return _this.makeColor(_this.makeForegroundRgb(mile, offset, ix));
                };
                this.makeBackgroundColor = function (mile, offset, ix) {
                    return _this.makeColor(_this.makeBackgroundRgb(mile, offset, ix));
                };
                this.isStarted = function () { return 0 < _this.startAt; };
                this.getStep = function (universalStep, layer) { return universalStep - (layer.mile + layer.offset); };
                this.getSpotsIndex = function (ix) {
                    return Math.floor(ix * _this.spotsLayersRate);
                };
                this.isValidSpotLayer = function (ix) {
                    return _this.getSpotsIndex(ix - 1) < _this.getSpotsIndex(ix);
                };
                this.isValidLayer = function (ix) {
                    var _a, _b;
                    return "lines" === Pattern.getTypeCategory((_b = (_a = _this.layers[ix].arguments) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : "stripe") ||
                        _this.isValidSpotLayer(ix);
                };
                this.step = function (now) {
                    _this.offsetAt = now - _this.startAt;
                    var universalStep = _this.offsetAt / _this.cycleSpan;
                    _this.layers.forEach(function (i, ix) {
                        var _a, _b, _c, _d, _e;
                        var step = _this.getStep(universalStep, i);
                        if (0 <= step) {
                            if (1.0 <= step || undefined === i.arguments) {
                                while (1.0 <= step) {
                                    ++i.mile;
                                    step = _this.getStep(universalStep, i);
                                }
                                i.arguments = Object.assign({}, (_b = (_a = _this.layers[ix - 1]) === null || _a === void 0 ? void 0 : _a.arguments) !== null && _b !== void 0 ? _b : _this.makeRandomArguments(i.mile), {
                                    foregroundColor: _this.makeForegroundColor(i.mile, i.offset, ix),
                                    backgroundColor: (_d = (_c = i.arguments) === null || _c === void 0 ? void 0 : _c.foregroundColor) !== null && _d !== void 0 ? _d : _this.makeBackgroundColor(i.mile, i.offset, ix),
                                });
                                if (!_this.isValidLayer(ix)) {
                                    i.arguments.foregroundColor = (_e = i.arguments.backgroundColor) !== null && _e !== void 0 ? _e : "black";
                                    flounder_style_js_1.FlounderStyle.setStyle(i.layer, {
                                        "background-color": i.arguments.foregroundColor,
                                        "background-image": undefined,
                                        "background-size": undefined,
                                        "background-position": undefined,
                                    });
                                }
                            }
                            if (_this.isValidLayer(ix)) {
                                i.arguments.depth = _this.easing(step);
                                flounder_style_js_1.FlounderStyle.setStyle(i.layer, i.arguments);
                            }
                        }
                    });
                };
                this.update = function () {
                    return _this.step(_this.startAt + _this.offsetAt);
                };
                this.setColorspace = function (colorspace) {
                    switch (colorspace) {
                        case "Display P3":
                            _this.makeColor = function (rgb) { return _this.phiColoring.makeColor("display-p3", rgb); };
                            break;
                        case "Rec. 2020":
                            _this.makeColor = function (rgb) { return _this.phiColoring.makeColor("rec2020", rgb); };
                            break;
                        case "sRGB":
                        default:
                            //this.makeColor = (rgb: phiColors.Rgb) => this.phiColoring.makeColor("srgb", rgb);
                            _this.makeColor = _this.phiColoring.makeSrgbColor;
                            break;
                    }
                    if (!_this.isStarted()) {
                        _library_3.Library.UI.getElementsByClassName("div", "layer", _this.canvas)[0].style.setProperty("background-color", _this.makeColor(_this.phiColoring.makePhiRgb(0.0)));
                        //console.log(colorspace, this.makeColor(this.phiColoring.makePhiRgb(0.0)));
                    }
                };
                this.setColoring = function (coloring) {
                    return _this.makeForegroundRgb = _this.getNextColorMaker(coloring);
                };
                this.setPattern = function (newPattern) {
                    return _this.pattern = newPattern;
                };
                this.setDiagonalSize = function (newDiagonalSize) {
                    var fixRate = newDiagonalSize / _this.diagonalSize;
                    _this.diagonalSize = newDiagonalSize;
                    var list = _this.layers
                        .map(function (i) { return i.arguments; })
                        .concat(_this.argumentHistory);
                    list.filter(_library_3.Library.TypeGuards.has("intervalSize")).forEach(function (i) { return i.intervalSize *= fixRate; });
                    list.filter(_library_3.Library.TypeGuards.has("maxPatternSize")).forEach(function (i) { return i.maxPatternSize *= fixRate; });
                };
                this.updateDiagonalSize = function () {
                    return _this.setDiagonalSize(_this.getDiagonalSize());
                };
                this.setCycleSpan = function (newCycleSpan) {
                    if (_this.isStarted()) {
                        var fixRate = newCycleSpan / _this.cycleSpan;
                        var now = performance.now();
                        _this.offsetAt = _this.offsetAt * fixRate;
                        _this.startStep(now);
                    }
                    _this.cycleSpan = newCycleSpan;
                };
                this.setLayers = function (newLayers) {
                    var _a, _b, _c;
                    _library_3.Library.UI.cullOrBreed(_this.canvas, { tag: "div", attributes: { class: "layer", }, }, newLayers);
                    var layerList = _library_3.Library.UI.getElementsByClassName("div", "layer", _this.canvas);
                    var newArguments = (_a = _this.layers[0]) === null || _a === void 0 ? void 0 : _a.arguments;
                    var oldArguments = _this.argumentHistory[_this.argumentHistory.length - 2];
                    var newMile = (_c = (_b = _this.layers[0]) === null || _b === void 0 ? void 0 : _b.mile) !== null && _c !== void 0 ? _c : 0;
                    var oldMile = Math.max(newMile - 1, 0);
                    var restoreArgument = function (i, ix) {
                        if (undefined !== i) {
                            var result = Object.assign({}, i);
                            var offset = ix / layerList.length;
                            result.foregroundColor = _this.makeForegroundColor(oldMile, offset, ix);
                            result.backgroundColor = _this.makeBackgroundColor(oldMile, offset, ix);
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
                this.setSpotsLayers = function (spotsLayersRate) {
                    _this.spotsLayersRate = spotsLayersRate;
                };
                this.setEasing = function (enabled) {
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
define("script/features/benchmark", ["require", "exports", "script/tools/index", "script/library/index", "script/ui", "script/features/fps", "script/features/animation", "resource/config"], function (require, exports, _tools_4, _library_4, ui_2, fps_1, animation_1, config_json_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Benchmark = void 0;
    config_json_5 = __importDefault(config_json_5);
    var Benchmark;
    (function (Benchmark) {
        Benchmark.animator = new animation_1.Animation.Animator(ui_2.UI.benchmarkCanvas, new _tools_4.Tools.Random.IndexedRandom(_tools_4.Tools.Hash.fnv1a_32, "benchmark")
            .getFunction());
        Benchmark.calculateMeasurementScore = function (a, b, calculate) {
            for (var i in ["Unmeasured", "UnmeasurablePoor", "UnmeasurableRich",]) {
                if (a === i || b === i) {
                    return i;
                }
            }
            return calculate(a, b);
        };
        Benchmark.isMeasuredScore = function (score) {
            return !["Unmeasured", "UnmeasurablePoor", "UnmeasurableRich",].includes(score);
        };
        Benchmark.getMeasurementScoreValue = function (score) {
            return Benchmark.isMeasuredScore(score) ? score : undefined;
        };
        Benchmark.measurementScoreToText = function (score, toText) {
            return Benchmark.isMeasuredScore(score) ? toText(score) : _library_4.Library.Locale.map(score);
        };
        Benchmark.getUnmeasuredReslult = function () {
            return ({
                screenResolution: "Unmeasured",
                screenResolutionScore: "Unmeasured",
                fps: "Unmeasured",
                displayScore: "Unmeasured",
                linesCalculationScore: "Unmeasured",
                spotsCalculationScore: "Unmeasured",
                totalCalculationScore: "Unmeasured",
                linesRenderingScorePerFullHd: "Unmeasured",
                spotsRenderingScorePerFullHd: "Unmeasured",
                totalRenderingScore: "Unmeasured",
                totalScore: "Unmeasured",
            });
        };
        Benchmark.measureScreenResolution = function () {
            var _a;
            return ({
                width: screen.width,
                height: screen.height,
                devicePixelRatio: (_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1.0,
                colorDepth: window.screen.colorDepth,
            });
        };
        var measureScreenResolutionScore = function () {
            var _a, _b;
            return ((ui_2.UI.screenBody.clientWidth * ((_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1.0))
                * (ui_2.UI.screenBody.clientHeight * ((_b = window.devicePixelRatio) !== null && _b !== void 0 ? _b : 1.0))
                * window.screen.colorDepth)
                / (config_json_5.default.benchmark.pixelUnit * config_json_5.default.benchmark.colorDepthUnit);
        };
        var setProgressBarSize = function (size) {
            return _library_4.Library.UI.cullOrBreed(ui_2.UI.benchmarkProgressBar, { tag: "div", className: "progress-block", }, size);
        };
        var setProgressBarProgress = function (progress) {
            return Array.from(ui_2.UI.benchmarkProgressBar.children).forEach(function (i, ix) {
                i.classList.toggle("on", ix < progress);
                i.classList.toggle("now", ix === progress);
            });
        };
        var ScreenResolutionMeasurementPhase = /** @class */ (function () {
            function ScreenResolutionMeasurementPhase() {
                var _this = this;
                this.start = function (_measure, now) {
                    _this.startAt = now;
                    var i = Benchmark.measureScreenResolution();
                    ui_2.UI.benchmarkPopupLabel.textContent = "Screen Resolution:";
                    ui_2.UI.benchmarkPopupValue.textContent = "".concat(i.width, "x").concat(i.height, " ").concat(i.devicePixelRatio, "x ").concat(i.colorDepth, "bit");
                };
                this.step = function (measure, now) {
                    if (_this.startAt + config_json_5.default.benchmark.screenResolutionWait <= now) {
                        measure.result.screenResolution = Benchmark.measureScreenResolution();
                        measure.result.screenResolutionScore = measureScreenResolutionScore();
                        measure.next();
                    }
                };
                this.startAt = 0;
            }
            return ScreenResolutionMeasurementPhase;
        }());
        Benchmark.ScreenResolutionMeasurementPhase = ScreenResolutionMeasurementPhase;
        var FpsMeasurementPhase = /** @class */ (function () {
            function FpsMeasurementPhase() {
                var _this = this;
                this.start = function (_measure, now) {
                    _this.startAt = now;
                    _this.fpsTotal = 0;
                    _this.fpsCount = 0;
                    ui_2.UI.benchmarkPopupLabel.textContent = "FPS:";
                };
                this.step = function (measure, now) {
                    ui_2.UI.benchmarkPopupValue.textContent = "".concat(fps_1.Fps.currentNowFps.fps.toFixed(2));
                    _this.fpsTotal += fps_1.Fps.currentNowFps.fps;
                    ++_this.fpsCount;
                    if (_this.startAt + config_json_5.default.benchmark.refreshRateWait <= now) {
                        measure.result.fps = _this.fpsTotal / _this.fpsCount;
                        measure.next();
                    }
                };
                this.startAt = 0;
                this.fpsTotal = 0;
                this.fpsCount = 0;
            }
            return FpsMeasurementPhase;
        }());
        Benchmark.FpsMeasurementPhase = FpsMeasurementPhase;
        var ScoreMeasurementPhaseBase = /** @class */ (function () {
            function ScoreMeasurementPhaseBase(calculateOnly, pattern, scoreLabel, calculateScore) {
                var _this = this;
                this.calculateOnly = calculateOnly;
                this.pattern = pattern;
                this.scoreLabel = scoreLabel;
                this.calculateScore = calculateScore;
                this.layers = 1;
                this.halfRefreshRate = 30;
                this.start = function (measure, now) {
                    var _a;
                    _this.halfRefreshRate = (_a = Benchmark.getMeasurementScoreValue(measure.result.fps)) !== null && _a !== void 0 ? _a : 30;
                    document.body.classList.toggle("benchmark-rendering", !_this.calculateOnly);
                    Benchmark.animator.setColorspace("Rec. 2020");
                    Benchmark.animator.setColoring("phi-colors");
                    Benchmark.animator.setDiagonalSize(1000);
                    Benchmark.animator.setCycleSpan(1000);
                    Benchmark.animator.setEasing(true);
                    _this.startPattern(measure, now);
                    ui_2.UI.benchmarkPopupLabel.textContent = "".concat(_library_4.Library.Locale.map(_this.scoreLabel), ":");
                };
                this.startPattern = function (_measure, now) {
                    _this.patternStartAt = now;
                    Benchmark.animator.setPattern(_this.pattern);
                    _this.startLayers(now, 1);
                    Benchmark.animator.startStep(now);
                    fps_1.Fps.reset();
                };
                this.startLayers = function (now, layers) {
                    _this.laysersStartAt = now;
                    _this.layers = layers;
                    Benchmark.animator.setLayers(_this.layers);
                };
                this.step = function (measure, now) {
                    ui_2.UI.benchmarkPopupValue.textContent = "".concat((fps_1.Fps.currentNowFps.fps * _this.layers).toFixed(2));
                    if (_this.isNeedAdjustingLayers(now)) {
                        var layers = Math.max(Math.floor((_this.layers * fps_1.Fps.currentMinFps.fps) / _this.halfRefreshRate), _this.layers + 1);
                        _this.startLayers(now, layers);
                    }
                    if (_this.isEnd(now)) {
                        _this.calculateScore(measure);
                        measure.next();
                    }
                    else {
                        Benchmark.animator.step(now);
                    }
                };
                this.laysersStartAt = 0;
                this.patternStartAt = 0;
                this.isStable = function (now) {
                    return fps_1.Fps.isValid &&
                        _this.patternStartAt + config_json_5.default.benchmark.stableWait < now;
                };
                this.isNeedAdjustingLayers = function (now) {
                    return _this.isStable(now) &&
                        _this.laysersStartAt + config_json_5.default.benchmark.adjustLayersWait < now &&
                        30 <= fps_1.Fps.averageFps;
                };
                this.isEnd = function (now) {
                    return _this.isStable(now) &&
                        _this.laysersStartAt + config_json_5.default.benchmark.nextPatternWait < now;
                };
                this.calculationScore = function () {
                    return fps_1.Fps.averageFps * _this.layers;
                };
            }
            return ScoreMeasurementPhaseBase;
        }());
        Benchmark.ScoreMeasurementPhaseBase = ScoreMeasurementPhaseBase;
        var LinesCalculationScoreMeasurementPhase = /** @class */ (function (_super) {
            __extends(LinesCalculationScoreMeasurementPhase, _super);
            function LinesCalculationScoreMeasurementPhase() {
                var _this = _super.call(this, true, "triline", "benchmark-lines-calculation-score", function (measure) { return measure.result.linesCalculationScore = _this.calculationScore(); }) || this;
                return _this;
            }
            return LinesCalculationScoreMeasurementPhase;
        }(ScoreMeasurementPhaseBase));
        Benchmark.LinesCalculationScoreMeasurementPhase = LinesCalculationScoreMeasurementPhase;
        var SpotsCalculationScoreMeasurementPhase = /** @class */ (function (_super) {
            __extends(SpotsCalculationScoreMeasurementPhase, _super);
            function SpotsCalculationScoreMeasurementPhase() {
                var _this = _super.call(this, true, "trispot", "benchmark-spots-calculation-score", function (measure) { return measure.result.spotsCalculationScore = _this.calculationScore(); }) || this;
                return _this;
            }
            return SpotsCalculationScoreMeasurementPhase;
        }(ScoreMeasurementPhaseBase));
        Benchmark.SpotsCalculationScoreMeasurementPhase = SpotsCalculationScoreMeasurementPhase;
        var LinesRenderingScoreMeasurementPhase = /** @class */ (function (_super) {
            __extends(LinesRenderingScoreMeasurementPhase, _super);
            function LinesRenderingScoreMeasurementPhase() {
                var _this = _super.call(this, false, "triline", "benchmark-lines-rendering-score", function (measure) { return measure.result.linesRenderingScorePerFullHd = _this.calculationScore() * measureScreenResolutionScore(); }) || this;
                return _this;
            }
            return LinesRenderingScoreMeasurementPhase;
        }(ScoreMeasurementPhaseBase));
        Benchmark.LinesRenderingScoreMeasurementPhase = LinesRenderingScoreMeasurementPhase;
        var SpotsRenderingScoreMeasurementPhase = /** @class */ (function (_super) {
            __extends(SpotsRenderingScoreMeasurementPhase, _super);
            function SpotsRenderingScoreMeasurementPhase() {
                var _this = _super.call(this, false, "trispot", "benchmark-spots-rendering-score", function (measure) { return measure.result.spotsRenderingScorePerFullHd = _this.calculationScore() * measureScreenResolutionScore(); }) || this;
                return _this;
            }
            return SpotsRenderingScoreMeasurementPhase;
        }(ScoreMeasurementPhaseBase));
        Benchmark.SpotsRenderingScoreMeasurementPhase = SpotsRenderingScoreMeasurementPhase;
        var phases = [
            new ScreenResolutionMeasurementPhase(),
            new FpsMeasurementPhase(),
            new LinesCalculationScoreMeasurementPhase(),
            new SpotsCalculationScoreMeasurementPhase(),
            new LinesRenderingScoreMeasurementPhase(),
            new SpotsRenderingScoreMeasurementPhase(),
        ];
        var Measurement = /** @class */ (function () {
            function Measurement(canvas) {
                var _this = this;
                this.canvas = canvas;
                this.result = Benchmark.getUnmeasuredReslult();
                this.phase = 0;
                this.currentPhase = null;
                this.start = function () {
                    setProgressBarSize(phases.length);
                    setProgressBarProgress(_this.phase = -1);
                    ui_2.UI.benchmarkPopupLabel.textContent = "".concat(_library_4.Library.Locale.map("DELETEME.benchmarking-in-progress"), ":");
                    ui_2.UI.benchmarkPopupValue.textContent = "".concat(_library_4.Library.Locale.map("DELETEME.benchmark-phase-preparation"));
                    _this.currentPhase = null;
                    _this.result = Benchmark.getUnmeasuredReslult();
                };
                this.step = function (now) {
                    var _a;
                    if (_this.phase < 0) {
                        _this.next();
                    }
                    if (_this.currentPhase !== phases[_this.phase]) {
                        _this.currentPhase = phases[_this.phase];
                        (_a = _this.currentPhase) === null || _a === void 0 ? void 0 : _a.start(_this, now);
                    }
                    phases[_this.phase].step(_this, now);
                };
                this.next = function () {
                    setProgressBarProgress(++_this.phase);
                };
                this.isEnd = function () {
                    return phases.length <= _this.phase;
                };
                this.end = function () {
                    _this.result.displayScore = Benchmark.calculateMeasurementScore(_this.result.screenResolutionScore, _this.result.fps, function (a, b) { return (a * b) / config_json_5.default.benchmark.fpsUnit; });
                    _this.result.totalCalculationScore = Benchmark.calculateMeasurementScore(_this.result.linesCalculationScore, _this.result.spotsCalculationScore, function (a, b) { return (a + b) / 2; });
                    _this.result.totalRenderingScore = Benchmark.calculateMeasurementScore(_this.result.linesRenderingScorePerFullHd, _this.result.spotsRenderingScorePerFullHd, function (a, b) { return (a + b) / 2; });
                    _this.result.totalScore = Benchmark.isMeasuredScore(_this.result.totalRenderingScore) ?
                        (_this.result.totalRenderingScore / measureScreenResolutionScore()) :
                        _this.result.totalRenderingScore;
                    console.log("📈 benchmark", _this.result);
                };
            }
            ;
            return Measurement;
        }());
        Benchmark.Measurement = Measurement;
    })(Benchmark || (exports.Benchmark = Benchmark = {}));
});
define("script/features/index", ["require", "exports", "script/features/fps", "script/features/animation", "script/features/benchmark"], function (require, exports, ImportedFps, ImportedAnimation, ImportedBenchmark) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Features = void 0;
    ImportedFps = __importStar(ImportedFps);
    ImportedAnimation = __importStar(ImportedAnimation);
    ImportedBenchmark = __importStar(ImportedBenchmark);
    var Features;
    (function (Features) {
        Features.Fps = ImportedFps.Fps;
        Features.Animation = ImportedAnimation.Animation;
        Features.Benchmark = ImportedBenchmark.Benchmark;
    })(Features || (exports.Features = Features = {}));
});
define("script/controller/base", ["require", "exports", "script/library/index", "script/features/index", "script/ui"], function (require, exports, _library_5, _features_1, ui_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Base = void 0;
    var Base;
    (function (Base) {
        Base.isInMode = function (mode) {
            return document.body.classList.contains("immersive") && document.body.classList.contains(mode);
        };
        Base.intoMode = function (mode) {
            document.body.classList.toggle("immersive", true);
            document.body.classList.toggle(mode, true);
            document.body.classList.toggle("mousemove", false);
            ui_3.UI.keyboardShortcut.classList.toggle("show", false);
            Base.updateFullscreenState();
            _features_1.Features.Fps.reset();
        };
        Base.exitMode = function (mode) {
            document.body.classList.toggle("immersive", false);
            document.body.classList.toggle(mode, false);
            Base.updateFullscreenState(false);
        };
        Base.updateFullscreenState = function (fullscreen) {
            if (_library_5.Library.UI.fullscreenEnabled) {
                if (fullscreen !== null && fullscreen !== void 0 ? fullscreen : ui_3.UI.withFullscreen.get()) {
                    _library_5.Library.UI.requestFullscreen(document.body);
                }
                else {
                    _library_5.Library.UI.exitFullscreen();
                }
            }
        };
    })(Base || (exports.Base = Base = {}));
});
define("script/controller/animation", ["require", "exports", "script/features/index", "script/controller/base", "script/ui", "resource/config"], function (require, exports, _features_2, base_1, ui_4, config_json_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animation = void 0;
    config_json_6 = __importDefault(config_json_6);
    var Animation;
    (function (Animation) {
        Animation.animator = new _features_2.Features.Animation.Animator(ui_4.UI.canvas, Math.random);
        Animation.isInAnimation = function () {
            return base_1.Base.isInMode("animation");
        };
        Animation.playAnimation = function () {
            base_1.Base.intoMode("animation");
            Animation.updateFps();
            Animation.start();
        };
        Animation.pauseAnimation = function () {
            if (Animation.isInAnimation()) {
                console.log("📈 fps", {
                    count: _features_2.Features.Fps.standardDeviation.count,
                    mean: _features_2.Features.Fps.standardDeviation.mean,
                    standardDeviation: _features_2.Features.Fps.standardDeviation.getStandardDeviation(),
                });
            }
            base_1.Base.exitMode("animation");
        };
        Animation.loopAnimation = function (now) {
            if (Animation.isInAnimation()) {
                _features_2.Features.Fps.step(now);
                Animation.updateFps();
                if (_features_2.Features.Fps.isUnderFuseFps()) {
                    Animation.pauseAnimation();
                }
                else {
                    Animation.animator.step(now);
                    window.requestAnimationFrame(Animation.loopAnimation);
                }
            }
        };
        Animation.start = function () { return setTimeout(function () { return window.requestAnimationFrame(function (now) {
            Animation.animator.startStep(now);
            Animation.loopAnimation(now);
        }); }, config_json_6.default.startWait); };
        Animation.updateFps = function () {
            if (ui_4.UI.showFps.get()) {
                ui_4.UI.fpsDisplay.innerText = _features_2.Features.Fps.getText();
            }
        };
    })(Animation || (exports.Animation = Animation = {}));
});
define("script/controller/benchmark", ["require", "exports", "script/features/index", "script/library/index", "script/controller/base", "script/ui", "resource/config"], function (require, exports, _features_3, _library_6, base_2, ui_5, config_json_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Benchmark = void 0;
    config_json_7 = __importDefault(config_json_7);
    var Benchmark;
    (function (Benchmark) {
        Benchmark.benchmark = new _features_3.Features.Benchmark.Measurement(ui_5.UI.benchmarkCanvas);
        Benchmark.loopBenchmark = function (now) {
            if (Benchmark.isInBenchmark()) {
                _features_3.Features.Fps.step(now);
                ui_5.UI.showFps.get();
                Benchmark.benchmark.step(now);
                if (Benchmark.benchmark.isEnd()) {
                    Benchmark.benchmark.end();
                    setTimeout(function () {
                        Benchmark.stopBenchmark();
                        Benchmark.showResult();
                    }, config_json_7.default.benchmark.endWait);
                }
                else {
                    window.requestAnimationFrame(Benchmark.loopBenchmark);
                }
            }
        };
        Benchmark.isInBenchmark = function () {
            return base_2.Base.isInMode("benchmark");
        };
        Benchmark.runBenchmark = function () {
            base_2.Base.intoMode("benchmark");
            Benchmark.benchmark.start();
            if (_library_6.Library.UI.fullscreenEnabled && ui_5.UI.withFullscreen.get()) {
                _library_6.Library.UI.requestFullscreen(document.body);
            }
            setTimeout(function () {
                return window.requestAnimationFrame(function (now) {
                    Benchmark.loopBenchmark(now);
                });
            }, config_json_7.default.benchmark.startWait);
        };
        Benchmark.stopBenchmark = function () {
            if (Benchmark.isInBenchmark()) {
                console.log("📈 fps", {
                    count: _features_3.Features.Fps.standardDeviation.count,
                    mean: _features_3.Features.Fps.standardDeviation.mean,
                    standardDeviation: _features_3.Features.Fps.standardDeviation.getStandardDeviation(),
                });
            }
            base_2.Base.exitMode("benchmark");
            document.body.classList.toggle("benchmark-rendering", false);
        };
        Benchmark.showResult = function () {
            document.body.classList.toggle("immersive", true);
            document.body.classList.toggle("benchmark-result", true);
            ui_5.UI.benchmarkTotalScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.totalScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkScorePerFullHD.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.totalRenderingScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkCalculationScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.totalCalculationScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkLinesCalculationScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.linesCalculationScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkSpotsCalculationScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.spotsCalculationScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkLinesRenderingScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.linesRenderingScorePerFullHd, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkSpotsRenderingScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.spotsRenderingScorePerFullHd, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkDisplayScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.displayScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkFpsScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.fps, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkScreenResolutionScore.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.screenResolutionScore, function (i) { return i.toFixed(2); });
            ui_5.UI.benchmarkScreenWidth.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.screenResolution, function (i) { return i.width.toFixed(2); });
            ui_5.UI.benchmarkScreenHeight.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.screenResolution, function (i) { return i.height.toFixed(2); });
            ui_5.UI.benchmarkDevicePixelRatio.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.screenResolution, function (i) { return i.devicePixelRatio.toFixed(2); });
            ui_5.UI.benchmarkScreenColorDepth.innerText =
                _features_3.Features.Benchmark.measurementScoreToText(Benchmark.benchmark.result.screenResolution, function (i) { return i.colorDepth.toFixed(2); });
        };
    })(Benchmark || (exports.Benchmark = Benchmark = {}));
});
define("script/controller/index", ["require", "exports", "script/controller/base", "script/controller/animation", "script/controller/benchmark"], function (require, exports, ImportedBase, ImportedAnimation, ImportedBenchmark) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Controller = void 0;
    ImportedBase = __importStar(ImportedBase);
    ImportedAnimation = __importStar(ImportedAnimation);
    ImportedBenchmark = __importStar(ImportedBenchmark);
    var Controller;
    (function (Controller) {
        Controller.Base = ImportedBase.Base;
        Controller.Animation = ImportedAnimation.Animation;
        Controller.Benchmark = ImportedBenchmark.Benchmark;
        Controller.toggleAnimation = function () {
            switch (true) {
                case Controller.Animation.isInAnimation():
                    Controller.Animation.pauseAnimation();
                    break;
                case Controller.Benchmark.isInBenchmark():
                    Controller.Benchmark.stopBenchmark();
                    break;
                default:
                    Controller.Animation.playAnimation();
                    break;
            }
        };
    })(Controller || (exports.Controller = Controller = {}));
});
define("script/events", ["require", "exports", "script/library/index", "script/features/index", "script/controller/index", "script/ui", "resource/config"], function (require, exports, _library_7, _features_4, _controller_1, ui_6, config_json_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = void 0;
    config_json_8 = __importDefault(config_json_8);
    var Events;
    (function (Events) {
        var update = function (setter) {
            setter === null || setter === void 0 ? void 0 : setter();
            if (!_controller_1.Controller.Animation.isInAnimation()) {
                _controller_1.Controller.Animation.animator.update();
            }
        };
        var updateDiagonalSize = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.updateDiagonalSize(); });
        };
        var updateColorspace = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setColorspace(ui_6.UI.colorspaceSelect.get()); });
        };
        var updateColoring = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setColoring(ui_6.UI.coloringSelect.get()); });
        };
        var updatePattern = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setPattern(ui_6.UI.patternSelect.get()); });
        };
        var updateLayers = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setLayers(parseInt(ui_6.UI.layersSelect.get())); });
        };
        var updateSpotsLayers = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setSpotsLayers(parseInt(ui_6.UI.spotslayersSelect.get()) / 100.0); });
        };
        var setCanvasSize = function (size) {
            ["width", "height",].forEach(function (i) { return ui_6.UI.canvas.style.setProperty(i, size); });
            updateDiagonalSize();
        };
        var updateCanvasSize = function () {
            var newCanvasSize = parseFloat(ui_6.UI.canvasSizeSelect.get());
            var newCanvasSizeRate = Math.sqrt(newCanvasSize / 100.0);
            var canvasSize = newCanvasSizeRate * 100.0;
            setCanvasSize("".concat(canvasSize, "%"));
        };
        var updateCycleSpan = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setCycleSpan(parseInt(ui_6.UI.cycleSpanSelect.get())); });
        };
        var updateFuseFps = function () {
            return _features_4.Features.Fps.fuseFps = parseFloat(ui_6.UI.fuseFpsSelect.get());
        };
        var updateEasing = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setEasing(ui_6.UI.easingCheckbox.get()); });
        };
        var updateShowFps = function () {
            return ui_6.UI.fpsDisplay.classList.toggle("hide", !ui_6.UI.showFps.get());
        };
        Events.initialize = function () {
            ui_6.UI.playButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                _controller_1.Controller.toggleAnimation();
            };
            ui_6.UI.runBenchmarkButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                _controller_1.Controller.Benchmark.runBenchmark();
            };
            ui_6.UI.colorspaceSelect.setChange(updateColorspace);
            ui_6.UI.coloringSelect.setChange(updateColoring);
            ui_6.UI.patternSelect.setChange(updatePattern);
            ui_6.UI.canvasSizeSelect.setChange(updateCanvasSize);
            ui_6.UI.layersSelect.setChange(updateLayers);
            ui_6.UI.spotslayersSelect.setChange(updateSpotsLayers);
            ui_6.UI.cycleSpanSelect.setChange(updateCycleSpan);
            ui_6.UI.fuseFpsSelect.setChange(updateFuseFps);
            ui_6.UI.easingCheckbox.setChange(updateEasing);
            // UI.withFullscreen.setChange(Controller.Animation.updateWithFullscreen);
            ui_6.UI.showFps.setChange(updateShowFps);
            ui_6.UI.benchmarkAbortButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                _controller_1.Controller.Benchmark.stopBenchmark();
            };
            ui_6.UI.benchmarkResultCloseButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                //Controller.Benchmark.runBenchmark();
                document.body.classList.toggle("immersive", false);
                document.body.classList.toggle("benchmark-result", false);
            };
            ui_6.UI.canvas.addEventListener("click", function (event) {
                event.stopPropagation();
                console.log("👆 canvas.Click: pauseAnimation", event, ui_6.UI.canvas);
                _controller_1.Controller.Animation.pauseAnimation();
            });
            ui_6.UI.benchmarkCanvas.addEventListener("click", function (event) {
                event.stopPropagation();
                console.log("👆 benchmarkCanvas.Click: stopBenchmark", event, ui_6.UI.benchmarkCanvas);
                _controller_1.Controller.Benchmark.stopBenchmark();
            });
            var mouseMoveTimer = new _library_7.Library.UI.ToggleClassForWhileTimer();
            ui_6.UI.screenBody.addEventListener("mousemove", function (_event) {
                if (config_json_8.default.log.mousemove && !mouseMoveTimer.isOn()) {
                    console.log("🖱️ MouseMove:", event, ui_6.UI.screenBody);
                }
                mouseMoveTimer.start(document.body, "mousemove", 1000);
            });
            _library_7.Library.UI.querySelectorAllWithFallback("label", ["label[for]:has(select)", "label[for]"])
                .forEach(function (label) { return _library_7.Library.UI.showPickerOnLabel(label); });
            _library_7.Library.Shortcuts.setCommandMap({
                "nop": function () { },
                "toggleHideUI": function () {
                    document.body.classList.toggle("hide-ui");
                    if (document.body.classList.contains("hide-ui")) {
                        ui_6.UI.keyboardShortcut.classList.toggle("show", false);
                    }
                },
                "toggleAnimation": function () { return _controller_1.Controller.toggleAnimation(); },
                "switchColoringForward": function () { return ui_6.UI.coloringSelect.switch(true); },
                "switchColoringBackward": function () { return ui_6.UI.coloringSelect.switch(false); },
                "switchPatternForward": function () { return ui_6.UI.patternSelect.switch(true); },
                "switchPatternBackward": function () { return ui_6.UI.patternSelect.switch(false); },
                "increaseCanvasSize": function () { return ui_6.UI.canvasSizeSelect.switch(true); },
                "decreaseCanvasSize": function () { return ui_6.UI.canvasSizeSelect.switch(false); },
                "increaseLayer": function () { return ui_6.UI.layersSelect.switch(true); },
                "decreaseLayer": function () { return ui_6.UI.layersSelect.switch(false); },
                "speedDown": function () { return ui_6.UI.cycleSpanSelect.switch(true); },
                "speedUp": function () { return ui_6.UI.cycleSpanSelect.switch(false); },
                "toggleFullScreen": function () {
                    ui_6.UI.withFullscreen.toggle();
                    if (_controller_1.Controller.Animation.isInAnimation()) {
                        _controller_1.Controller.Base.updateFullscreenState();
                    }
                },
                "toggleShowFps": function () {
                    ui_6.UI.showFps.toggle();
                    updateShowFps();
                },
                "unknownKeyDown": function () {
                    showShortcutsTimer.start(ui_6.UI.keyboardShortcut, "show", 3000);
                }
            });
            var showShortcutsTimer = new _library_7.Library.UI.ToggleClassForWhileTimer();
            window.addEventListener("resize", function () { return updateDiagonalSize(); });
            [
                ui_6.UI.colorspaceSelect,
                ui_6.UI.coloringSelect,
                ui_6.UI.patternSelect,
                ui_6.UI.canvasSizeSelect,
                ui_6.UI.layersSelect,
                ui_6.UI.spotslayersSelect,
                ui_6.UI.cycleSpanSelect,
                ui_6.UI.fuseFpsSelect,
                ui_6.UI.easingCheckbox,
                // UI.withFullscreen,
                ui_6.UI.showFps,
            ].forEach(function (i) { return i.fire(); });
        };
    })(Events || (exports.Events = Events = {}));
});
define("script/index", ["require", "exports", "script/library/index", "script/tools/index", "script/ui", "script/events"], function (require, exports, _library_8, _tools_5, ui_7, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ui_7.UI.initialize();
    events_1.Events.initialize();
    console.log("\uD83D\uDCE6 BUILD AT: ".concat(build.at, " ( ").concat(_tools_5.Tools.Timespan.toDisplayString(new Date().getTime() - build.tick, 1), " ").concat(_library_8.Library.Locale.map("ago"), " )"));
});
//# sourceMappingURL=index.js.map