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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
define("script/tools/type-guards", ["require", "exports"], function (require, exports) {
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
define("script/tools/array", ["require", "exports", "script/tools/type-guards", "script/tools/math"], function (require, exports, type_guards_1, math_1) {
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
            return type_guards_1.TypeGuards.hasValue(value) && (condition !== null && condition !== void 0 ? condition : true) ? [value,] : [];
        };
        Array.uniqueFilter = function (i, ix, list) {
            return ix === list.indexOf(i);
        };
        Array.lookupValue = function (list, value) {
            return list.includes(value) ? value : undefined;
        };
    })(Array || (exports.Array = Array = {}));
});
define("locale/generated/master", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.localeMaster = void 0;
    exports.localeMaster = {
        "ar": {
            "lang-label": "العربية",
            "lang-direction": "rtl",
            "Auto": "تلقائي",
            "description": "شاشة توقف ويب كاليدوسكوب",
            "colorspace-label": "نطاق الألوان:",
            "coloring-label": "التلوين:",
            "pattern-label": "النمط:",
            "lines": "خطوط",
            "spots": "نقاط",
            "both": "كلاهما",
            "canvas-size-label": "حجم اللوحة:",
            "layers-label": "الطبقات:",
            "spots-layers-label": "الطبقات (النقاط):",
            "cycle-span-label": "مدة الدورة:",
            "fuse-fps-label": "معدل الانصهار FPS:",
            "frame-delay-label": "تأخير الإطار:",
            "easing-label": "تسهيل:",
            "with-fullscreen-label": "ملء الشاشة:",
            "show-fps-label": "إظهار FPS:",
            "clock-label": "الساعة:",
            "brightness-label": "السطوع:",
            "hide": "إخفاء",
            "blend": "دمج",
            "white": "أبيض",
            "black": "أسود",
            "system": "النظام",
            "alternate": "بديل",
            "rainbow": "قوس قزح",
            "language-label": "اللغة:",
            "url-label": "رابط هذا الإعداد",
            "run-benchmark-label": "تشغيل الاختبار",
            "informationFuseFps": "⚠️ سيتم الإيقاف تلقائيًا إذا انخفض FPS(Max) عن \"معدل الانصهار\" لتجنب تعطل المتصفح أو نظام التشغيل.",
            "timeUnitMs": "مللي ثانية",
            "timeUnitS": "ثانية",
            "timeUnitM": "دقيقة",
            "timeUnitH": "ساعة",
            "timeUnitD": "يوم",
            "ago": "منذ",
            "Hide UI": "إخفاء الواجهة",
            "Play / Pause": "تشغيل / إيقاف مؤقت",
            "Switch Pattern": "تبديل النمط",
            "Switch Coloring": "تبديل التلوين",
            "Scaling Canvas Size": "تغيير حجم اللوحة",
            "Increase / Decrease Frame Delay": "زيادة / تقليل تأخير الإطار",
            "Increase / Decrease Layer": "زيادة / تقليل الطبقات",
            "Speed Down / Up": "إبطاء / تسريع",
            "FullScreen": "ملء الشاشة",
            "Show FPS": "إظهار FPS",
            "Switch Clock": "تبديل الساعة",
            "benchmark-abort": "إلغاء",
            "benchmark-close": "إغلاق",
            "benchmarking-in-progress": "جارٍ إجراء الاختبار",
            "benchmark-phase-preparation": "التحضير",
            "benchmark-phase-screen-resolution": "دقة الشاشة",
            "benchmark-report-label": "تقرير اختبار كاليدوسكوب",
            "benchmark-total-score": "المجموع الكلي",
            "benchmark-score-per-fullhd": "درجة العرض",
            "benchmark-calculation-score": "درجة الحساب",
            "benchmark-lines-calculation-score": "درجة الحساب (خطوط)",
            "benchmark-spots-calculation-score": "درجة الحساب (نقاط)",
            "benchmark-lines-rendering-score": "درجة العرض (خطوط)",
            "benchmark-spots-rendering-score": "درجة العرض (نقاط)",
            "benchmark-display-score": "درجة العرض",
            "benchmark-fps-score": "معدل الإطارات تحت الحمل المنخفض",
            "benchmark-screen-resolution-score": "درجة دقة الشاشة",
            "benchmark-screen-width": "عرض الشاشة",
            "benchmark-screen-height": "ارتفاع الشاشة",
            "benchmark-device-pixel-ratio": "نسبة بكسل الجهاز",
            "benchmark-screen-color-depth": "عمق لون الشاشة",
            "benchmark-description-device-pixel-ratio": "قد لا يتم الحصول على نسبة بكسل الجهاز بدقة حسب البيئة. إذا كان يجب أن تكون 1.2، فقد يتم تقريبها إلى 2. في هذه الحالة، جميع القيم باستثناء المجموع الكلي ومعدل الإطارات تحت الحمل المنخفض لن تكون دقيقة.",
            "benchmark-description-machine-web-browser": "الاختبار يشمل أداء الجهاز + أداء المتصفح، لذا قد تختلف النتائج بشكل كبير حسب المتصفح حتى على نفس الجهاز.",
            "benchmark-description-score-unit": "وحدة المجموع الكلي ودرجة العرض ودرجة الحساب هي عدد الطبقات × معدل الإطارات، أي عدد الطبقات التي يمكن معالجتها في ثانية واحدة.",
            "benchmark-description-total-score": "المجموع الكلي هو قيمة درجة العرض مقسومة على درجة دقة الشاشة.",
            "benchmark-description-calculation-score": "درجة الحساب هي أداء معالجة الرسوم المتحركة في الحالة المخفية. درجة العرض هي الأداء في الحالة المرئية.",
            "benchmark-description-rendering-score": "درجة العرض هي القيمة المقاسة مضروبة في درجة دقة الشاشة.",
            "benchmark-description-display-score": "درجة العرض هي قيمة درجة دقة الشاشة مضروبة في معدل الإطارات تحت الحمل المنخفض.",
            "benchmark-description-screen-resolution-score": "درجة دقة الشاشة هي كمية معلومات الشاشة مع { عرض الشاشة: 1920، ارتفاع الشاشة: 1080، نسبة بكسل الجهاز: 1، عمق لون الشاشة: 24 } كـ 1.",
            "Unmeasured": "غير مقاس",
            "UnmeasurablePoor": "غير قابل للقياس (أداء غير كافٍ)",
            "UnmeasurableRich": "غير قابل للقياس (أداء مفرط)",
            "FullPower": "أقصى طاقة",
            "HighLoad": "حمل مرتفع",
            "MediumLoad": "حمل متوسط",
            "LowLoad": "حمل منخفض",
            "WithLoad": "مع حمل"
        },
        "de": {
            "lang-label": "Deutsch",
            "lang-direction": "ltr",
            "Auto": "Auto",
            "description": "Kaleidoskop Web-Bildschirmschoner",
            "colorspace-label": "Farbraum:",
            "coloring-label": "Färbung:",
            "pattern-label": "Muster:",
            "lines": "Linien",
            "spots": "Punkte",
            "both": "Beides",
            "canvas-size-label": "Leinwandgröße:",
            "layers-label": "Ebenen:",
            "spots-layers-label": "Ebenen (Punkte):",
            "cycle-span-label": "Zyklusdauer:",
            "fuse-fps-label": "Sicherungs-FPS:",
            "frame-delay-label": "Frame-Verzögerung:",
            "easing-label": "Easing:",
            "with-fullscreen-label": "Vollbild:",
            "show-fps-label": "FPS anzeigen:",
            "clock-label": "Uhr:",
            "brightness-label": "Helligkeit:",
            "hide": "Ausblenden",
            "blend": "Mischen",
            "white": "Weiß",
            "black": "Schwarz",
            "system": "System",
            "alternate": "Alternierend",
            "rainbow": "Regenbogen",
            "language-label": "Sprache:",
            "url-label": "Link zu dieser Einstellung",
            "run-benchmark-label": "Benchmark ausführen",
            "informationFuseFps": "⚠️ Stoppt automatisch, wenn die FPS (Max) unter 'Sicherungs-FPS' fallen, um einen Absturz des Webbrowsers oder Betriebssystems zu vermeiden.",
            "timeUnitMs": "ms",
            "timeUnitS": "s",
            "timeUnitM": "m",
            "timeUnitH": "h",
            "timeUnitD": "d",
            "ago": "vor",
            "Hide UI": "UI ausblenden",
            "Play / Pause": "Abspielen / Pause",
            "Switch Pattern": "Muster wechseln",
            "Switch Coloring": "Färbung wechseln",
            "Scaling Canvas Size": "Leinwandgröße skalieren",
            "Increase / Decrease Frame Delay": "Frame-Verzögerung erhöhen / verringern",
            "Increase / Decrease Layer": "Ebene erhöhen / verringern",
            "Speed Down / Up": "Langsamer / Schneller",
            "FullScreen": "Vollbild",
            "Show FPS": "FPS anzeigen",
            "Switch Clock": "Uhr wechseln",
            "benchmark-abort": "Abbrechen",
            "benchmark-close": "Schließen",
            "benchmarking-in-progress": "Benchmark läuft",
            "benchmark-phase-preparation": "Vorbereitung",
            "benchmark-phase-screen-resolution": "Bildschirmauflösung",
            "benchmark-report-label": "Kaleidoskop Benchmark-Bericht",
            "benchmark-total-score": "Gesamtpunktzahl",
            "benchmark-score-per-fullhd": "Render-Punktzahl",
            "benchmark-calculation-score": "Berechnungspunktzahl",
            "benchmark-lines-calculation-score": "Berechnungspunktzahl (Linien)",
            "benchmark-spots-calculation-score": "Berechnungspunktzahl (Punkte)",
            "benchmark-lines-rendering-score": "Render-Punktzahl (Linien)",
            "benchmark-spots-rendering-score": "Render-Punktzahl (Punkte)",
            "benchmark-display-score": "Anzeige-Punktzahl",
            "benchmark-fps-score": "Framerate bei niedriger Last",
            "benchmark-screen-resolution-score": "Bildschirmauflösungspunktzahl",
            "benchmark-screen-width": "Bildschirmbreite",
            "benchmark-screen-height": "Bildschirmhöhe",
            "benchmark-device-pixel-ratio": "Geräte-Pixel-Verhältnis",
            "benchmark-screen-color-depth": "Bildschirmfarbtiefe",
            "benchmark-description-device-pixel-ratio": "Das tatsächliche Geräte-Pixel-Verhältnis kann je nach Umgebung ungenau sein. Zum Beispiel kann es, wenn es 1,2 sein sollte, auf 2 aufgerundet werden. In diesem Fall sind alle Werte außer der Gesamtpunktzahl und der Framerate bei niedriger Last ungenau. Bitte passen Sie die Bildschirmauflösung und Skalierungseinstellungen an, damit das Geräte-Pixel-Verhältnis korrekt ist.",
            "benchmark-description-machine-web-browser": "Die Messung ist die Maschinenleistung + die Leistung des Webbrowsers. Selbst auf demselben Rechner können unterschiedliche Browser zu völlig unterschiedlichen Ergebnissen führen.",
            "benchmark-description-score-unit": "Die Einheit der Gesamtpunktzahl, Render-Punktzahl und Berechnungspunktzahl ist die Anzahl der Ebenen x Framerate, also die Anzahl der Ebenen, die in einer Sekunde verarbeitet werden können.",
            "benchmark-description-total-score": "Die Gesamtpunktzahl ist der Wert, der sich ergibt, wenn die Render-Punktzahl durch die Bildschirmauflösungspunktzahl geteilt wird. Je besser das Display, desto höher die Renderlast, daher sinkt die Gesamtpunktzahl.",
            "benchmark-description-calculation-score": "Die Berechnungspunktzahl ist die Leistung der Animationsverarbeitung im versteckten Zustand. Die Render-Punktzahl ist die Leistung der Animationsverarbeitung im sichtbaren Zustand.",
            "benchmark-description-rendering-score": "Die Render-Punktzahl ist der gemessene Wert multipliziert mit der Bildschirmauflösungspunktzahl. Da dies der Wert bei Full HD ist, eignet sich dieser Wert besser zum Vergleich der Renderleistung mit anderen Maschinen als die Gesamtpunktzahl.",
            "benchmark-description-display-score": "Die Anzeige-Punktzahl ist der Wert, der sich ergibt, wenn die Bildschirmauflösungspunktzahl mit der Framerate bei niedriger Last multipliziert wird.",
            "benchmark-description-screen-resolution-score": "Die Bildschirmauflösungspunktzahl ist die Menge an Bildschirminformationen mit { Bildschirmbreite: 1920, Bildschirmhöhe: 1080, Geräte-Pixel-Verhältnis: 1, Bildschirmfarbtiefe: 24 } als 1.",
            "Unmeasured": "Nicht gemessen",
            "UnmeasurablePoor": "Nicht messbar (unzureichende Leistung)",
            "UnmeasurableRich": "Nicht messbar (übermäßige Leistung)",
            "FullPower": "Volle Leistung",
            "HighLoad": "Hohe Last",
            "MediumLoad": "Mittlere Last",
            "LowLoad": "Niedrige Last",
            "WithLoad": "Mit Last"
        },
        "en": {
            "lang-label": "English",
            "lang-direction": "ltr",
            "Auto": "Auto",
            "description": "Kaleidoscope Web Screensaver",
            "colorspace-label": "Color Space:",
            "coloring-label": "Coloring:",
            "pattern-label": "Pattern:",
            "lines": "Lines",
            "spots": "Spots",
            "both": "Both",
            "canvas-size-label": "Canvas Size:",
            "layers-label": "Layers:",
            "spots-layers-label": "Layers(Spots):",
            "cycle-span-label": "Cycle Span:",
            "fuse-fps-label": "Fuse FPS:",
            "frame-delay-label": "Frame Delay:",
            "easing-label": "Easing:",
            "with-fullscreen-label": "FullScreen:",
            "show-fps-label": "Show FPS:",
            "clock-label": "Clock:",
            "brightness-label": "Brightness:",
            "hide": "Hide",
            "blend": "Blend",
            "white": "White",
            "black": "Black",
            "system": "System",
            "alternate": "Alternate",
            "rainbow": "Rainbow",
            "language-label": "Language:",
            "url-label": "Link to this setting",
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
            "Increase / Decrease Frame Delay": "Increase / Decrease Frame Delay",
            "Increase / Decrease Layer": "Increase / Decrease Layer",
            "Speed Down / Up": "Speed Down / Up",
            "FullScreen": "FullScreen",
            "Show FPS": "Show FPS",
            "Switch Clock": "Switch Clock",
            "benchmark-abort": "Abort",
            "benchmark-close": "Close",
            "benchmarking-in-progress": "Benchmarking in progress",
            "benchmark-phase-preparation": "Preparation",
            "benchmark-phase-screen-resolution": "Screen Resolution",
            "benchmark-report-label": "Kaleidoscope Benchmark Report",
            "benchmark-total-score": "Total Score",
            "benchmark-score-per-fullhd": "Rendering Score",
            "benchmark-calculation-score": "Calculation Score",
            "benchmark-lines-calculation-score": "Calculation Score (lines)",
            "benchmark-spots-calculation-score": "Calculation Score (spots)",
            "benchmark-lines-rendering-score": "Rendering Score (lines)",
            "benchmark-spots-rendering-score": "Rendering Score (spots)",
            "benchmark-display-score": "Display Score",
            "benchmark-fps-score": "Low Load Frame Rate",
            "benchmark-screen-resolution-score": "Screen Resolution Score",
            "benchmark-screen-width": "Screen Width",
            "benchmark-screen-height": "Screen Height",
            "benchmark-device-pixel-ratio": "Device Pixel Ratio",
            "benchmark-screen-color-depth": "Screen Color Depth",
            "benchmark-description-device-pixel-ratio": "The actual device pixel ratio may not be obtained accurately depending on the environment. For example, if it should be 1.2, it may be rounded up to 2. In this case, all values except the total score and low load frame rate will not be accurate, so please adjust the display screen resolution and scaling settings to make the device pixel ratio correct.",
            "benchmark-description-machine-web-browser": "The measurement will be the machine performance + web browser performance, so even on the same machine, using a different web browser can result in completely different results.",
            "benchmark-description-score-unit": "The unit of total score, rendering score, and calculation score is the number of layers x frame rate, which is the number of layers that can be processed in one second.",
            "benchmark-description-total-score": "Total score is the value obtained by dividing the rendering score by the screen resolution score. The better the display, the higher the rendering load, so the total score decreases.",
            "benchmark-description-calculation-score": "Calculation score is the performance of animation processing in a hidden state. Rendering score is the performance of animation processing in a visible state.",
            "benchmark-description-rendering-score": "Rendering score is the measured value multiplied by the screen resolution score. Since this is the score when the display is Full HD, this value is more suitable for comparing rendering performance with other machines than the total score.",
            "benchmark-description-display-score": "Display score is the value obtained by multiplying the screen resolution score by the low load frame rate.",
            "benchmark-description-screen-resolution-score": "Screen resolution score is the amount of screen information with { Screen Width: 1920, Screen Height: 1080, Device Pixel Ratio: 1, Screen Color Depth: 24 } as 1.",
            "Unmeasured": "Unmeasured",
            "UnmeasurablePoor": "Unmeasurable (Insufficient Performance)",
            "UnmeasurableRich": "Unmeasurable (Excessive Performance)",
            "FullPower": "Full Power",
            "HighLoad": "High Load",
            "MediumLoad": "Medium Load",
            "LowLoad": "Low Load",
            "WithLoad": "With Load"
        },
        "es": {
            "lang-label": "Español",
            "lang-direction": "ltr",
            "Auto": "Auto",
            "description": "Protector de pantalla web de caleidoscopio",
            "colorspace-label": "Espacio de color:",
            "coloring-label": "Coloreado:",
            "pattern-label": "Patrón:",
            "lines": "Líneas",
            "spots": "Puntos",
            "both": "Ambos",
            "canvas-size-label": "Tamaño del lienzo:",
            "layers-label": "Capas:",
            "spots-layers-label": "Capas (Puntos):",
            "cycle-span-label": "Duración del ciclo:",
            "fuse-fps-label": "FPS de fusible:",
            "frame-delay-label": "Retraso de cuadro:",
            "easing-label": "Suavizado:",
            "with-fullscreen-label": "Pantalla completa:",
            "show-fps-label": "Mostrar FPS:",
            "clock-label": "Reloj:",
            "brightness-label": "Brillo:",
            "hide": "Ocultar",
            "blend": "Mezclar",
            "white": "Blanco",
            "black": "Negro",
            "system": "Sistema",
            "alternate": "Alternar",
            "rainbow": "Arcoíris",
            "language-label": "Idioma:",
            "url-label": "Enlace a esta configuración",
            "run-benchmark-label": "Ejecutar Benchmark",
            "informationFuseFps": "⚠️ Se detiene automáticamente si los FPS (máx) caen por debajo de 'FPS de fusible' para evitar que el navegador web o el sistema operativo se bloqueen.",
            "timeUnitMs": "ms",
            "timeUnitS": "s",
            "timeUnitM": "m",
            "timeUnitH": "h",
            "timeUnitD": "d",
            "ago": "hace",
            "Hide UI": "Ocultar UI",
            "Play / Pause": "Reproducir / Pausar",
            "Switch Pattern": "Cambiar patrón",
            "Switch Coloring": "Cambiar coloreado",
            "Scaling Canvas Size": "Escalar tamaño del lienzo",
            "Increase / Decrease Frame Delay": "Aumentar / Disminuir retraso de cuadro",
            "Increase / Decrease Layer": "Aumentar / Disminuir capa",
            "Speed Down / Up": "Disminuir / Aumentar velocidad",
            "FullScreen": "Pantalla completa",
            "Show FPS": "Mostrar FPS",
            "Switch Clock": "Cambiar reloj",
            "benchmark-abort": "Abortar",
            "benchmark-close": "Cerrar",
            "benchmarking-in-progress": "Benchmark en progreso",
            "benchmark-phase-preparation": "Preparación",
            "benchmark-phase-screen-resolution": "Resolución de pantalla",
            "benchmark-report-label": "Informe de Benchmark de Kaleidoscopio",
            "benchmark-total-score": "Puntuación total",
            "benchmark-score-per-fullhd": "Puntuación de renderizado",
            "benchmark-calculation-score": "Puntuación de cálculo",
            "benchmark-lines-calculation-score": "Puntuación de cálculo (líneas)",
            "benchmark-spots-calculation-score": "Puntuación de cálculo (puntos)",
            "benchmark-lines-rendering-score": "Puntuación de renderizado (líneas)",
            "benchmark-spots-rendering-score": "Puntuación de renderizado (puntos)",
            "benchmark-display-score": "Puntuación de pantalla",
            "benchmark-fps-score": "Frecuencia de cuadro en baja carga",
            "benchmark-screen-resolution-score": "Puntuación de resolución de pantalla",
            "benchmark-screen-width": "Ancho de pantalla",
            "benchmark-screen-height": "Altura de pantalla",
            "benchmark-device-pixel-ratio": "Relación de píxeles del dispositivo",
            "benchmark-screen-color-depth": "Profundidad de color de pantalla",
            "benchmark-description-device-pixel-ratio": "La relación de píxeles del dispositivo real puede no obtenerse con precisión dependiendo del entorno. Por ejemplo, si debería ser 1.2, puede redondearse a 2. En este caso, todos los valores excepto la puntuación total y la frecuencia de cuadro en baja carga no serán precisos, así que ajuste la resolución de pantalla y la configuración de escala para que la relación de píxeles del dispositivo sea correcta.",
            "benchmark-description-machine-web-browser": "La medición será el rendimiento de la máquina + el rendimiento del navegador web, por lo que incluso en la misma máquina, usar un navegador web diferente puede dar resultados completamente diferentes.",
            "benchmark-description-score-unit": "La unidad de la puntuación total, la puntuación de renderizado y la puntuación de cálculo es el número de capas x frecuencia de cuadro, que es el número de capas que se pueden procesar en un segundo.",
            "benchmark-description-total-score": "La puntuación total es el valor obtenido al dividir la puntuación de renderizado por la puntuación de resolución de pantalla. Cuanto mejor sea la pantalla, mayor será la carga de renderizado, por lo que la puntuación total disminuye.",
            "benchmark-description-calculation-score": "La puntuación de cálculo es el rendimiento del procesamiento de animación en estado oculto. La puntuación de renderizado es el rendimiento del procesamiento de animación en estado visible.",
            "benchmark-description-rendering-score": "La puntuación de renderizado es el valor medido multiplicado por la puntuación de resolución de pantalla. Como esta es la puntuación cuando la pantalla es Full HD, este valor es más adecuado para comparar el rendimiento de renderizado con otras máquinas que la puntuación total.",
            "benchmark-description-display-score": "La puntuación de pantalla es el valor obtenido multiplicando la puntuación de resolución de pantalla por la frecuencia de cuadro en baja carga.",
            "benchmark-description-screen-resolution-score": "La puntuación de resolución de pantalla es la cantidad de información de pantalla con { Ancho de pantalla: 1920, Altura de pantalla: 1080, Relación de píxeles del dispositivo: 1, Profundidad de color de pantalla: 24 } como 1.",
            "Unmeasured": "No medido",
            "UnmeasurablePoor": "No medible (rendimiento insuficiente)",
            "UnmeasurableRich": "No medible (rendimiento excesivo)",
            "FullPower": "Potencia máxima",
            "HighLoad": "Alta carga",
            "MediumLoad": "Carga media",
            "LowLoad": "Baja carga",
            "WithLoad": "Con carga"
        },
        "fa": {
            "lang-label": "فارسی",
            "lang-direction": "rtl",
            "Auto": "خودکار",
            "description": "محافظ صفحه وب کالیدوسکوپ",
            "colorspace-label": "فضای رنگ:",
            "coloring-label": "رنگ‌آمیزی:",
            "pattern-label": "الگو:",
            "lines": "خطوط",
            "spots": "نقاط",
            "both": "هر دو",
            "canvas-size-label": "اندازه بوم:",
            "layers-label": "لایه‌ها:",
            "spots-layers-label": "لایه‌ها (نقاط):",
            "cycle-span-label": "دوره چرخه:",
            "fuse-fps-label": "FPS فیوز:",
            "frame-delay-label": "تاخیر فریم:",
            "easing-label": "تسهیل:",
            "with-fullscreen-label": "تمام صفحه:",
            "show-fps-label": "نمایش FPS:",
            "clock-label": "ساعت:",
            "brightness-label": "روشنایی:",
            "hide": "مخفی",
            "blend": "ترکیب",
            "white": "سفید",
            "black": "سیاه",
            "system": "سیستم",
            "alternate": "متناوب",
            "rainbow": "رنگین‌کمان",
            "language-label": "زبان:",
            "url-label": "لینک به این تنظیمات",
            "run-benchmark-label": "اجرای بنچمارک",
            "informationFuseFps": "⚠️ اگر FPS(Max) کمتر از \"FPS فیوز\" شود، برای جلوگیری از کرش مرورگر یا سیستم عامل به طور خودکار متوقف می‌شود.",
            "timeUnitMs": "میلی‌ثانیه",
            "timeUnitS": "ثانیه",
            "timeUnitM": "دقیقه",
            "timeUnitH": "ساعت",
            "timeUnitD": "روز",
            "ago": "پیش",
            "Hide UI": "مخفی کردن UI",
            "Play / Pause": "پخش / توقف",
            "Switch Pattern": "تغییر الگو",
            "Switch Coloring": "تغییر رنگ‌آمیزی",
            "Scaling Canvas Size": "تغییر اندازه بوم",
            "Increase / Decrease Frame Delay": "افزایش/کاهش تاخیر فریم",
            "Increase / Decrease Layer": "افزایش/کاهش لایه",
            "Speed Down / Up": "کاهش/افزایش سرعت",
            "FullScreen": "تمام صفحه",
            "Show FPS": "نمایش FPS",
            "Switch Clock": "تغییر ساعت",
            "benchmark-abort": "لغو",
            "benchmark-close": "بستن",
            "benchmarking-in-progress": "در حال بنچمارک",
            "benchmark-phase-preparation": "آماده‌سازی",
            "benchmark-phase-screen-resolution": "وضوح صفحه",
            "benchmark-report-label": "گزارش بنچمارک کالیدوسکوپ",
            "benchmark-total-score": "امتیاز کل",
            "benchmark-score-per-fullhd": "امتیاز رندر",
            "benchmark-calculation-score": "امتیاز محاسبه",
            "benchmark-lines-calculation-score": "امتیاز محاسبه (خطوط)",
            "benchmark-spots-calculation-score": "امتیاز محاسبه (نقاط)",
            "benchmark-lines-rendering-score": "امتیاز رندر (خطوط)",
            "benchmark-spots-rendering-score": "امتیاز رندر (نقاط)",
            "benchmark-display-score": "امتیاز نمایش",
            "benchmark-fps-score": "نرخ فریم بار کم",
            "benchmark-screen-resolution-score": "امتیاز وضوح صفحه",
            "benchmark-screen-width": "عرض صفحه",
            "benchmark-screen-height": "ارتفاع صفحه",
            "benchmark-device-pixel-ratio": "نسبت پیکسل دستگاه",
            "benchmark-screen-color-depth": "عمق رنگ صفحه",
            "benchmark-description-device-pixel-ratio": "در برخی محیط‌ها نسبت پیکسل دستگاه به درستی به دست نمی‌آید. لطفاً تنظیمات وضوح و مقیاس صفحه را تنظیم کنید.",
            "benchmark-description-machine-web-browser": "عملکرد ماشین + مرورگر وب اندازه‌گیری می‌شود، بنابراین نتایج ممکن است متفاوت باشد.",
            "benchmark-description-score-unit": "واحد امتیاز کل، رندر و محاسبه تعداد لایه‌ها × نرخ فریم است.",
            "benchmark-description-total-score": "امتیاز کل از تقسیم امتیاز رندر بر امتیاز وضوح صفحه به دست می‌آید.",
            "benchmark-description-calculation-score": "امتیاز محاسبه عملکرد انیمیشن در حالت مخفی است.",
            "benchmark-description-rendering-score": "امتیاز رندر با ضرب مقدار اندازه‌گیری شده در امتیاز وضوح صفحه به دست می‌آید.",
            "benchmark-description-display-score": "امتیاز نمایش حاصل ضرب امتیاز وضوح صفحه و نرخ فریم بار کم است.",
            "benchmark-description-screen-resolution-score": "امتیاز وضوح صفحه بر اساس { عرض: 1920، ارتفاع: 1080، نسبت پیکسل: 1، عمق رنگ: 24 } برابر با 1 است.",
            "Unmeasured": "اندازه‌گیری نشده",
            "UnmeasurablePoor": "غیرقابل اندازه‌گیری (عملکرد ناکافی)",
            "UnmeasurableRich": "غیرقابل اندازه‌گیری (عملکرد بیش از حد)",
            "FullPower": "تمام قدرت",
            "HighLoad": "بار زیاد",
            "MediumLoad": "بار متوسط",
            "LowLoad": "بار کم",
            "WithLoad": "با بار"
        },
        "fr": {
            "lang-label": "Français",
            "lang-direction": "ltr",
            "Auto": "Auto",
            "description": "Économiseur d'écran Web Kaléidoscope",
            "colorspace-label": "Espace colorimétrique :",
            "coloring-label": "Coloration :",
            "pattern-label": "Motif :",
            "lines": "Lignes",
            "spots": "Points",
            "both": "Les deux",
            "canvas-size-label": "Taille du canevas :",
            "layers-label": "Couches :",
            "spots-layers-label": "Couches (Points) :",
            "cycle-span-label": "Durée du cycle :",
            "fuse-fps-label": "FPS de sécurité :",
            "frame-delay-label": "Délai d'image :",
            "easing-label": "Lissage :",
            "with-fullscreen-label": "Plein écran :",
            "show-fps-label": "Afficher FPS :",
            "clock-label": "Horloge :",
            "brightness-label": "Luminosité :",
            "hide": "Masquer",
            "blend": "Fusionner",
            "white": "Blanc",
            "black": "Noir",
            "system": "Système",
            "alternate": "Alterné",
            "rainbow": "Arc-en-ciel",
            "language-label": "Langue :",
            "url-label": "Lien vers ce paramètre",
            "run-benchmark-label": "Lancer le benchmark",
            "informationFuseFps": "⚠️ Arrêt automatique si le FPS(Max) descend sous \"FPS de sécurité\" pour éviter un crash du navigateur ou du système.",
            "timeUnitMs": "ms",
            "timeUnitS": "s",
            "timeUnitM": "min",
            "timeUnitH": "h",
            "timeUnitD": "j",
            "ago": "il y a",
            "Hide UI": "Masquer l'UI",
            "Play / Pause": "Lecture / Pause",
            "Switch Pattern": "Changer de motif",
            "Switch Coloring": "Changer la coloration",
            "Scaling Canvas Size": "Redimensionner le canevas",
            "Increase / Decrease Frame Delay": "Augmenter / Diminuer le délai d'image",
            "Increase / Decrease Layer": "Augmenter / Diminuer les couches",
            "Speed Down / Up": "Ralentir / Accélérer",
            "FullScreen": "Plein écran",
            "Show FPS": "Afficher FPS",
            "Switch Clock": "Changer l'horloge",
            "benchmark-abort": "Annuler",
            "benchmark-close": "Fermer",
            "benchmarking-in-progress": "Benchmark en cours",
            "benchmark-phase-preparation": "Préparation",
            "benchmark-phase-screen-resolution": "Résolution d'écran",
            "benchmark-report-label": "Rapport de benchmark Kaléidoscope",
            "benchmark-total-score": "Score total",
            "benchmark-score-per-fullhd": "Score de rendu",
            "benchmark-calculation-score": "Score de calcul",
            "benchmark-lines-calculation-score": "Score de calcul (lignes)",
            "benchmark-spots-calculation-score": "Score de calcul (points)",
            "benchmark-lines-rendering-score": "Score de rendu (lignes)",
            "benchmark-spots-rendering-score": "Score de rendu (points)",
            "benchmark-display-score": "Score d'affichage",
            "benchmark-fps-score": "FPS en faible charge",
            "benchmark-screen-resolution-score": "Score de résolution d'écran",
            "benchmark-screen-width": "Largeur d'écran",
            "benchmark-screen-height": "Hauteur d'écran",
            "benchmark-device-pixel-ratio": "Ratio de pixels de l'appareil",
            "benchmark-screen-color-depth": "Profondeur de couleur d'écran",
            "benchmark-description-device-pixel-ratio": "Le ratio de pixels de l'appareil peut ne pas être obtenu avec précision selon l'environnement. Par exemple, s'il devrait être 1,2, il peut être arrondi à 2. Dans ce cas, toutes les valeurs sauf le score total et le FPS en faible charge ne seront pas précises.",
            "benchmark-description-machine-web-browser": "Le benchmark mesure la performance de la machine + du navigateur, donc même sur la même machine, un navigateur différent peut donner des résultats très différents.",
            "benchmark-description-score-unit": "L'unité du score total, du score de rendu et du score de calcul est le nombre de couches x FPS, soit le nombre de couches pouvant être traitées en une seconde.",
            "benchmark-description-total-score": "Le score total est la valeur obtenue en divisant le score de rendu par le score de résolution d'écran.",
            "benchmark-description-calculation-score": "Le score de calcul est la performance de traitement d'animation en état caché. Le score de rendu est la performance en état visible.",
            "benchmark-description-rendering-score": "Le score de rendu est la valeur mesurée multipliée par le score de résolution d'écran.",
            "benchmark-description-display-score": "Le score d'affichage est la valeur obtenue en multipliant le score de résolution d'écran par le FPS en faible charge.",
            "benchmark-description-screen-resolution-score": "Le score de résolution d'écran est la quantité d'information d'écran avec { Largeur d'écran : 1920, Hauteur d'écran : 1080, Ratio de pixels de l'appareil : 1, Profondeur de couleur d'écran : 24 } comme 1.",
            "Unmeasured": "Non mesuré",
            "UnmeasurablePoor": "Non mesurable (performance insuffisante)",
            "UnmeasurableRich": "Non mesurable (performance excessive)",
            "FullPower": "Puissance maximale",
            "HighLoad": "Charge élevée",
            "MediumLoad": "Charge moyenne",
            "LowLoad": "Charge faible",
            "WithLoad": "Avec charge"
        },
        "hi": {
            "lang-label": "हिन्दी",
            "lang-direction": "ltr",
            "Auto": "स्वचालित",
            "description": "कालेइडोस्कोप वेब स्क्रीनसेवर",
            "colorspace-label": "रंग स्थान:",
            "coloring-label": "रंगाई:",
            "pattern-label": "पैटर्न:",
            "lines": "रेखाएँ",
            "spots": "धब्बे",
            "both": "दोनों",
            "canvas-size-label": "कैनवास आकार:",
            "layers-label": "परतें:",
            "spots-layers-label": "परतें(धब्बे):",
            "cycle-span-label": "चक्र अवधि:",
            "fuse-fps-label": "फ्यूज FPS:",
            "frame-delay-label": "फ्रेम विलंब:",
            "easing-label": "ईज़िंग:",
            "with-fullscreen-label": "पूर्ण स्क्रीन:",
            "show-fps-label": "FPS दिखाएँ:",
            "clock-label": "घड़ी:",
            "brightness-label": "चमक:",
            "hide": "छुपाएँ",
            "blend": "ब्लेंड",
            "white": "सफेद",
            "black": "काला",
            "system": "सिस्टम",
            "alternate": "वैकल्पिक",
            "rainbow": "इंद्रधनुष",
            "language-label": "भाषा:",
            "url-label": "इस सेटिंग का लिंक",
            "run-benchmark-label": "बेंचमार्क चलाएँ",
            "informationFuseFps": "⚠️ वेब ब्राउज़र या OS के क्रैश से बचने के लिए, यदि FPS(Max) \"फ्यूज FPS\" से नीचे चला जाता है तो यह स्वचालित रूप से रुक जाएगा।",
            "timeUnitMs": "मि.से.",
            "timeUnitS": "से.",
            "timeUnitM": "मि.",
            "timeUnitH": "घं.",
            "timeUnitD": "दिन",
            "ago": "पहले",
            "Hide UI": "UI छुपाएँ",
            "Play / Pause": "चलाएँ / रोकें",
            "Switch Pattern": "पैटर्न बदलें",
            "Switch Coloring": "रंगाई बदलें",
            "Scaling Canvas Size": "कैनवास आकार बदलें",
            "Increase / Decrease Frame Delay": "फ्रेम विलंब बढ़ाएँ/घटाएँ",
            "Increase / Decrease Layer": "परतें बढ़ाएँ/घटाएँ",
            "Speed Down / Up": "गति कम/अधिक करें",
            "FullScreen": "पूर्ण स्क्रीन",
            "Show FPS": "FPS दिखाएँ",
            "Switch Clock": "घड़ी बदलें",
            "benchmark-abort": "रद्द करें",
            "benchmark-close": "बंद करें",
            "benchmarking-in-progress": "बेंचमार्क चल रहा है",
            "benchmark-phase-preparation": "तैयारी",
            "benchmark-phase-screen-resolution": "स्क्रीन रेज़ोल्यूशन",
            "benchmark-report-label": "कालेइडोस्कोप बेंचमार्क रिपोर्ट",
            "benchmark-total-score": "कुल स्कोर",
            "benchmark-score-per-fullhd": "रेंडरिंग स्कोर",
            "benchmark-calculation-score": "गणना स्कोर",
            "benchmark-lines-calculation-score": "गणना स्कोर (रेखाएँ)",
            "benchmark-spots-calculation-score": "गणना स्कोर (धब्बे)",
            "benchmark-lines-rendering-score": "रेंडरिंग स्कोर (रेखाएँ)",
            "benchmark-spots-rendering-score": "रेंडरिंग स्कोर (धब्बे)",
            "benchmark-display-score": "डिस्प्ले स्कोर",
            "benchmark-fps-score": "कम लोड फ्रेम दर",
            "benchmark-screen-resolution-score": "स्क्रीन रेज़ोल्यूशन स्कोर",
            "benchmark-screen-width": "स्क्रीन चौड़ाई",
            "benchmark-screen-height": "स्क्रीन ऊँचाई",
            "benchmark-device-pixel-ratio": "डिवाइस पिक्सेल अनुपात",
            "benchmark-screen-color-depth": "स्क्रीन रंग गहराई",
            "benchmark-description-device-pixel-ratio": "पर्यावरण के अनुसार, वास्तविक डिवाइस पिक्सेल अनुपात सटीक रूप से प्राप्त नहीं हो सकता है। उदाहरण के लिए, यदि यह 1.2 होना चाहिए, तो यह 2 तक गोल हो सकता है। इस स्थिति में, कुल स्कोर और कम लोड फ्रेम दर को छोड़कर अन्य सभी मान सटीक नहीं होंगे, इसलिए कृपया डिवाइस पिक्सेल अनुपात को सही करने के लिए डिस्प्ले स्क्रीन रेज़ोल्यूशन और स्केलिंग सेटिंग्स समायोजित करें।",
            "benchmark-description-machine-web-browser": "माप मशीन प्रदर्शन + वेब ब्राउज़र प्रदर्शन का होगा, इसलिए एक ही मशीन पर अलग ब्राउज़र का उपयोग करने पर परिणाम पूरी तरह बदल सकते हैं।",
            "benchmark-description-score-unit": "कुल स्कोर, रेंडरिंग स्कोर और गणना स्कोर की इकाई लेयर x फ्रेम दर है, जो एक सेकंड में संसाधित की जा सकने वाली लेयर की संख्या है।",
            "benchmark-description-total-score": "कुल स्कोर रेंडरिंग स्कोर को स्क्रीन रेज़ोल्यूशन स्कोर से विभाजित करके प्राप्त किया गया मान है। बेहतर डिस्प्ले होने पर रेंडरिंग लोड अधिक होता है, जिससे कुल स्कोर कम हो जाता है।",
            "benchmark-description-calculation-score": "गणना स्कोर छुपी स्थिति में एनीमेशन प्रोसेसिंग का प्रदर्शन है। रेंडरिंग स्कोर दृश्य स्थिति में एनीमेशन प्रोसेसिंग का प्रदर्शन है।",
            "benchmark-description-rendering-score": "रेंडरिंग स्कोर मापे गए मान को स्क्रीन रेज़ोल्यूशन स्कोर से गुणा करके प्राप्त होता है। यह वह स्कोर है जब डिस्प्ले फुल HD है, इसलिए अन्य मशीनों के साथ तुलना के लिए यह मान अधिक उपयुक्त है।",
            "benchmark-description-display-score": "डिस्प्ले स्कोर स्क्रीन रेज़ोल्यूशन स्कोर और कम लोड फ्रेम दर को गुणा करके प्राप्त होता है।",
            "benchmark-description-screen-resolution-score": "स्क्रीन रेज़ोल्यूशन स्कोर { स्क्रीन चौड़ाई: 1920, स्क्रीन ऊँचाई: 1080, डिवाइस पिक्सेल अनुपात: 1, स्क्रीन रंग गहराई: 24 } को 1 मानकर स्क्रीन सूचना मात्रा है।",
            "Unmeasured": "मापा नहीं गया",
            "UnmeasurablePoor": "माप असंभव (कम प्रदर्शन)",
            "UnmeasurableRich": "माप असंभव (अत्यधिक प्रदर्शन)",
            "FullPower": "पूर्ण शक्ति",
            "HighLoad": "अधिक लोड",
            "MediumLoad": "मध्यम लोड",
            "LowLoad": "कम लोड",
            "WithLoad": "लोड के साथ"
        },
        "id": {
            "lang-label": "Bahasa Indonesia",
            "lang-direction": "ltr",
            "Auto": "Otomatis",
            "description": "Kaleidoskop Web Screensaver",
            "colorspace-label": "Ruang Warna:",
            "coloring-label": "Pewarnaan:",
            "pattern-label": "Pola:",
            "lines": "Garis",
            "spots": "Titik",
            "both": "Keduanya",
            "canvas-size-label": "Ukuran Kanvas:",
            "layers-label": "Lapisan:",
            "spots-layers-label": "Lapisan (Titik):",
            "cycle-span-label": "Rentang Siklus:",
            "fuse-fps-label": "Fuse FPS:",
            "frame-delay-label": "Penundaan Frame:",
            "easing-label": "Easing:",
            "with-fullscreen-label": "Layar Penuh:",
            "show-fps-label": "Tampilkan FPS:",
            "clock-label": "Jam:",
            "brightness-label": "Kecerahan:",
            "hide": "Sembunyikan",
            "blend": "Campur",
            "white": "Putih",
            "black": "Hitam",
            "system": "Sistem",
            "alternate": "Bergantian",
            "rainbow": "Pelangi",
            "language-label": "Bahasa:",
            "url-label": "Tautan ke pengaturan ini",
            "run-benchmark-label": "Jalankan Benchmark",
            "informationFuseFps": "⚠️ Akan berhenti otomatis jika FPS(Max) turun di bawah \"Fuse FPS\" untuk menghindari crash pada browser web atau OS.",
            "timeUnitMs": "ms",
            "timeUnitS": "d",
            "timeUnitM": "m",
            "timeUnitH": "j",
            "timeUnitD": "h",
            "ago": "yang lalu",
            "Hide UI": "Sembunyikan UI",
            "Play / Pause": "Putar / Jeda",
            "Switch Pattern": "Ganti Pola",
            "Switch Coloring": "Ganti Pewarnaan",
            "Scaling Canvas Size": "Skalakan Ukuran Kanvas",
            "Increase / Decrease Frame Delay": "Tambah / Kurangi Penundaan Frame",
            "Increase / Decrease Layer": "Tambah / Kurangi Lapisan",
            "Speed Down / Up": "Perlambat / Percepat",
            "FullScreen": "Layar Penuh",
            "Show FPS": "Tampilkan FPS",
            "Switch Clock": "Ganti Jam",
            "benchmark-abort": "Batalkan",
            "benchmark-close": "Tutup",
            "benchmarking-in-progress": "Benchmark sedang berlangsung",
            "benchmark-phase-preparation": "Persiapan",
            "benchmark-phase-screen-resolution": "Resolusi Layar",
            "benchmark-report-label": "Laporan Benchmark Kaleidoskop",
            "benchmark-total-score": "Skor Total",
            "benchmark-score-per-fullhd": "Skor Rendering",
            "benchmark-calculation-score": "Skor Perhitungan",
            "benchmark-lines-calculation-score": "Skor Perhitungan (garis)",
            "benchmark-spots-calculation-score": "Skor Perhitungan (titik)",
            "benchmark-lines-rendering-score": "Skor Rendering (garis)",
            "benchmark-spots-rendering-score": "Skor Rendering (titik)",
            "benchmark-display-score": "Skor Tampilan",
            "benchmark-fps-score": "Frame Rate Beban Rendah",
            "benchmark-screen-resolution-score": "Skor Resolusi Layar",
            "benchmark-screen-width": "Lebar Layar",
            "benchmark-screen-height": "Tinggi Layar",
            "benchmark-device-pixel-ratio": "Rasio Piksel Perangkat",
            "benchmark-screen-color-depth": "Kedalaman Warna Layar",
            "benchmark-description-device-pixel-ratio": "Rasio piksel perangkat sebenarnya mungkin tidak diperoleh secara akurat tergantung pada lingkungan. Misalnya, jika seharusnya 1.2, bisa dibulatkan menjadi 2. Dalam kasus ini, semua nilai kecuali skor total dan frame rate beban rendah tidak akan akurat, jadi silakan sesuaikan pengaturan resolusi layar dan skala agar rasio piksel perangkat benar.",
            "benchmark-description-machine-web-browser": "Pengukuran adalah performa mesin + browser web, jadi bahkan di mesin yang sama, menggunakan browser web yang berbeda dapat menghasilkan hasil yang sangat berbeda.",
            "benchmark-description-score-unit": "Satuan skor total, skor rendering, dan skor perhitungan adalah jumlah lapisan x frame rate, yaitu jumlah lapisan yang dapat diproses dalam satu detik.",
            "benchmark-description-total-score": "Skor total adalah nilai yang diperoleh dengan membagi skor rendering dengan skor resolusi layar. Semakin baik tampilan, semakin tinggi beban rendering, sehingga skor total menurun.",
            "benchmark-description-calculation-score": "Skor perhitungan adalah performa pemrosesan animasi dalam keadaan tersembunyi. Skor rendering adalah performa pemrosesan animasi dalam keadaan terlihat.",
            "benchmark-description-rendering-score": "Skor rendering adalah nilai yang diukur dikalikan dengan skor resolusi layar. Karena ini adalah skor saat tampilan Full HD, nilai ini lebih cocok untuk membandingkan performa rendering dengan mesin lain daripada skor total.",
            "benchmark-description-display-score": "Skor tampilan adalah nilai yang diperoleh dengan mengalikan skor resolusi layar dengan frame rate beban rendah.",
            "benchmark-description-screen-resolution-score": "Skor resolusi layar adalah jumlah informasi layar dengan { Lebar Layar: 1920, Tinggi Layar: 1080, Rasio Piksel Perangkat: 1, Kedalaman Warna Layar: 24 } sebagai 1.",
            "Unmeasured": "Belum diukur",
            "UnmeasurablePoor": "Tidak dapat diukur (Performa Tidak Cukup)",
            "UnmeasurableRich": "Tidak dapat diukur (Performa Berlebihan)",
            "FullPower": "Daya Penuh",
            "HighLoad": "Beban Tinggi",
            "MediumLoad": "Beban Sedang",
            "LowLoad": "Beban Rendah",
            "WithLoad": "Dengan Beban"
        },
        "it": {
            "lang-label": "Italiano",
            "lang-direction": "ltr",
            "Auto": "Auto",
            "description": "Salvaschermo Web Kaleidoscope",
            "colorspace-label": "Spazio Colore:",
            "coloring-label": "Colorazione:",
            "pattern-label": "Motivo:",
            "lines": "Linee",
            "spots": "Macchie",
            "both": "Entrambi",
            "canvas-size-label": "Dimensione Canvas:",
            "layers-label": "Livelli:",
            "spots-layers-label": "Livelli(Macchie):",
            "cycle-span-label": "Durata Ciclo:",
            "fuse-fps-label": "FPS Fusibile:",
            "frame-delay-label": "Ritardo Frame:",
            "easing-label": "Easing:",
            "with-fullscreen-label": "Schermo Intero:",
            "show-fps-label": "Mostra FPS:",
            "clock-label": "Orologio:",
            "brightness-label": "Luminosità:",
            "hide": "Nascondi",
            "blend": "Miscela",
            "white": "Bianco",
            "black": "Nero",
            "system": "Sistema",
            "alternate": "Alterna",
            "rainbow": "Arcobaleno",
            "language-label": "Lingua:",
            "url-label": "Link a questa impostazione",
            "run-benchmark-label": "Esegui Benchmark",
            "informationFuseFps": "⚠️ Si arresta automaticamente se FPS(Max) scende sotto \"FPS Fusibile\" per evitare il crash del browser o del sistema operativo.",
            "timeUnitMs": "ms",
            "timeUnitS": "s",
            "timeUnitM": "m",
            "timeUnitH": "h",
            "timeUnitD": "g",
            "ago": "fa",
            "Hide UI": "Nascondi UI",
            "Play / Pause": "Riproduci / Pausa",
            "Switch Pattern": "Cambia Motivo",
            "Switch Coloring": "Cambia Colorazione",
            "Scaling Canvas Size": "Ridimensiona Canvas",
            "Increase / Decrease Frame Delay": "Aumenta / Diminuisci Ritardo Frame",
            "Increase / Decrease Layer": "Aumenta / Diminuisci Livello",
            "Speed Down / Up": "Rallenta / Accelera",
            "FullScreen": "Schermo Intero",
            "Show FPS": "Mostra FPS",
            "Switch Clock": "Cambia Orologio",
            "benchmark-abort": "Interrompi",
            "benchmark-close": "Chiudi",
            "benchmarking-in-progress": "Benchmark in corso",
            "benchmark-phase-preparation": "Preparazione",
            "benchmark-phase-screen-resolution": "Risoluzione Schermo",
            "benchmark-report-label": "Rapporto Benchmark Kaleidoscope",
            "benchmark-total-score": "Punteggio Totale",
            "benchmark-score-per-fullhd": "Punteggio Rendering",
            "benchmark-calculation-score": "Punteggio Calcolo",
            "benchmark-lines-calculation-score": "Punteggio Calcolo (linee)",
            "benchmark-spots-calculation-score": "Punteggio Calcolo (macchie)",
            "benchmark-lines-rendering-score": "Punteggio Rendering (linee)",
            "benchmark-spots-rendering-score": "Punteggio Rendering (macchie)",
            "benchmark-display-score": "Punteggio Display",
            "benchmark-fps-score": "Frame Rate a Basso Carico",
            "benchmark-screen-resolution-score": "Punteggio Risoluzione Schermo",
            "benchmark-screen-width": "Larghezza Schermo",
            "benchmark-screen-height": "Altezza Schermo",
            "benchmark-device-pixel-ratio": "Rapporto Pixel Dispositivo",
            "benchmark-screen-color-depth": "Profondità Colore Schermo",
            "benchmark-description-device-pixel-ratio": "Il rapporto pixel del dispositivo potrebbe non essere rilevato correttamente a seconda dell'ambiente. Ad esempio, se dovrebbe essere 1.2, potrebbe essere arrotondato a 2. In questo caso, tutti i valori tranne il punteggio totale e il frame rate a basso carico non saranno accurati, quindi regola la risoluzione e la scala dello schermo per correggere il rapporto pixel.",
            "benchmark-description-machine-web-browser": "La misurazione riguarda le prestazioni della macchina + browser web, quindi anche sullo stesso computer, browser diversi possono dare risultati molto diversi.",
            "benchmark-description-score-unit": "L'unità di punteggio totale, rendering e calcolo è il numero di livelli x frame rate, cioè il numero di livelli processabili in un secondo.",
            "benchmark-description-total-score": "Il punteggio totale si ottiene dividendo il punteggio di rendering per quello di risoluzione schermo. Migliore è il display, maggiore è il carico di rendering, quindi il punteggio totale diminuisce.",
            "benchmark-description-calculation-score": "Il punteggio di calcolo misura le prestazioni dell'animazione in stato nascosto. Il punteggio di rendering misura le prestazioni in stato visibile.",
            "benchmark-description-rendering-score": "Il punteggio di rendering è il valore misurato moltiplicato per il punteggio di risoluzione schermo. Questo valore è più adatto per confrontare le prestazioni di rendering tra macchine diverse rispetto al punteggio totale.",
            "benchmark-description-display-score": "Il punteggio display è il punteggio di risoluzione schermo moltiplicato per il frame rate a basso carico.",
            "benchmark-description-screen-resolution-score": "Il punteggio di risoluzione schermo è la quantità di informazioni dello schermo con { Larghezza: 1920, Altezza: 1080, Rapporto Pixel: 1, Profondità Colore: 24 } come 1.",
            "Unmeasured": "Non misurato",
            "UnmeasurablePoor": "Non misurabile (Prestazioni insufficienti)",
            "UnmeasurableRich": "Non misurabile (Prestazioni eccessive)",
            "FullPower": "Massima Potenza",
            "HighLoad": "Alto Carico",
            "MediumLoad": "Carico Medio",
            "LowLoad": "Basso Carico",
            "WithLoad": "Con Carico"
        },
        "ja": {
            "lang-label": "日本語",
            "lang-direction": "ltr",
            "Auto": "自動",
            "description": "万華鏡 Web スクリーンセーバー",
            "colorspace-label": "色空間:",
            "coloring-label": "カラーリング:",
            "pattern-label": "パターン:",
            "lines": "ライン",
            "spots": "スポット",
            "both": "両方",
            "canvas-size-label": "キャンバスサイズ:",
            "layers-label": "レイヤー数:",
            "spots-layers-label": "レイヤー数(スポット):",
            "cycle-span-label": "サイクルスパン:",
            "fuse-fps-label": "フューズ FPS:",
            "frame-delay-label": "フレーム遅延:",
            "easing-label": "イージング:",
            "with-fullscreen-label": "フルスクリーン:",
            "show-fps-label": "FPS を表示:",
            "clock-label": "時計:",
            "brightness-label": "明るさ:",
            "hide": "非表示",
            "blend": "ブレンド",
            "white": "ホワイト",
            "black": "ブラック",
            "system": "システム",
            "alternate": "交互",
            "rainbow": "レインボー",
            "language-label": "言語:",
            "url-label": "この設定のリンク",
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
            "Increase / Decrease Frame Delay": "フレーム遅延増減",
            "Increase / Decrease Layer": "レイヤー増減",
            "Speed Down / Up": "スピード ダウン/アップ",
            "FullScreen": "フルスクリーン",
            "Show FPS": "FPS 表示",
            "Switch Clock": "時計切り替え",
            "benchmark-abort": "中断",
            "benchmark-close": "閉じる",
            "benchmarking-in-progress": "ベンチマーク計測中",
            "benchmark-phase-preparation": "準備",
            "benchmark-phase-screen-resolution": "画面解像度",
            "benchmark-report-label": "Kaleidoscope ベンチマークレポート",
            "benchmark-total-score": "総合スコア",
            "benchmark-score-per-fullhd": "描画スコア",
            "benchmark-calculation-score": "計算スコア",
            "benchmark-lines-calculation-score": "計算スコア(lines)",
            "benchmark-spots-calculation-score": "計算スコア(spots)",
            "benchmark-lines-rendering-score": "描画スコア(lines)",
            "benchmark-spots-rendering-score": "描画スコア(spots)",
            "benchmark-display-score": "ディスプレイスコア",
            "benchmark-fps-score": "低負荷時フレームレート",
            "benchmark-screen-resolution-score": "画面解像度スコア",
            "benchmark-screen-width": "画面横幅",
            "benchmark-screen-height": "画面高さ",
            "benchmark-device-pixel-ratio": "デバイスピクセル比",
            "benchmark-screen-color-depth": "画面色深度",
            "benchmark-description-device-pixel-ratio": "環境によっては正確なデバイスピクセル比を取得できません。例えば、本来であれば 1.2 なのに端数が切り上げられて 2 となる事があります。この場合、総合スコアと低負荷時フレームレート以外は正確な値とならないので、デバイスピクセル比が正しくなる様にディスプレイの画面解像度やスケーリングの設定を調整してください。",
            "benchmark-description-machine-web-browser": "マシン性能+Webブラウザ性能の計測になるので、同じマシン上でも別のWebブラウザを使うと全然異なる結果になり得ます。",
            "benchmark-description-score-unit": "総合スコア、描画スコア、計算スコアの単位はレイヤー数xフレームレートで、一秒間に処理可能なレイヤー数となります。",
            "benchmark-description-total-score": "総合スコアは描画スコアを画面解像度スコアで割った値です。良いディスプレイである程、レンダリングの負荷が上がる為に総合スコアは低下します。",
            "benchmark-description-calculation-score": "計算スコアは非表示状態でのアニメーション処理性能です。描画スコアは、表示状態でのアニメーション処理性能です。",
            "benchmark-description-rendering-score": "描画スコアは実測値に画面解像度スコアをかけた値です。ディスプレイが Full HD の場合のスコアとなるので、他のマシンと描画性能を比較したい時に総合スコアよりこちらの値が適しています。",
            "benchmark-description-display-score": "ディスプレイスコアは画面解像度スコアと低負荷時フレームレートを掛け合わせた値です。",
            "benchmark-description-screen-resolution-score": "画面解像度スコアは { 画面横幅: 1920, 画面高さ: 1080, デバイスピクセル比: 1, 画面色深度: 24 } を 1 とした画面情報量です。",
            "Unmeasured": "未計測",
            "UnmeasurablePoor": "計測不能(性能不足)",
            "UnmeasurableRich": "計測不能(性能過剰)",
            "FullPower": "フルパワー",
            "HighLoad": "高負荷",
            "MediumLoad": "中負荷",
            "LowLoad": "低負荷",
            "WithLoad": "負荷あり"
        },
        "ko": {
            "lang-label": "한국어",
            "lang-direction": "ltr",
            "Auto": "자동",
            "description": "칼레이도스코프 웹 스크린세이버",
            "colorspace-label": "색상 공간:",
            "coloring-label": "채색:",
            "pattern-label": "패턴:",
            "lines": "라인",
            "spots": "스팟",
            "both": "둘 다",
            "canvas-size-label": "캔버스 크기:",
            "layers-label": "레이어:",
            "spots-layers-label": "레이어(스팟):",
            "cycle-span-label": "사이클 스팬:",
            "fuse-fps-label": "퓨즈 FPS:",
            "frame-delay-label": "프레임 지연:",
            "easing-label": "이지잉:",
            "with-fullscreen-label": "전체 화면:",
            "show-fps-label": "FPS 표시:",
            "clock-label": "시계:",
            "brightness-label": "밝기:",
            "hide": "숨기기",
            "blend": "블렌드",
            "white": "화이트",
            "black": "블랙",
            "system": "시스템",
            "alternate": "교대",
            "rainbow": "무지개",
            "language-label": "언어:",
            "url-label": "이 설정에 대한 링크",
            "run-benchmark-label": "벤치마크 실행",
            "informationFuseFps": "⚠️ 웹 브라우저나 OS가 크래시되는 것을 방지하기 위해 FPS(Max)가 \"퓨즈 FPS\" 이하로 떨어지면 자동으로 중지됩니다.",
            "timeUnitMs": "ms",
            "timeUnitS": "초",
            "timeUnitM": "분",
            "timeUnitH": "시간",
            "timeUnitD": "일",
            "ago": "전",
            "Hide UI": "UI 숨기기",
            "Play / Pause": "재생 / 일시정지",
            "Switch Pattern": "패턴 전환",
            "Switch Coloring": "채색 전환",
            "Scaling Canvas Size": "캔버스 크기 조정",
            "Increase / Decrease Frame Delay": "프레임 지연 증가/감소",
            "Increase / Decrease Layer": "레이어 증가/감소",
            "Speed Down / Up": "속도 감소/증가",
            "FullScreen": "전체 화면",
            "Show FPS": "FPS 표시",
            "Switch Clock": "시계 전환",
            "benchmark-abort": "중단",
            "benchmark-close": "닫기",
            "benchmarking-in-progress": "벤치마크 진행 중",
            "benchmark-phase-preparation": "준비",
            "benchmark-phase-screen-resolution": "화면 해상도",
            "benchmark-report-label": "칼레이도스코프 벤치마크 리포트",
            "benchmark-total-score": "총점",
            "benchmark-score-per-fullhd": "렌더링 점수",
            "benchmark-calculation-score": "계산 점수",
            "benchmark-lines-calculation-score": "계산 점수(라인)",
            "benchmark-spots-calculation-score": "계산 점수(스팟)",
            "benchmark-lines-rendering-score": "렌더링 점수(라인)",
            "benchmark-spots-rendering-score": "렌더링 점수(스팟)",
            "benchmark-display-score": "디스플레이 점수",
            "benchmark-fps-score": "저부하 프레임레이트",
            "benchmark-screen-resolution-score": "화면 해상도 점수",
            "benchmark-screen-width": "화면 너비",
            "benchmark-screen-height": "화면 높이",
            "benchmark-device-pixel-ratio": "디바이스 픽셀 비율",
            "benchmark-screen-color-depth": "화면 색상 깊이",
            "benchmark-description-device-pixel-ratio": "환경에 따라 정확한 디바이스 픽셀 비율을 얻지 못할 수 있습니다. 예를 들어, 실제로는 1.2여야 하지만 반올림되어 2가 될 수 있습니다. 이 경우 총점과 저부하 프레임레이트를 제외한 값은 정확하지 않으므로, 디바이스 픽셀 비율이 올바르게 되도록 디스플레이 해상도 및 스케일링 설정을 조정하세요.",
            "benchmark-description-machine-web-browser": "측정은 머신 성능 + 웹 브라우저 성능이므로, 같은 머신에서도 다른 웹 브라우저를 사용하면 완전히 다른 결과가 나올 수 있습니다.",
            "benchmark-description-score-unit": "총점, 렌더링 점수, 계산 점수의 단위는 레이어 수 x 프레임레이트로, 1초에 처리 가능한 레이어 수입니다.",
            "benchmark-description-total-score": "총점은 렌더링 점수를 화면 해상도 점수로 나눈 값입니다. 디스플레이가 좋을수록 렌더링 부하가 증가하므로 총점은 낮아집니다.",
            "benchmark-description-calculation-score": "계산 점수는 비표시 상태에서의 애니메이션 처리 성능입니다. 렌더링 점수는 표시 상태에서의 애니메이션 처리 성능입니다.",
            "benchmark-description-rendering-score": "렌더링 점수는 실측값에 화면 해상도 점수를 곱한 값입니다. 디스플레이가 Full HD일 때의 점수이므로, 다른 머신과 렌더링 성능을 비교할 때 총점보다 이 값이 더 적합합니다.",
            "benchmark-description-display-score": "디스플레이 점수는 화면 해상도 점수와 저부하 프레임레이트를 곱한 값입니다.",
            "benchmark-description-screen-resolution-score": "화면 해상도 점수는 { 화면 너비: 1920, 화면 높이: 1080, 디바이스 픽셀 비율: 1, 화면 색상 깊이: 24 }를 1로 한 화면 정보량입니다.",
            "Unmeasured": "미측정",
            "UnmeasurablePoor": "측정 불가(성능 부족)",
            "UnmeasurableRich": "측정 불가(성능 과다)",
            "FullPower": "풀 파워",
            "HighLoad": "고부하",
            "MediumLoad": "중부하",
            "LowLoad": "저부하",
            "WithLoad": "부하 있음"
        },
        "pt": {
            "lang-label": "Português",
            "lang-direction": "ltr",
            "Auto": "Auto",
            "description": "Protetor de Tela Web Caleidoscópio",
            "colorspace-label": "Espaço de cor:",
            "coloring-label": "Colorização:",
            "pattern-label": "Padrão:",
            "lines": "Linhas",
            "spots": "Pontos",
            "both": "Ambos",
            "canvas-size-label": "Tamanho da tela:",
            "layers-label": "Camadas:",
            "spots-layers-label": "Camadas (Pontos):",
            "cycle-span-label": "Duração do ciclo:",
            "fuse-fps-label": "FPS de segurança:",
            "frame-delay-label": "Atraso de quadro:",
            "easing-label": "Suavização:",
            "with-fullscreen-label": "Tela cheia:",
            "show-fps-label": "Mostrar FPS:",
            "clock-label": "Relógio:",
            "brightness-label": "Brilho:",
            "hide": "Ocultar",
            "blend": "Misturar",
            "white": "Branco",
            "black": "Preto",
            "system": "Sistema",
            "alternate": "Alternado",
            "rainbow": "Arco-íris",
            "language-label": "Idioma:",
            "url-label": "Link para esta configuração",
            "run-benchmark-label": "Executar Benchmark",
            "informationFuseFps": "⚠️ Parada automática se o FPS(Max) cair abaixo do \"FPS de segurança\" para evitar travamento do navegador ou do sistema.",
            "timeUnitMs": "ms",
            "timeUnitS": "s",
            "timeUnitM": "min",
            "timeUnitH": "h",
            "timeUnitD": "d",
            "ago": "atrás",
            "Hide UI": "Ocultar UI",
            "Play / Pause": "Reproduzir / Pausar",
            "Switch Pattern": "Alternar padrão",
            "Switch Coloring": "Alternar coloração",
            "Scaling Canvas Size": "Redimensionar tela",
            "Increase / Decrease Frame Delay": "Aumentar / Diminuir atraso de quadro",
            "Increase / Decrease Layer": "Aumentar / Diminuir camadas",
            "Speed Down / Up": "Diminuir / Aumentar velocidade",
            "FullScreen": "Tela cheia",
            "Show FPS": "Mostrar FPS",
            "Switch Clock": "Alternar relógio",
            "benchmark-abort": "Abortar",
            "benchmark-close": "Fechar",
            "benchmarking-in-progress": "Benchmark em andamento",
            "benchmark-phase-preparation": "Preparação",
            "benchmark-phase-screen-resolution": "Resolução da tela",
            "benchmark-report-label": "Relatório de Benchmark Caleidoscópio",
            "benchmark-total-score": "Pontuação total",
            "benchmark-score-per-fullhd": "Pontuação de renderização",
            "benchmark-calculation-score": "Pontuação de cálculo",
            "benchmark-lines-calculation-score": "Pontuação de cálculo (linhas)",
            "benchmark-spots-calculation-score": "Pontuação de cálculo (pontos)",
            "benchmark-lines-rendering-score": "Pontuação de renderização (linhas)",
            "benchmark-spots-rendering-score": "Pontuação de renderização (pontos)",
            "benchmark-display-score": "Pontuação de exibição",
            "benchmark-fps-score": "Taxa de quadros em baixa carga",
            "benchmark-screen-resolution-score": "Pontuação de resolução da tela",
            "benchmark-screen-width": "Largura da tela",
            "benchmark-screen-height": "Altura da tela",
            "benchmark-device-pixel-ratio": "Proporção de pixels do dispositivo",
            "benchmark-screen-color-depth": "Profundidade de cor da tela",
            "benchmark-description-device-pixel-ratio": "A proporção real de pixels do dispositivo pode não ser obtida com precisão dependendo do ambiente. Por exemplo, se deveria ser 1,2, pode ser arredondada para 2. Nesse caso, todos os valores, exceto a pontuação total e a taxa de quadros em baixa carga, não serão precisos.",
            "benchmark-description-machine-web-browser": "A medição será do desempenho da máquina + navegador, então mesmo na mesma máquina, usar um navegador diferente pode resultar em resultados completamente diferentes.",
            "benchmark-description-score-unit": "A unidade da pontuação total, pontuação de renderização e pontuação de cálculo é o número de camadas x taxa de quadros, ou seja, o número de camadas que podem ser processadas em um segundo.",
            "benchmark-description-total-score": "A pontuação total é o valor obtido dividindo a pontuação de renderização pela pontuação de resolução da tela.",
            "benchmark-description-calculation-score": "A pontuação de cálculo é o desempenho do processamento de animação em estado oculto. A pontuação de renderização é o desempenho em estado visível.",
            "benchmark-description-rendering-score": "A pontuação de renderização é o valor medido multiplicado pela pontuação de resolução da tela.",
            "benchmark-description-display-score": "A pontuação de exibição é o valor obtido multiplicando a pontuação de resolução da tela pela taxa de quadros em baixa carga.",
            "benchmark-description-screen-resolution-score": "A pontuação de resolução da tela é a quantidade de informação da tela com { Largura da tela: 1920, Altura da tela: 1080, Proporção de pixels do dispositivo: 1, Profundidade de cor da tela: 24 } como 1.",
            "Unmeasured": "Não medido",
            "UnmeasurablePoor": "Não mensurável (desempenho insuficiente)",
            "UnmeasurableRich": "Não mensurável (desempenho excessivo)",
            "FullPower": "Potência máxima",
            "HighLoad": "Alta carga",
            "MediumLoad": "Carga média",
            "LowLoad": "Baixa carga",
            "WithLoad": "Com carga"
        },
        "ru": {
            "lang-label": "Русский",
            "lang-direction": "ltr",
            "Auto": "Авто",
            "description": "Веб-скринсейвер калейдоскоп",
            "colorspace-label": "Цветовое пространство:",
            "coloring-label": "Окрашивание:",
            "pattern-label": "Узор:",
            "lines": "Линии",
            "spots": "Пятна",
            "both": "Оба",
            "canvas-size-label": "Размер холста:",
            "layers-label": "Слои:",
            "spots-layers-label": "Слои (пятна):",
            "cycle-span-label": "Длительность цикла:",
            "fuse-fps-label": "Порог FPS:",
            "frame-delay-label": "Задержка кадра:",
            "easing-label": "Сглаживание:",
            "with-fullscreen-label": "Полный экран:",
            "show-fps-label": "Показать FPS:",
            "clock-label": "Часы:",
            "brightness-label": "Яркость:",
            "hide": "Скрыть",
            "blend": "Смешивание",
            "white": "Белый",
            "black": "Чёрный",
            "system": "Система",
            "alternate": "Альтернативный",
            "rainbow": "Радуга",
            "language-label": "Язык:",
            "url-label": "Ссылка на эти настройки",
            "run-benchmark-label": "Запустить тест",
            "informationFuseFps": "⚠️ Автоматическая остановка, если FPS(Max) падает ниже 'Порог FPS', чтобы избежать сбоя браузера или ОС.",
            "timeUnitMs": "мс",
            "timeUnitS": "с",
            "timeUnitM": "м",
            "timeUnitH": "ч",
            "timeUnitD": "д",
            "ago": "назад",
            "Hide UI": "Скрыть интерфейс",
            "Play / Pause": "Воспроизвести / Пауза",
            "Switch Pattern": "Сменить узор",
            "Switch Coloring": "Сменить окрашивание",
            "Scaling Canvas Size": "Масштабировать холст",
            "Increase / Decrease Frame Delay": "Увеличить / уменьшить задержку кадра",
            "Increase / Decrease Layer": "Увеличить / уменьшить слои",
            "Speed Down / Up": "Замедлить / ускорить",
            "FullScreen": "Полный экран",
            "Show FPS": "Показать FPS",
            "Switch Clock": "Сменить часы",
            "benchmark-abort": "Прервать",
            "benchmark-close": "Закрыть",
            "benchmarking-in-progress": "Тестирование в процессе",
            "benchmark-phase-preparation": "Подготовка",
            "benchmark-phase-screen-resolution": "Разрешение экрана",
            "benchmark-report-label": "Отчёт о тесте калейдоскопа",
            "benchmark-total-score": "Общий балл",
            "benchmark-score-per-fullhd": "Баллы рендеринга",
            "benchmark-calculation-score": "Баллы вычислений",
            "benchmark-lines-calculation-score": "Баллы вычислений (линии)",
            "benchmark-spots-calculation-score": "Баллы вычислений (пятна)",
            "benchmark-lines-rendering-score": "Баллы рендеринга (линии)",
            "benchmark-spots-rendering-score": "Баллы рендеринга (пятна)",
            "benchmark-display-score": "Баллы дисплея",
            "benchmark-fps-score": "FPS при низкой нагрузке",
            "benchmark-screen-resolution-score": "Баллы разрешения экрана",
            "benchmark-screen-width": "Ширина экрана",
            "benchmark-screen-height": "Высота экрана",
            "benchmark-device-pixel-ratio": "Плотность пикселей устройства",
            "benchmark-screen-color-depth": "Глубина цвета экрана",
            "benchmark-description-device-pixel-ratio": "В зависимости от окружения фактическая плотность пикселей устройства может быть определена неверно. Например, если должна быть 1.2, может быть округлена до 2. В этом случае все значения, кроме общего балла и FPS при низкой нагрузке, будут неточными. Пожалуйста, скорректируйте разрешение и масштабирование экрана для правильного значения.",
            "benchmark-description-machine-web-browser": "Тест измеряет производительность машины + браузера, поэтому даже на одном устройстве с разными браузерами результаты могут отличаться.",
            "benchmark-description-score-unit": "Единица измерения общего балла, баллов рендеринга и вычислений — количество слоёв x FPS, то есть сколько слоёв можно обработать за секунду.",
            "benchmark-description-total-score": "Общий балл — это баллы рендеринга, делённые на баллы разрешения экрана. Чем лучше дисплей, тем выше нагрузка на рендеринг, и тем ниже общий балл.",
            "benchmark-description-calculation-score": "Баллы вычислений — производительность анимации в скрытом состоянии. Баллы рендеринга — производительность анимации в видимом состоянии.",
            "benchmark-description-rendering-score": "Баллы рендеринга — это измеренное значение, умноженное на баллы разрешения экрана. Для сравнения рендеринга с другими машинами этот показатель более показателен, чем общий балл, так как он основан на Full HD.",
            "benchmark-description-display-score": "Баллы дисплея — это баллы разрешения экрана, умноженные на FPS при низкой нагрузке.",
            "benchmark-description-screen-resolution-score": "Баллы разрешения экрана — это количество информации экрана при { ширина: 1920, высота: 1080, плотность пикселей: 1, глубина цвета: 24 } = 1.",
            "Unmeasured": "Не измерено",
            "UnmeasurablePoor": "Не измеримо (недостаточно производительности)",
            "UnmeasurableRich": "Не измеримо (слишком высокая производительность)",
            "FullPower": "Полная мощность",
            "HighLoad": "Высокая нагрузка",
            "MediumLoad": "Средняя нагрузка",
            "LowLoad": "Низкая нагрузка",
            "WithLoad": "С нагрузкой"
        },
        "th": {
            "lang-label": "ไทย",
            "lang-direction": "ltr",
            "Auto": "อัตโนมัติ",
            "description": "สกรีนเซฟเวอร์เว็บลายกล้องคาไลโดสโคป",
            "colorspace-label": "พื้นที่สี:",
            "coloring-label": "การระบายสี:",
            "pattern-label": "รูปแบบ:",
            "lines": "เส้น",
            "spots": "จุด",
            "both": "ทั้งสอง",
            "canvas-size-label": "ขนาดผ้าใบ:",
            "layers-label": "จำนวนเลเยอร์:",
            "spots-layers-label": "จำนวนเลเยอร์ (จุด):",
            "cycle-span-label": "ช่วงรอบ:",
            "fuse-fps-label": "ฟิวส์ FPS:",
            "frame-delay-label": "ดีเลย์เฟรม:",
            "easing-label": "อีซิ่ง:",
            "with-fullscreen-label": "เต็มหน้าจอ:",
            "show-fps-label": "แสดง FPS:",
            "clock-label": "นาฬิกา:",
            "brightness-label": "ความสว่าง:",
            "hide": "ซ่อน",
            "blend": "ผสม",
            "white": "ขาว",
            "black": "ดำ",
            "system": "ระบบ",
            "alternate": "สลับ",
            "rainbow": "สายรุ้ง",
            "language-label": "ภาษา:",
            "url-label": "ลิงก์ไปยังการตั้งค่านี้",
            "run-benchmark-label": "รันเบนช์มาร์ก",
            "informationFuseFps": "⚠️ จะหยุดโดยอัตโนมัติหาก FPS (สูงสุด) ต่ำกว่า \"ฟิวส์ FPS\" เพื่อหลีกเลี่ยงการทำให้เว็บเบราว์เซอร์หรือระบบปฏิบัติการขัดข้อง",
            "timeUnitMs": "มิลลิวินาที",
            "timeUnitS": "วินาที",
            "timeUnitM": "นาที",
            "timeUnitH": "ชั่วโมง",
            "timeUnitD": "วัน",
            "ago": "ที่แล้ว",
            "Hide UI": "ซ่อน UI",
            "Play / Pause": "เล่น / หยุดชั่วคราว",
            "Switch Pattern": "เปลี่ยนรูปแบบ",
            "Switch Coloring": "เปลี่ยนการระบายสี",
            "Scaling Canvas Size": "ปรับขนาดผ้าใบ",
            "Increase / Decrease Frame Delay": "เพิ่ม / ลดดีเลย์เฟรม",
            "Increase / Decrease Layer": "เพิ่ม / ลดเลเยอร์",
            "Speed Down / Up": "ลด / เพิ่มความเร็ว",
            "FullScreen": "เต็มหน้าจอ",
            "Show FPS": "แสดง FPS",
            "Switch Clock": "เปลี่ยนนาฬิกา",
            "benchmark-abort": "ยกเลิก",
            "benchmark-close": "ปิด",
            "benchmarking-in-progress": "กำลังทดสอบเบนช์มาร์ก",
            "benchmark-phase-preparation": "เตรียมการ",
            "benchmark-phase-screen-resolution": "ความละเอียดหน้าจอ",
            "benchmark-report-label": "รายงานเบนช์มาร์ก Kaleidoscope",
            "benchmark-total-score": "คะแนนรวม",
            "benchmark-score-per-fullhd": "คะแนนการเรนเดอร์",
            "benchmark-calculation-score": "คะแนนการคำนวณ",
            "benchmark-lines-calculation-score": "คะแนนการคำนวณ (เส้น)",
            "benchmark-spots-calculation-score": "คะแนนการคำนวณ (จุด)",
            "benchmark-lines-rendering-score": "คะแนนการเรนเดอร์ (เส้น)",
            "benchmark-spots-rendering-score": "คะแนนการเรนเดอร์ (จุด)",
            "benchmark-display-score": "คะแนนการแสดงผล",
            "benchmark-fps-score": "อัตราเฟรมขณะโหลดต่ำ",
            "benchmark-screen-resolution-score": "คะแนนความละเอียดหน้าจอ",
            "benchmark-screen-width": "ความกว้างหน้าจอ",
            "benchmark-screen-height": "ความสูงหน้าจอ",
            "benchmark-device-pixel-ratio": "อัตราส่วนพิกเซลของอุปกรณ์",
            "benchmark-screen-color-depth": "ความลึกสีหน้าจอ",
            "benchmark-description-device-pixel-ratio": "ในบางสภาพแวดล้อม อาจไม่สามารถรับอัตราส่วนพิกเซลของอุปกรณ์ได้อย่างถูกต้อง ตัวอย่างเช่น หากควรเป็น 1.2 อาจถูกปัดขึ้นเป็น 2 ในกรณีนี้ ค่าทั้งหมดยกเว้นคะแนนรวมและอัตราเฟรมขณะโหลดต่ำจะไม่ถูกต้อง กรุณาปรับการตั้งค่าความละเอียดหน้าจอและการปรับขนาดเพื่อให้อัตราส่วนพิกเซลของอุปกรณ์ถูกต้อง",
            "benchmark-description-machine-web-browser": "การวัดจะเป็นประสิทธิภาพของเครื่อง + เว็บเบราว์เซอร์ ดังนั้นแม้จะใช้เครื่องเดียวกัน แต่ใช้เว็บเบราว์เซอร์ต่างกันก็อาจได้ผลลัพธ์ที่แตกต่างกันโดยสิ้นเชิง",
            "benchmark-description-score-unit": "หน่วยของคะแนนรวม คะแนนการเรนเดอร์ และคะแนนการคำนวณ คือจำนวนเลเยอร์ x อัตราเฟรม ซึ่งเป็นจำนวนเลเยอร์ที่สามารถประมวลผลได้ในหนึ่งวินาที",
            "benchmark-description-total-score": "คะแนนรวมคือค่าที่ได้จากการหารคะแนนการเรนเดอร์ด้วยคะแนนความละเอียดหน้าจอ ยิ่งจอแสดงผลดีเท่าไร ภาระการเรนเดอร์ก็จะสูงขึ้น คะแนนรวมจึงลดลง",
            "benchmark-description-calculation-score": "คะแนนการคำนวณคือประสิทธิภาพการประมวลผลแอนิเมชันในสถานะซ่อน คะแนนการเรนเดอร์คือประสิทธิภาพการประมวลผลแอนิเมชันในสถานะแสดงผล",
            "benchmark-description-rendering-score": "คะแนนการเรนเดอร์คือค่าที่วัดได้คูณด้วยคะแนนความละเอียดหน้าจอ เนื่องจากเป็นคะแนนเมื่อจอแสดงผลเป็น Full HD ค่านี้จึงเหมาะสำหรับเปรียบเทียบประสิทธิภาพการเรนเดอร์กับเครื่องอื่นมากกว่าคะแนนรวม",
            "benchmark-description-display-score": "คะแนนการแสดงผลคือค่าที่ได้จากการคูณคะแนนความละเอียดหน้าจอกับอัตราเฟรมขณะโหลดต่ำ",
            "benchmark-description-screen-resolution-score": "คะแนนความละเอียดหน้าจอคือปริมาณข้อมูลหน้าจอโดย { ความกว้างหน้าจอ: 1920, ความสูงหน้าจอ: 1080, อัตราส่วนพิกเซลของอุปกรณ์: 1, ความลึกสีหน้าจอ: 24 } เป็น 1",
            "Unmeasured": "ยังไม่ได้วัด",
            "UnmeasurablePoor": "ไม่สามารถวัดได้ (ประสิทธิภาพไม่เพียงพอ)",
            "UnmeasurableRich": "ไม่สามารถวัดได้ (ประสิทธิภาพสูงเกินไป)",
            "FullPower": "พลังเต็มที่",
            "HighLoad": "โหลดสูง",
            "MediumLoad": "โหลดปานกลาง",
            "LowLoad": "โหลดต่ำ",
            "WithLoad": "มีโหลด"
        },
        "tr": {
            "lang-label": "Türkçe",
            "lang-direction": "ltr",
            "Auto": "Otomatik",
            "description": "Kaleidoscope Web Ekran Koruyucu",
            "colorspace-label": "Renk Uzayı:",
            "coloring-label": "Renklendirme:",
            "pattern-label": "Desen:",
            "lines": "Çizgiler",
            "spots": "Noktalar",
            "both": "Her ikisi",
            "canvas-size-label": "Tuval Boyutu:",
            "layers-label": "Katmanlar:",
            "spots-layers-label": "Katmanlar (Noktalar):",
            "cycle-span-label": "Döngü Süresi:",
            "fuse-fps-label": "Sigorta FPS:",
            "frame-delay-label": "Kare Gecikmesi:",
            "easing-label": "Yumuşatma:",
            "with-fullscreen-label": "Tam Ekran:",
            "show-fps-label": "FPS Göster:",
            "clock-label": "Saat:",
            "brightness-label": "Parlaklık:",
            "hide": "Gizle",
            "blend": "Karıştır",
            "white": "Beyaz",
            "black": "Siyah",
            "system": "Sistem",
            "alternate": "Alternatif",
            "rainbow": "Gökkuşağı",
            "language-label": "Dil:",
            "url-label": "Bu ayara bağlantı",
            "run-benchmark-label": "Benchmark Çalıştır",
            "informationFuseFps": "⚠️ FPS (Maks) 'Sigorta FPS' değerinin altına düşerse, web tarayıcısı veya işletim sistemi çökmesini önlemek için otomatik olarak durur.",
            "timeUnitMs": "ms",
            "timeUnitS": "sn",
            "timeUnitM": "dk",
            "timeUnitH": "sa",
            "timeUnitD": "gün",
            "ago": "önce",
            "Hide UI": "Arayüzü Gizle",
            "Play / Pause": "Oynat / Duraklat",
            "Switch Pattern": "Deseni Değiştir",
            "Switch Coloring": "Renklendirmeyi Değiştir",
            "Scaling Canvas Size": "Tuval Boyutunu Ölçekle",
            "Increase / Decrease Frame Delay": "Kare Gecikmesini Artır / Azalt",
            "Increase / Decrease Layer": "Katmanı Artır / Azalt",
            "Speed Down / Up": "Yavaşlat / Hızlandır",
            "FullScreen": "Tam Ekran",
            "Show FPS": "FPS Göster",
            "Switch Clock": "Saati Değiştir",
            "benchmark-abort": "İptal",
            "benchmark-close": "Kapat",
            "benchmarking-in-progress": "Benchmark devam ediyor",
            "benchmark-phase-preparation": "Hazırlık",
            "benchmark-phase-screen-resolution": "Ekran Çözünürlüğü",
            "benchmark-report-label": "Kaleidoscope Benchmark Raporu",
            "benchmark-total-score": "Toplam Puan",
            "benchmark-score-per-fullhd": "Render Puanı",
            "benchmark-calculation-score": "Hesaplama Puanı",
            "benchmark-lines-calculation-score": "Hesaplama Puanı (çizgiler)",
            "benchmark-spots-calculation-score": "Hesaplama Puanı (noktalar)",
            "benchmark-lines-rendering-score": "Render Puanı (çizgiler)",
            "benchmark-spots-rendering-score": "Render Puanı (noktalar)",
            "benchmark-display-score": "Ekran Puanı",
            "benchmark-fps-score": "Düşük Yük FPS",
            "benchmark-screen-resolution-score": "Ekran Çözünürlüğü Puanı",
            "benchmark-screen-width": "Ekran Genişliği",
            "benchmark-screen-height": "Ekran Yüksekliği",
            "benchmark-device-pixel-ratio": "Cihaz Piksel Oranı",
            "benchmark-screen-color-depth": "Ekran Renk Derinliği",
            "benchmark-description-device-pixel-ratio": "Ortamına bağlı olarak gerçek cihaz piksel oranı doğru alınamayabilir. Örneğin, aslında 1.2 olması gerekirken 2 olarak yuvarlanabilir. Bu durumda, toplam puan ve düşük yük FPS hariç tüm değerler doğru olmayacaktır, bu yüzden cihaz piksel oranı doğru olacak şekilde ekran çözünürlüğü ve ölçeklendirme ayarlarını düzenleyin.",
            "benchmark-description-machine-web-browser": "Ölçüm, makine performansı + web tarayıcı performansı olacaktır, bu nedenle aynı makinede farklı bir web tarayıcısı kullanmak tamamen farklı sonuçlar verebilir.",
            "benchmark-description-score-unit": "Toplam puan, render puanı ve hesaplama puanının birimi, katman sayısı x kare hızı olup, bir saniyede işlenebilen katman sayısıdır.",
            "benchmark-description-total-score": "Toplam puan, render puanının ekran çözünürlüğü puanına bölünmesiyle elde edilir. Ekran ne kadar iyi olursa, render yükü o kadar artar ve toplam puan azalır.",
            "benchmark-description-calculation-score": "Hesaplama puanı, gizli durumda animasyon işleme performansıdır. Render puanı, görünür durumda animasyon işleme performansıdır.",
            "benchmark-description-rendering-score": "Render puanı, ölçülen değerin ekran çözünürlüğü puanı ile çarpılmasıdır. Bu, ekran Full HD olduğunda alınan puandır, bu nedenle diğer makinelerle render performansını karşılaştırmak için toplam puandan daha uygundur.",
            "benchmark-description-display-score": "Ekran puanı, ekran çözünürlüğü puanı ile düşük yük FPS'nin çarpılmasıyla elde edilir.",
            "benchmark-description-screen-resolution-score": "Ekran çözünürlüğü puanı, { Ekran Genişliği: 1920, Ekran Yüksekliği: 1080, Cihaz Piksel Oranı: 1, Ekran Renk Derinliği: 24 } ile 1 olarak alınan ekran bilgi miktarıdır.",
            "Unmeasured": "Ölçülmedi",
            "UnmeasurablePoor": "Ölçülemez (Yetersiz Performans)",
            "UnmeasurableRich": "Ölçülemez (Aşırı Performans)",
            "FullPower": "Tam Güç",
            "HighLoad": "Yüksek Yük",
            "MediumLoad": "Orta Yük",
            "LowLoad": "Düşük Yük",
            "WithLoad": "Yük ile"
        },
        "zh-cn": {
            "lang-label": "简体中文",
            "lang-direction": "ltr",
            "Auto": "自动",
            "description": "万花筒网页屏保",
            "colorspace-label": "色彩空间:",
            "coloring-label": "着色:",
            "pattern-label": "图案:",
            "lines": "线条",
            "spots": "斑点",
            "both": "两者",
            "canvas-size-label": "画布尺寸:",
            "layers-label": "图层数:",
            "spots-layers-label": "图层数(斑点):",
            "cycle-span-label": "周期跨度:",
            "fuse-fps-label": "保险丝 FPS:",
            "frame-delay-label": "帧延迟:",
            "easing-label": "缓动:",
            "with-fullscreen-label": "全屏:",
            "show-fps-label": "显示 FPS:",
            "clock-label": "时钟:",
            "brightness-label": "亮度:",
            "hide": "隐藏",
            "blend": "混合",
            "white": "白色",
            "black": "黑色",
            "system": "系统",
            "alternate": "交替",
            "rainbow": "彩虹",
            "language-label": "语言:",
            "url-label": "此设置的链接",
            "run-benchmark-label": "运行基准测试",
            "informationFuseFps": "⚠️ 如果 FPS(Max) 低于 \"保险丝 FPS\"，将自动停止以避免浏览器或操作系统崩溃。",
            "timeUnitMs": "毫秒",
            "timeUnitS": "秒",
            "timeUnitM": "分",
            "timeUnitH": "小时",
            "timeUnitD": "天",
            "ago": "前",
            "Hide UI": "隐藏界面",
            "Play / Pause": "播放 / 暂停",
            "Switch Pattern": "切换图案",
            "Switch Coloring": "切换着色",
            "Scaling Canvas Size": "缩放画布尺寸",
            "Increase / Decrease Frame Delay": "增加 / 减少帧延迟",
            "Increase / Decrease Layer": "增加 / 减少图层",
            "Speed Down / Up": "减速 / 加速",
            "FullScreen": "全屏",
            "Show FPS": "显示 FPS",
            "Switch Clock": "切换时钟",
            "benchmark-abort": "中止",
            "benchmark-close": "关闭",
            "benchmarking-in-progress": "基准测试进行中",
            "benchmark-phase-preparation": "准备",
            "benchmark-phase-screen-resolution": "屏幕分辨率",
            "benchmark-report-label": "万花筒基准测试报告",
            "benchmark-total-score": "总分",
            "benchmark-score-per-fullhd": "渲染分数",
            "benchmark-calculation-score": "计算分数",
            "benchmark-lines-calculation-score": "计算分数(线条)",
            "benchmark-spots-calculation-score": "计算分数(斑点)",
            "benchmark-lines-rendering-score": "渲染分数(线条)",
            "benchmark-spots-rendering-score": "渲染分数(斑点)",
            "benchmark-display-score": "显示分数",
            "benchmark-fps-score": "低负载时帧率",
            "benchmark-screen-resolution-score": "屏幕分辨率分数",
            "benchmark-screen-width": "屏幕宽度",
            "benchmark-screen-height": "屏幕高度",
            "benchmark-device-pixel-ratio": "设备像素比",
            "benchmark-screen-color-depth": "屏幕色深",
            "benchmark-description-device-pixel-ratio": "根据环境不同，实际设备像素比可能无法准确获取。例如，应该为 1.2 但被四舍五入为 2。在这种情况下，除总分和低负载时帧率外，其余值都不准确，请调整显示器分辨率和缩放设置以获得正确的设备像素比。",
            "benchmark-description-machine-web-browser": "该测试为机器性能+浏览器性能的综合测量，因此即使在同一台机器上，使用不同浏览器也可能得到完全不同的结果。",
            "benchmark-description-score-unit": "总分、渲染分数、计算分数的单位为图层数 x 帧率，表示每秒可处理的图层数。",
            "benchmark-description-total-score": "总分为渲染分数除以屏幕分辨率分数。显示器越好，渲染负载越高，总分越低。",
            "benchmark-description-calculation-score": "计算分数为隐藏状态下动画处理性能。渲染分数为显示状态下动画处理性能。",
            "benchmark-description-rendering-score": "渲染分数为实测值乘以屏幕分辨率分数。若要与其他机器比较渲染性能，这个值比总分更适合，因为它以 Full HD 显示器为基准。",
            "benchmark-description-display-score": "显示分数为屏幕分辨率分数乘以低负载时帧率。",
            "benchmark-description-screen-resolution-score": "屏幕分辨率分数以 { 屏幕宽度: 1920, 屏幕高度: 1080, 设备像素比: 1, 屏幕色深: 24 } 为 1 的屏幕信息量。",
            "Unmeasured": "未测量",
            "UnmeasurablePoor": "无法测量(性能不足)",
            "UnmeasurableRich": "无法测量(性能过剩)",
            "FullPower": "全功率",
            "HighLoad": "高负载",
            "MediumLoad": "中负载",
            "LowLoad": "低负载",
            "WithLoad": "有负载"
        },
        "zh-tw": {
            "lang-label": "繁體中文",
            "lang-direction": "ltr",
            "Auto": "自動",
            "description": "萬花筒網頁螢幕保護程式",
            "colorspace-label": "色彩空間:",
            "coloring-label": "著色:",
            "pattern-label": "圖案:",
            "lines": "線條",
            "spots": "斑點",
            "both": "兩者",
            "canvas-size-label": "畫布尺寸:",
            "layers-label": "圖層數:",
            "spots-layers-label": "圖層數(斑點):",
            "cycle-span-label": "週期跨度:",
            "fuse-fps-label": "保險絲 FPS:",
            "frame-delay-label": "幀延遲:",
            "easing-label": "緩動:",
            "with-fullscreen-label": "全螢幕:",
            "show-fps-label": "顯示 FPS:",
            "clock-label": "時鐘:",
            "brightness-label": "亮度:",
            "hide": "隱藏",
            "blend": "混合",
            "white": "白色",
            "black": "黑色",
            "system": "系統",
            "alternate": "交替",
            "rainbow": "彩虹",
            "language-label": "語言:",
            "url-label": "此設定的連結",
            "run-benchmark-label": "執行效能測試",
            "informationFuseFps": "⚠️ 若 FPS(Max) 低於 \"保險絲 FPS\"，將自動停止以避免瀏覽器或作業系統當機。",
            "timeUnitMs": "毫秒",
            "timeUnitS": "秒",
            "timeUnitM": "分",
            "timeUnitH": "小時",
            "timeUnitD": "天",
            "ago": "前",
            "Hide UI": "隱藏介面",
            "Play / Pause": "播放 / 暫停",
            "Switch Pattern": "切換圖案",
            "Switch Coloring": "切換著色",
            "Scaling Canvas Size": "縮放畫布尺寸",
            "Increase / Decrease Frame Delay": "增加 / 減少幀延遲",
            "Increase / Decrease Layer": "增加 / 減少圖層",
            "Speed Down / Up": "減速 / 加速",
            "FullScreen": "全螢幕",
            "Show FPS": "顯示 FPS",
            "Switch Clock": "切換時鐘",
            "benchmark-abort": "中止",
            "benchmark-close": "關閉",
            "benchmarking-in-progress": "效能測試進行中",
            "benchmark-phase-preparation": "準備",
            "benchmark-phase-screen-resolution": "螢幕解析度",
            "benchmark-report-label": "萬花筒效能測試報告",
            "benchmark-total-score": "總分",
            "benchmark-score-per-fullhd": "繪圖分數",
            "benchmark-calculation-score": "計算分數",
            "benchmark-lines-calculation-score": "計算分數(線條)",
            "benchmark-spots-calculation-score": "計算分數(斑點)",
            "benchmark-lines-rendering-score": "繪圖分數(線條)",
            "benchmark-spots-rendering-score": "繪圖分數(斑點)",
            "benchmark-display-score": "顯示分數",
            "benchmark-fps-score": "低負載時幀率",
            "benchmark-screen-resolution-score": "螢幕解析度分數",
            "benchmark-screen-width": "螢幕寬度",
            "benchmark-screen-height": "螢幕高度",
            "benchmark-device-pixel-ratio": "裝置像素比",
            "benchmark-screen-color-depth": "螢幕色彩深度",
            "benchmark-description-device-pixel-ratio": "根據環境不同，實際裝置像素比可能無法正確取得。例如，應為 1.2 但被四捨五入為 2。此時，除了總分和低負載時幀率外，其餘值都不正確，請調整顯示器解析度與縮放設定以取得正確的裝置像素比。",
            "benchmark-description-machine-web-browser": "此測試為機器效能+瀏覽器效能的綜合測量，因此即使在同一台機器上，使用不同瀏覽器也可能得到完全不同的結果。",
            "benchmark-description-score-unit": "總分、繪圖分數、計算分數的單位為圖層數 x 幀率，表示每秒可處理的圖層數。",
            "benchmark-description-total-score": "總分為繪圖分數除以螢幕解析度分數。顯示器越好，繪圖負載越高，總分越低。",
            "benchmark-description-calculation-score": "計算分數為隱藏狀態下動畫處理效能。繪圖分數為顯示狀態下動畫處理效能。",
            "benchmark-description-rendering-score": "繪圖分數為實測值乘以螢幕解析度分數。若要與其他機器比較繪圖效能，這個值比總分更適合，因為它以 Full HD 顯示器為基準。",
            "benchmark-description-display-score": "顯示分數為螢幕解析度分數乘以低負載時幀率。",
            "benchmark-description-screen-resolution-score": "螢幕解析度分數以 { 螢幕寬度: 1920, 螢幕高度: 1080, 裝置像素比: 1, 螢幕色彩深度: 24 } 為 1 的螢幕資訊量。",
            "Unmeasured": "未測量",
            "UnmeasurablePoor": "無法測量(效能不足)",
            "UnmeasurableRich": "無法測量(效能過剩)",
            "FullPower": "全功率",
            "HighLoad": "高負載",
            "MediumLoad": "中負載",
            "LowLoad": "低負載",
            "WithLoad": "有負載"
        }
    };
});
define("script/library/locale", ["require", "exports", "script/tools/array", "locale/generated/master"], function (require, exports, array_1, localeMaster) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locale = void 0;
    localeMaster = __importStar(localeMaster);
    var Locale;
    (function (Locale) {
        Locale.master = localeMaster.localeMaster;
        var supportedLangs = Object.keys(Locale.master);
        var systemLang = navigator.language.toLowerCase();
        var getSegments = function (text, separator, segments) {
            return text.split(separator).slice(0, segments).join(separator);
        };
        var getMatchLang = function (lang) {
            var _a, _b;
            return (_b = (_a = array_1.Array.lookupValue(supportedLangs, getSegments(lang, "-", 2))) !== null && _a !== void 0 ? _a : array_1.Array.lookupValue(supportedLangs, getSegments(lang, "-", 1))) !== null && _b !== void 0 ? _b : "en";
        };
        var defaultLang = getMatchLang(systemLang);
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
        Locale.getDirection = function (l) {
            return Locale.master[l !== null && l !== void 0 ? l : lang]["lang-direction"];
        };
        Locale.isRtl = function (l) {
            return "rtl" === Locale.getDirection(l);
        };
        Locale.isLtr = function (l) {
            return "ltr" === Locale.getDirection(l);
        };
        Locale.toRtl = function (text, f) {
            return false === f ? text : "\u202B".concat(text, "\u202C");
        };
        Locale.map = function (key, l) {
            return "" === key ? "" : Locale.master[l !== null && l !== void 0 ? l : lang][key];
        };
        Locale.getLocaleList = function () {
            return __spreadArray(["Auto"], supportedLangs, true);
        };
    })(Locale || (exports.Locale = Locale = {}));
});
define("resource/config", [], {
    "applicationTitle": "Kaleidoscope Web Screensaver",
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
    "maximumFractionDigits": 2,
    "startWait": 750,
    "fullscreenAdditionalWait": 750,
    "benchmark": {
        "startWait": 1750,
        "stableWait": 1750,
        "adjustLayersWait": 300,
        "nextPatternWait": 1500,
        "screenResolutionWait": 1000,
        "refreshRateWait": 1750,
        "endWait": 1000,
        "pixelUnit": 2073600,
        "colorDepthUnit": 24,
        "fpsUnit": 60,
        "decimalDigits": 2
    },
    "clock": {
        "alternate": {
            "span": 47000
        },
        "dateFormat": {
            "weekday": "long",
            "year": "numeric",
            "month": "long",
            "day": "numeric"
        },
        "timeFormat": {
            "hour": "2-digit",
            "minute": "2-digit",
            "second": "2-digit"
        }
    }
});
define("script/library/ui", ["require", "exports", "resource/config", "script/tools/type-guards"], function (require, exports, config_json_1, type_guards_2) {
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
        UI.getFullscreenElement = function () { var _a, _b; return (_b = (_a = document.fullscreenElement) !== null && _a !== void 0 ? _a : ("webkitFullscreenElement" in document ? document.webkitFullscreenElement : null)) !== null && _b !== void 0 ? _b : null; };
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
            if (null !== UI.getFullscreenElement()) {
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
            if (!type_guards_2.TypeGuards.hasValue(result)) {
                console.error("🦋 FIXME: UI.getElementById.NotExistsDom", id);
            }
            else if (tag !== result.tagName.toLowerCase()) {
                console.error("🦋 FIXME: UI.getElementById.InvalidDom", id, tag, result);
            }
            return result;
        };
        UI.querySelector = function (tag, selectors, parent) {
            var result = (parent !== null && parent !== void 0 ? parent : document).querySelector(selectors);
            if (!type_guards_2.TypeGuards.hasValue(result)) {
                console.error("🦋 FIXME: UI.querySelector.NotExistsDom", selectors);
            }
            else if (tag !== result.tagName.toLowerCase()) {
                console.error("🦋 FIXME: UI.querySelector.InvalidDom", selectors, tag, result);
            }
            return result;
        };
        UI.setTextContent = function (element, text) {
            if (element.textContent !== text) {
                element.textContent = text;
            }
        };
        UI.setStyle = function (element, name, value) {
            var _a;
            if (((_a = element.style.getPropertyValue(name)) !== null && _a !== void 0 ? _a : "") !== (value !== null && value !== void 0 ? value : "")) {
                if (undefined === value || null === value || "" === value) {
                    element.style.removeProperty(name);
                }
                else {
                    element.style.setProperty(name, value);
                }
            }
        };
    })(UI || (exports.UI = UI = {}));
});
define("script/library/control", ["require", "exports", "script/tools/array", "script/library/ui"], function (require, exports, array_2, ui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Control = void 0;
    var Control;
    (function (Control) {
        var makeSelectOption = function (value, text) {
            var option = document.createElement("option");
            option.value = value;
            option.textContent = text;
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
        Control.getDomId = function (data) {
            return "id" in data ? data.id :
                "dom" in data ? data.dom.id :
                    undefined;
        };
        Control.eventLog = function (data) {
            return console.log.apply(console, __spreadArray([data.message], __spreadArray(__spreadArray(__spreadArray([], array_2.Array.joinable(Control.getDomId(data.control.data)), true), [
                data.event,
                data.control
            ], false), array_2.Array.joinable(data.value), true), false));
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
                    Control.eventLog({ control: _this, event: event, message: "👆 Button.Click:" });
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
                this.catchUpRestore = function (params) {
                    var _a, _b, _c, _d;
                    if (((_a = params === null || params === void 0 ? void 0 : params[_this.dom.id]) !== null && _a !== void 0 ? _a : "".concat(_this.data.default)) !== _this.get()) {
                        Control.eventLog({ control: _this, event: "catchUpRestore", message: "👆 Select.Change:", value: _this.get() });
                        (_c = (_b = _this.options) === null || _b === void 0 ? void 0 : _b.change) === null || _c === void 0 ? void 0 : _c.call(_b, null, _this);
                        (_d = _this.saveParameter) === null || _d === void 0 ? void 0 : _d.call(_this, _this.getId(), _this.get());
                    }
                };
                this.getId = function () { return Control.getDomId(_this.data); };
                this.setChange = function (change) {
                    return _this.options = __assign(__assign({}, _this.options), { change: change });
                };
                this.reloadOptions = function (value) {
                    var oldValue = value !== null && value !== void 0 ? value : _this.get();
                    ui_1.UI.replaceChildren(_this.dom, _this.data.enum.map(function (i) { var _a, _b, _c; return makeSelectOption("".concat(i), (_c = (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.makeLabel) === null || _b === void 0 ? void 0 : _b.call(_a, i)) !== null && _c !== void 0 ? _c : "".concat(i)); }));
                    _this.switch(oldValue, Control.preventOnChange);
                };
                this.getNextIndex = function (index, direction) {
                    return index + (direction ? -1 : 1);
                };
                this.getNextIndexClamp = function (length, index, direction) {
                    var next = _this.getNextIndex(index, direction);
                    return 0 <= next && next < length ? next : index;
                };
                this.getNextIndexCycle = function (length, index, direction) {
                    return (_this.getNextIndex(index, direction) + length) % length;
                };
                this.switch = function (valueOrDirection, preventOnChange, getNextIndex) {
                    if (getNextIndex === void 0) { getNextIndex = _this.getNextIndexClamp; }
                    if ("boolean" === typeof valueOrDirection) {
                        var options = Array.from(_this.dom.getElementsByTagName("option"));
                        var optionValues = options.map(function (i) { return i.value; });
                        var index = optionValues.indexOf(_this.dom.value);
                        var nextIndex = getNextIndex(optionValues.length, index, valueOrDirection);
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
                this.cycle = function (direction, preventOnChange) { return _this.switch(direction, preventOnChange, _this.getNextIndexCycle); };
                this.get = function () { return _this.dom.value; };
                this.fire = function () { var _a, _b; return (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, null, _this); };
                this.loadParameter = function (params, saveParameter) {
                    var value = params[_this.dom.id];
                    if (undefined !== value) {
                        _this.switch(value);
                    }
                    _this.saveParameter = saveParameter;
                    return _this;
                };
                this.dom = Control.getDom(data);
                if (!(this.dom instanceof HTMLSelectElement)) {
                    console.error("🦋 FIXME: Contorl.Select.InvalidDom", data, this.dom);
                }
                this.reloadOptions(this.data.default);
                this.dom.addEventListener("change", function (event) {
                    var _a, _b, _c;
                    Control.eventLog({ control: _this, event: event, message: "👆 Select.Change:", value: _this.get() });
                    (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, event, _this);
                    (_c = _this.saveParameter) === null || _c === void 0 ? void 0 : _c.call(_this, _this.getId(), _this.get());
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
                this.catchUpRestore = function (params) {
                    var _a, _b, _c, _d;
                    var urlParam = params === null || params === void 0 ? void 0 : params[_this.dom.id];
                    if ((undefined !== urlParam ?
                        "true" === urlParam :
                        ((_a = _this.data.default) !== null && _a !== void 0 ? _a : false)) !== _this.get()) {
                        Control.eventLog({ control: _this, event: "catchUpRestore", message: "👆 Checkbox.Change:", value: _this.get() });
                        (_c = (_b = _this.options) === null || _b === void 0 ? void 0 : _b.change) === null || _c === void 0 ? void 0 : _c.call(_b, null, _this);
                        (_d = _this.saveParameter) === null || _d === void 0 ? void 0 : _d.call(_this, _this.getId(), _this.get() ? "true" : "false");
                    }
                };
                this.getId = function () { return Control.getDomId(_this.data); };
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
                this.loadParameter = function (params, saveParameter) {
                    var value = params[_this.dom.id];
                    if (undefined !== value) {
                        _this.toggle("true" === value);
                    }
                    _this.saveParameter = saveParameter;
                    return _this;
                };
                this.dom = Control.getDom(data);
                if (!(this.dom instanceof HTMLInputElement) || "checkbox" !== this.dom.type.toLowerCase()) {
                    console.error("🦋 FIXME: Contorl.Checkbox.InvalidDom", data, this.dom);
                }
                if (undefined !== this.data.default) {
                    this.toggle(this.data.default, [Control.preventOnChange][false !== ((_a = this.options) === null || _a === void 0 ? void 0 : _a.preventOnChangeWhenNew) ? 0 : 1]);
                }
                this.dom.addEventListener("change", function (event) {
                    var _a, _b, _c;
                    Control.eventLog({ control: _this, event: event, message: "👆 Checkbox.Change:", value: _this.get() });
                    (_b = (_a = _this.options) === null || _a === void 0 ? void 0 : _a.change) === null || _b === void 0 ? void 0 : _b.call(_a, event, _this);
                    (_c = _this.saveParameter) === null || _c === void 0 ? void 0 : _c.call(_this, _this.getId(), _this.get() ? "true" : "false");
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
        "description": "Increase / Decrease Frame Delay",
        "shortcuts": [
            {
                "command": "increaseFrameDelay",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "ArrowLeft"
                ]
            },
            {
                "command": "decreaseFrameDelay",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "ArrowRight"
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
    },
    {
        "description": "Switch Clock",
        "shortcuts": [
            {
                "command": "switchClockForward",
                "type": "onKeyDown",
                "keys": [
                    "T"
                ]
            },
            {
                "command": "switchClockBackward",
                "type": "onKeyDown",
                "keys": [
                    "Shift",
                    "T"
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
                        console.error("🦋 FIXME: Shortcuts.handleKeyEvent.NotFoundCommand", i);
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
define("script/library/index", ["require", "exports", "script/library/locale", "script/library/ui", "script/library/control", "script/library/shortcuts"], function (require, exports, ImportedLocale, ImportedUI, ImportedControl, ImportedShortcuts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Library = void 0;
    ImportedLocale = __importStar(ImportedLocale);
    ImportedUI = __importStar(ImportedUI);
    ImportedControl = __importStar(ImportedControl);
    ImportedShortcuts = __importStar(ImportedShortcuts);
    var Library;
    (function (Library) {
        Library.Locale = ImportedLocale.Locale;
        Library.UI = ImportedUI.UI;
        Library.Control = ImportedControl.Control;
        Library.Shortcuts = ImportedShortcuts.Shortcuts;
    })(Library || (exports.Library = Library = {}));
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
                this.setIndex = function (index) {
                    return _this.index = index;
                };
                this.resetIndex = function () {
                    return _this.setIndex(0);
                };
            }
            return IndexedRandom;
        }());
        Random.IndexedRandom = IndexedRandom;
    })(Random || (exports.Random = Random = {}));
});
define("script/tools/index", ["require", "exports", "script/tools/type-guards", "script/tools/number", "script/tools/timespan", "script/tools/math", "script/tools/random", "script/tools/array", "script/tools/hash"], function (require, exports, ImportedTypeGuards, ImportedNumber, ImportedTimespan, ImportedMath, ImportedRandom, ImportedArray, ImportedHash) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tools = void 0;
    ImportedTypeGuards = __importStar(ImportedTypeGuards);
    ImportedNumber = __importStar(ImportedNumber);
    ImportedTimespan = __importStar(ImportedTimespan);
    ImportedMath = __importStar(ImportedMath);
    ImportedRandom = __importStar(ImportedRandom);
    ImportedArray = __importStar(ImportedArray);
    ImportedHash = __importStar(ImportedHash);
    var Tools;
    (function (Tools) {
        Tools.TypeGuards = ImportedTypeGuards.TypeGuards;
        Tools.Number = ImportedNumber.Number;
        Tools.Timespan = ImportedTimespan.Timespan;
        Tools.Math = ImportedMath.Math;
        Tools.Random = ImportedRandom.Random;
        Tools.Array = ImportedArray.Array;
        Tools.Hash = ImportedHash.Hash;
    })(Tools || (exports.Tools = Tools = {}));
});
define("script/features/fps", ["require", "exports", "script/tools/index"], function (require, exports, _tools_1) {
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
                var totalFps = _tools_1.Tools.Math.sum(fpsHistory.map(function (i) { return i.fps; }));
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
        Type.isFlounderType = evil_type_1.EvilType.Validator.isOr(evil_type_1.EvilType.Validator.isEnum(["trispot", "tetraspot"]), evil_type_1.EvilType.Validator.isEnum(["stripe", "diline", "triline"]));
        Type.isLayoutAngle = evil_type_1.EvilType.Validator.isEnum(["regular", "alternative"]);
        Type.isHexColor = evil_type_1.EvilType.Validator.isDetailedString({ pattern: "^#(?:[0-9A-Fa-f]){3,4,6,8}$", }, "u");
        Type.isNamedColor = evil_type_1.EvilType.Validator.isEnum(["black", "silver", "gray", "white", "maroon", "red",
            "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige",
            "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk",
            "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen",
            "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet",
            "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold",
            "goldenrod", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen",
            "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon",
            "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "limegreen", "linen", "magenta",
            "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
            "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab", "orange", "orangered", "orchid",
            "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "rebeccapurple",
            "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue", "slategray", "slategrey",
            "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen"]);
        Type.isColor = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isOr(Type.isHexColor, Type.isNamedColor); });
        Type.isRate = evil_type_1.EvilType.Validator.isDetailedNumber({ minimum: 0, maximum: 1, });
        Type.isSignedRate = evil_type_1.EvilType.Validator.isDetailedNumber({ minimum: -1, maximum: 1, });
        Type.isPixel = evil_type_1.EvilType.Validator.isDetailedNumber({ minimum: 0, });
        Type.isSignedPixel = evil_type_1.EvilType.Validator.isNumber;
        Type.isCount = evil_type_1.EvilType.Validator.isDetailedInteger({ minimum: 0, });
        Type.isNamedDirectionAngle = evil_type_1.EvilType.Validator.isEnum(["right", "right-down", "down",
            "left-down", "left", "left-up", "up", "right-up"]);
        Type.isDirectionAngle = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isOr(Type.isNamedDirectionAngle, Type.isSignedRate); });
        Type.isArgumentsBase = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isSpecificObject(Type.argumentsBaseValidatorObject, { additionalProperties: false }); });
        Type.isSpotArguments = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isSpecificObject(Type.spotArgumentsValidatorObject, { additionalProperties: false }); });
        Type.isLineArguments = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isSpecificObject(Type.lineArgumentsValidatorObject, { additionalProperties: false }); });
        Type.isArguments = evil_type_1.EvilType.lazy(function () { return evil_type_1.EvilType.Validator.isOr(Type.isSpotArguments, Type.isLineArguments); });
        Type.argumentsBaseValidatorObject = ({ $schema: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isJust("https://raw.githubusercontent.com/wraith13/flounder.style.js/master/generated/schema.json#")), type: Type.isFlounderType,
            layoutAngle: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isLayoutAngle, Type.isSignedRate)), offsetX: evil_type_1.EvilType.Validator.isOptional(Type.isSignedPixel), offsetY: evil_type_1.EvilType.Validator.isOptional(Type.isSignedPixel), foregroundColor: Type.isColor, backgroundColor: evil_type_1.EvilType.Validator.isOptional(Type.isColor), intervalSize: evil_type_1.EvilType.Validator.isOptional(Type.isPixel), depth: Type.isRate, blur: evil_type_1.EvilType.Validator.isOptional(Type.isPixel), maxPatternSize: evil_type_1.EvilType.Validator.isOptional(Type.isPixel), reverseRate: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isSignedRate, evil_type_1.EvilType.Validator.isJust("auto"), evil_type_1.EvilType.Validator.isJust("-auto"))), anglePerDepth: evil_type_1.EvilType.Validator.isOptional(evil_type_1.EvilType.Validator.isOr(Type.isSignedRate, evil_type_1.EvilType.Validator.isJust("auto"), evil_type_1.EvilType.Validator.isJust("-auto"))), maximumFractionDigits: evil_type_1.EvilType.Validator.isOptional(Type.isCount), });
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
        FlounderStyle.getAbsoluteReverseRate = function (data) {
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
            var reverseRate = FlounderStyle.getAbsoluteReverseRate(data);
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
            "both"
        ],
        "default": "both"
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
        "default": 7
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
        "default": 7500
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
    "frameDelay": {
        "id": "frame-delay",
        "enum": [
            0,
            25,
            50,
            75,
            100,
            125,
            150,
            200,
            250,
            300,
            350,
            500,
            750,
            1000,
            1250,
            1500
        ],
        "default": 0
    },
    "lowLoadMode": {
        "id": "low-load-mode",
        "default": false
    },
    "easing": {
        "id": "easing",
        "default": true
    },
    "withFullscreen": {
        "id": "with-fullscreen",
        "default": false
    },
    "showFps": {
        "id": "show-fps",
        "default": false
    },
    "clock": {
        "id": "clock",
        "enum": [
            "hide",
            "blend",
            "white",
            "black",
            "system",
            "alternate",
            "rainbow"
        ],
        "default": "hide"
    },
    "brightness": {
        "id": "brightness",
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
        "default": 100
    },
    "language": {
        "id": "language",
        "enum": [
            "Auto"
        ],
        "default": "Auto"
    }
});
define("script/features/animation", ["require", "exports", "flounder.style.js/index", "phi-colors", "script/library/index", "script/tools/index", "resource/control", "resource/config"], function (require, exports, flounder_style_js_1, phi_colors_1, _library_2, _tools_2, control_json_1, config_json_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animation = void 0;
    control_json_1 = __importDefault(control_json_1);
    config_json_3 = __importDefault(config_json_3);
    var Animation;
    (function (Animation) {
        Animation.black = { r: 0, g: 0, b: 0, };
        Animation.white = { r: 1, g: 1, b: 1, };
        var PhiColoring = /** @class */ (function () {
            function PhiColoring(hue, saturation, lightness, PhiHueUnit, RgbHueUnit) {
                if (hue === void 0) { hue = Math.random(); }
                if (saturation === void 0) { saturation = config_json_3.default.colors.phiColors.saturation; }
                if (lightness === void 0) { lightness = config_json_3.default.colors.phiColors.lightness; }
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
            PhiColoring.regulateH = function (h) { return _tools_2.Tools.Math.scale(phi_colors_1.phiColors.HslHMin, phi_colors_1.phiColors.HslHMax)(h); };
            PhiColoring.regulateS = function (s) { return _tools_2.Tools.Math.scale(phi_colors_1.phiColors.HslSMin, phi_colors_1.phiColors.HslSMax)(s); };
            PhiColoring.regulateL = function (l) { return _tools_2.Tools.Math.scale(phi_colors_1.phiColors.HslLMin, phi_colors_1.phiColors.HslLMax)(l); };
            return PhiColoring;
        }());
        Animation.PhiColoring = PhiColoring;
        var Pattern;
        (function (Pattern) {
            var makeRandomSpotArguments = function (type, intervalSize) {
                return ({
                    type: type,
                    layoutAngle: _tools_2.Tools.Random.select(["regular", "alternative",]),
                    foregroundColor: "forestgreen",
                    backgroundColor: "blanchedalmond",
                    intervalSize: intervalSize,
                    depth: 0.0,
                    maxPatternSize: _tools_2.Tools.Random.select([undefined, intervalSize / 4,]),
                    reverseRate: _tools_2.Tools.Random.select([undefined, 0.0,]),
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
                    maxPatternSize: _tools_2.Tools.Random.select([undefined, intervalSize / (2 + _tools_2.Tools.Random.makeInteger(9)),]),
                    reverseRate: _tools_2.Tools.Random.select([undefined, 0.0,]),
                    anglePerDepth: _tools_2.Tools.Random.select([undefined, "auto", "-auto", 1, 0, -1.0,]),
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
                    case "both":
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
                return _tools_2.Tools.Random.select(getList(pattern), random, index, prime)(intervalSize);
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
                if (random === void 0) { random = new _tools_2.Tools.Random.IndexedRandom().getFunction(); }
                if (phiColoring === void 0) { phiColoring = new PhiColoring(); }
                var _this = this;
                this.canvas = canvas;
                this.random = random;
                this.phiColoring = phiColoring;
                this.layers = [];
                this.spotsLayersRate = 1.0;
                this.pattern = control_json_1.default.pattern.default;
                this.startAt = 0;
                this.offsetAt = 0;
                this.universalStep = 0;
                this.currentLayerIndex = 0;
                this.cycleSpan = control_json_1.default.cycleSpan.default;
                this.diagonalSize = 0;
                this.getDiagonalSize = function () { var _a, _b; return Math.sqrt(Math.pow((_a = _this.canvas.clientWidth) !== null && _a !== void 0 ? _a : 0, 2) + Math.pow((_b = _this.canvas.clientHeight) !== null && _b !== void 0 ? _b : 0, 2)); };
                this.makeColor = this.phiColoring.makeSrgbColor;
                this.easing = function (t) { return t; };
                this.argumentHistory = [];
                this.startStep = function (now) {
                    return _this.startAt = now - _this.offsetAt;
                };
                this.makeRandomArguments = function (mile) {
                    var result = Pattern.make(_this.pattern, _tools_2.Tools.Math.scale(_this.diagonalSize * config_json_3.default.intervalSize.minRate, _this.diagonalSize * config_json_3.default.intervalSize.maxRate)(_this.random(mile, 17)), _this.random, mile, 23);
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
                                return _tools_2.Tools.Array.cycleSelect([Animation.black, Animation.white], mile + 1.0);
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
                this.isStarted = function () {
                    return 0 !== _this.startAt || 0 !== _this.offsetAt;
                };
                this.getStep = function (layer) { return _this.universalStep - (layer.mile + layer.offset); };
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
                this.stepLayer = function (i, ix) {
                    var _a, _b, _c, _d, _e;
                    var step = _this.getStep(i);
                    if (0 <= step) {
                        if (1.0 <= step || undefined === i.arguments) {
                            while (1.0 <= step) {
                                ++i.mile;
                                step = _this.getStep(i);
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
                };
                this.step = function (now) {
                    _this.offsetAt = now - _this.startAt;
                    _this.universalStep = _this.offsetAt / _this.cycleSpan;
                    _this.layers.forEach(function (i, ix) { return _this.stepLayer(i, ix); });
                };
                this.getStepDifference = function (now) {
                    return ((now - _this.startAt) / _this.cycleSpan) - _this.universalStep;
                };
                this.getNowDifference = function (now) {
                    return (now - _this.startAt) - _this.offsetAt;
                };
                this.update = function () {
                    if (_this.isStarted()) {
                        _this.step(_this.startAt + _this.offsetAt);
                    }
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
                        _library_2.Library.UI.getElementsByClassName("div", "layer", _this.canvas)[0].style.setProperty("background-color", _this.makeColor(_this.phiColoring.makePhiRgb(0.0)));
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
                    list.filter(_tools_2.Tools.TypeGuards.has("intervalSize")).forEach(function (i) { return i.intervalSize *= fixRate; });
                    list.filter(_tools_2.Tools.TypeGuards.has("maxPatternSize")).forEach(function (i) { return i.maxPatternSize *= fixRate; });
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
                    _library_2.Library.UI.cullOrBreed(_this.canvas, { tag: "div", attributes: { class: "layer", }, }, newLayers);
                    var layerList = _library_2.Library.UI.getElementsByClassName("div", "layer", _this.canvas);
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
                this.resetStep = function () {
                    _this.startAt = 0;
                    _this.offsetAt = 0;
                    _this.universalStep = 0;
                    _this.currentLayerIndex = 0;
                    _this.layers.forEach(function (i) {
                        i.mile = 0;
                        i.arguments = undefined;
                    });
                };
                this.shuffleStep = function () {
                    // Fill layers with the new first pattern ( WHY: If you don't update() with this offsetAt once, only the second pattern will be displayed. )
                    _this.offsetAt = _this.cycleSpan * (Math.ceil(_this.offsetAt / _this.cycleSpan) + 0.999999);
                    _this.startStep(performance.now());
                    _this.update();
                    // new second pattern + random step ( offsetAt )
                    _this.offsetAt = _this.cycleSpan * (Math.ceil(_this.offsetAt / _this.cycleSpan) + Math.random());
                    _this.startStep(performance.now());
                    _this.update();
                };
            }
            ;
            return Animator;
        }());
        Animation.Animator = Animator;
    })(Animation || (exports.Animation = Animation = {}));
});
define("resource/powered-by", [], {
    "build.js": "https://github.com/wraith13/build.js",
    "evil-commonjs": "https://github.com/wraith13/evil-commonjs",
    "evil-timer.js": "https://github.com/wraith13/evil-timer.js",
    "flounder.style.js": "https://github.com/wraith13/flounder.style.js",
    "phi-colors": "https://github.com/wraith13/phi-colors"
});
define("script/ui", ["require", "exports", "script/tools/index", "script/library/index", "resource/config", "resource/control", "resource/powered-by"], function (require, exports, _tools_3, _library_3, config_json_4, control_json_2, powered_by_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UI = void 0;
    config_json_4 = __importDefault(config_json_4);
    control_json_2 = __importDefault(control_json_2);
    powered_by_json_1 = __importDefault(powered_by_json_1);
    var UI;
    (function (UI) {
        UI.manifest = _library_3.Library.UI.getElementById("link", "manifest");
        UI.screenBody = _library_3.Library.UI.getElementById("div", "screen-body");
        UI.canvas = _library_3.Library.UI.getElementById("div", "canvas");
        UI.playButton = new _library_3.Library.Control.Button({ id: "play-button", });
        UI.runBenchmarkButton = new _library_3.Library.Control.Button({ id: "run-benchmark", });
        UI.colorspaceSelect = new _library_3.Library.Control.Select(control_json_2.default.colorspace);
        UI.coloringSelect = new _library_3.Library.Control.Select(control_json_2.default.coloring);
        UI.patternSelect = new _library_3.Library.Control.Select(control_json_2.default.pattern, { makeLabel: function (i) { return _library_3.Library.Locale.map(i); }, });
        UI.canvasSizeSelect = new _library_3.Library.Control.Select(control_json_2.default.canvasSize, { makeLabel: function (i) { return "".concat(i, " %"); } });
        UI.layersSelect = new _library_3.Library.Control.Select(control_json_2.default.layers);
        UI.spotslayersSelect = new _library_3.Library.Control.Select(control_json_2.default.spotsLayers, { makeLabel: function (i) { return "".concat(i, " %"); } });
        UI.cycleSpanSelect = new _library_3.Library.Control.Select(control_json_2.default.cycleSpan, { makeLabel: _tools_3.Tools.Timespan.toDisplayString });
        UI.fuseFpsSelect = new _library_3.Library.Control.Select(control_json_2.default.fuseFps);
        UI.getFrameDelayLabel = function (i) { return _tools_3.Tools.Timespan.toDisplayString(i); };
        UI.frameDelaySelect = new _library_3.Library.Control.Select(control_json_2.default.frameDelay, { makeLabel: UI.getFrameDelayLabel });
        UI.easingCheckbox = new _library_3.Library.Control.Checkbox(control_json_2.default.easing);
        UI.withFullscreen = new _library_3.Library.Control.Checkbox(control_json_2.default.withFullscreen);
        UI.showFps = new _library_3.Library.Control.Checkbox(control_json_2.default.showFps);
        UI.clockSelect = new _library_3.Library.Control.Select(control_json_2.default.clock, { makeLabel: function (i) { return _library_3.Library.Locale.map(i); }, });
        UI.brightnessSelect = new _library_3.Library.Control.Select(control_json_2.default.brightness, { makeLabel: function (i) { return "".concat(i, " %"); } });
        UI.languageSelect = new _library_3.Library.Control.Select({
            id: control_json_2.default.language.id,
            enum: _library_3.Library.Locale.getLocaleList(),
            default: control_json_2.default.language.default,
        }, {
            makeLabel: function (i) { return "Auto" === i ?
                _library_3.Library.Locale.map("Auto") :
                ("".concat(i, ": ")
                    + _library_3.Library.Locale.toRtl(_library_3.Library.Locale.map("lang-label", i), _library_3.Library.Locale.isRtl() && _library_3.Library.Locale.isLtr(i))); },
        });
        UI.urlAnchor = _library_3.Library.UI.getElementById("a", "url");
        UI.fpsDisplay = _library_3.Library.UI.getElementById("div", "fps");
        UI.clockDisplay = _library_3.Library.UI.getElementById("div", "clock-panel");
        UI.date = _library_3.Library.UI.getElementById("span", "date");
        UI.time = _library_3.Library.UI.getElementById("span", "time");
        UI.benchmarkProgressBar = _library_3.Library.UI.getElementById("div", "benchmark-progress-bar");
        UI.benchmarkCanvas = _library_3.Library.UI.getElementById("div", "benchmark-canvas");
        UI.keyboardShortcut = _library_3.Library.UI.getElementById("div", "keyboard-shortcut");
        UI.benchmarkTotalScore = _library_3.Library.UI.getElementById("span", "benchmark-total-score");
        UI.benchmarkScorePerFullHD = _library_3.Library.UI.getElementById("span", "benchmark-score-per-fullhd");
        UI.benchmarkCalculationScore = _library_3.Library.UI.getElementById("span", "benchmark-calculation-score");
        UI.benchmarkLinesCalculationScore = _library_3.Library.UI.getElementById("span", "benchmark-lines-calculation-score");
        UI.benchmarkSpotsCalculationScore = _library_3.Library.UI.getElementById("span", "benchmark-spots-calculation-score");
        UI.benchmarkLinesRenderingScore = _library_3.Library.UI.getElementById("span", "benchmark-lines-rendering-score");
        UI.benchmarkSpotsRenderingScore = _library_3.Library.UI.getElementById("span", "benchmark-spots-rendering-score");
        UI.benchmarkDisplayScore = _library_3.Library.UI.getElementById("span", "benchmark-display-score");
        UI.benchmarkFpsScore = _library_3.Library.UI.getElementById("span", "benchmark-fps-score");
        UI.benchmarkScreenResolutionScore = _library_3.Library.UI.getElementById("span", "benchmark-screen-resolution-score");
        UI.benchmarkScreenWidth = _library_3.Library.UI.getElementById("span", "benchmark-screen-width");
        UI.benchmarkScreenHeight = _library_3.Library.UI.getElementById("span", "benchmark-screen-height");
        UI.benchmarkDevicePixelRatio = _library_3.Library.UI.getElementById("span", "benchmark-device-pixel-ratio");
        UI.benchmarkScreenColorDepth = _library_3.Library.UI.getElementById("span", "benchmark-screen-color-depth");
        UI.benchmarkPopupLabel = _library_3.Library.UI.getElementById("span", "benchmark-popup-label");
        UI.benchmarkPopupValue = _library_3.Library.UI.getElementById("span", "benchmark-popup-value");
        UI.benchmarkAbortButton = new _library_3.Library.Control.Button({ id: "benchmark-abort-button", });
        UI.benchmarkResultCloseButton = new _library_3.Library.Control.Button({ id: "benchmark-result-close-button", });
        UI.updateLanguageDirection = function (lang) {
            return document.documentElement.setAttribute("dir", _library_3.Library.Locale.getDirection(lang));
        };
        UI.updateLanguage = function () {
            _library_3.Library.Locale.setLocale(UI.languageSelect.get());
            UI.updateLanguageDirection();
            UI.manifest.setAttribute("href", "web.manifest/generated/".concat(_library_3.Library.Locale.getLocale(), ".json"));
            UI.colorspaceSelect.reloadOptions();
            UI.coloringSelect.reloadOptions();
            UI.patternSelect.reloadOptions();
            UI.canvasSizeSelect.reloadOptions();
            UI.layersSelect.reloadOptions();
            UI.cycleSpanSelect.reloadOptions();
            UI.fuseFpsSelect.reloadOptions();
            UI.frameDelaySelect.reloadOptions();
            UI.clockSelect.reloadOptions();
            UI.languageSelect.reloadOptions();
            _library_3.Library.UI.querySelectorAllWithFallback("span", ["[data-lang-key]"])
                .forEach(function (i) { return UI.updateLabel(i); });
            _library_3.Library.UI.replaceChildren(UI.keyboardShortcut, _library_3.Library.Shortcuts.getDisplayList().map(function (i) {
                return [
                    {
                        tag: "span",
                        children: i.keyss
                            .map(function (j) { return j.map(function (key) { return ({ tag: "kbd", text: key }); }); })
                            .reduce(function (accumulator, item, i) {
                            return __spreadArray(__spreadArray(__spreadArray([], accumulator, true), (0 < i ? [{ tag: "span", className: "separator", text: "/", }] : []), true), item, true);
                        }, []),
                    },
                    { tag: "span", text: _library_3.Library.Locale.map(i.description), }
                ];
            })
                .reduce(function (a, b) { return a.concat(b); }, []));
            _library_3.Library.UI.replaceChildren(_library_3.Library.UI.getElementById("ul", "information-list"), config_json_4.default.informations.map(function (i) { return ({ tag: "li", text: _library_3.Library.Locale.map(i), }); }));
        };
        UI.initialize = function () {
            if (!_library_3.Library.UI.fullscreenEnabled && UI.withFullscreen.dom.parentElement) {
                UI.withFullscreen.dom.parentElement.style.setProperty("display", "none");
            }
            _library_3.Library.UI.replaceChildren(_library_3.Library.UI.querySelector("ul", "#powered-by ul"), Object.entries(powered_by_json_1.default).map(function (_a) {
                var text = _a[0], href = _a[1];
                return ({ tag: "li", children: [_library_3.Library.UI.createElement({ tag: "a", text: text, attributes: { href: href, } }),], });
            }));
        };
        UI.getDataLangKey = function (element) {
            return element.getAttribute("data-lang-key");
        };
        UI.updateLabel = function (element) {
            return _library_3.Library.UI.setTextContent(element, _library_3.Library.Locale.map(UI.getDataLangKey(element)));
        };
        UI.setLabel = function (element, label) {
            return element.setAttribute("data-lang-key", label);
        };
        UI.setAndUpdateLabel = function (element, label) {
            UI.setLabel(element, label);
            UI.updateLabel(element);
        };
    })(UI || (exports.UI = UI = {}));
});
define("script/features/clock", ["require", "exports", "script/library/index", "script/ui", "resource/config"], function (require, exports, library_1, ui_2, config_json_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clock = void 0;
    config_json_5 = __importDefault(config_json_5);
    var Clock;
    (function (Clock) {
        Clock.makeDate = function (local) {
            return new Date().toLocaleDateString(local, config_json_5.default.clock.dateFormat);
        };
        Clock.makeTime = function (local) {
            return new Date().toLocaleTimeString(local, config_json_5.default.clock.timeFormat);
        };
        Clock.update = function (local) {
            library_1.Library.UI.setTextContent(ui_2.UI.date, Clock.makeDate(local));
            library_1.Library.UI.setTextContent(ui_2.UI.time, Clock.makeTime(local));
        };
        Clock.setColor = function (color) {
            library_1.Library.UI.setStyle(ui_2.UI.date, "color", color);
            library_1.Library.UI.setStyle(ui_2.UI.time, "color", color);
        };
    })(Clock || (exports.Clock = Clock = {}));
});
define("script/features/benchmark", ["require", "exports", "script/tools/index", "script/library/index", "script/ui", "script/features/fps", "script/features/animation", "resource/config"], function (require, exports, _tools_4, _library_4, ui_3, fps_1, animation_1, config_json_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Benchmark = void 0;
    config_json_6 = __importDefault(config_json_6);
    var Benchmark;
    (function (Benchmark) {
        Benchmark.IndexedRandom = new _tools_4.Tools.Random.IndexedRandom(_tools_4.Tools.Hash.fnv1a_32, "benchmark");
        Benchmark.animator = new animation_1.Animation.Animator(ui_3.UI.benchmarkCanvas, Benchmark.IndexedRandom.getFunction());
        Benchmark.calculateMeasurementScore = function (a, b, calculate) {
            for (var _i = 0, _a = ["Unmeasured", "UnmeasurablePoor", "UnmeasurableRich",]; _i < _a.length; _i++) {
                var i = _a[_i];
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
                // The area obtained with screen.width x screen.height may not be usable if full-screen mode cannot be achieved, so screen.width x screen.height is not used.
                // width: screen.width,
                // height: screen.height,
                width: ui_3.UI.screenBody.clientWidth,
                height: ui_3.UI.screenBody.clientHeight,
                devicePixelRatio: (_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1.0,
                colorDepth: window.screen.colorDepth,
            });
        };
        var measureScreenResolutionScore = function () {
            var _a, _b;
            return ((ui_3.UI.screenBody.clientWidth * ((_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1.0))
                * (ui_3.UI.screenBody.clientHeight * ((_b = window.devicePixelRatio) !== null && _b !== void 0 ? _b : 1.0))
                * window.screen.colorDepth)
                / (config_json_6.default.benchmark.pixelUnit * config_json_6.default.benchmark.colorDepthUnit);
        };
        var setProgressBarSize = function (size) {
            return _library_4.Library.UI.cullOrBreed(ui_3.UI.benchmarkProgressBar, { tag: "div", className: "progress-block", }, size);
        };
        var setProgressBarProgress = function (progress) {
            return Array.from(ui_3.UI.benchmarkProgressBar.children).forEach(function (i, ix) {
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
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupLabel, "".concat(_library_4.Library.Locale.map("benchmark-phase-screen-resolution"), ":"));
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupValue, "".concat(i.width, "x").concat(i.height, " ").concat(i.devicePixelRatio, "x ").concat(i.colorDepth, "bit"));
                };
                this.step = function (measure, now) {
                    if (_this.startAt + config_json_6.default.benchmark.screenResolutionWait <= now) {
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
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupLabel, "FPS:");
                };
                this.step = function (measure, now) {
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupValue, "".concat(fps_1.Fps.currentNowFps.fps.toFixed(2)));
                    if (_this.startAt + config_json_6.default.benchmark.refreshRateWait <= now) {
                        measure.result.fps = fps_1.Fps.averageFps;
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
                    Benchmark.animator.setDiagonalSize(Math.sqrt(config_json_6.default.benchmark.pixelUnit));
                    Benchmark.animator.setCycleSpan(config_json_6.default.benchmark.adjustLayersWait);
                    Benchmark.animator.setEasing(true);
                    _this.startPattern(measure, now);
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupLabel, "".concat(_library_4.Library.Locale.map(_this.scoreLabel), ":"));
                };
                this.startPattern = function (_measure, now) {
                    _this.patternStartAt = now;
                    Benchmark.animator.setPattern(_this.pattern);
                    _this.startLayers(now, 1);
                    Benchmark.IndexedRandom.resetIndex();
                    Benchmark.animator.resetStep();
                    Benchmark.animator.startStep(now);
                    fps_1.Fps.reset();
                };
                this.startLayers = function (now, layers) {
                    _this.laysersStartAt = now;
                    _this.layers = layers;
                    Benchmark.animator.setLayers(_this.layers);
                };
                this.step = function (measure, now) {
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupValue, "".concat((fps_1.Fps.currentNowFps.fps * _this.layers).toFixed(2)));
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
                        _this.patternStartAt + config_json_6.default.benchmark.stableWait < now;
                };
                this.isNeedAdjustingLayers = function (now) {
                    return _this.isStable(now) &&
                        _this.laysersStartAt + config_json_6.default.benchmark.adjustLayersWait < now &&
                        30 <= fps_1.Fps.averageFps;
                };
                this.isEnd = function (now) {
                    return _this.isStable(now) &&
                        _this.laysersStartAt + config_json_6.default.benchmark.nextPatternWait < now;
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
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupLabel, "".concat(_library_4.Library.Locale.map("benchmarking-in-progress"), ":"));
                    _library_4.Library.UI.setTextContent(ui_3.UI.benchmarkPopupValue, "".concat(_library_4.Library.Locale.map("benchmark-phase-preparation")));
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
                    _this.result.displayScore = Benchmark.calculateMeasurementScore(_this.result.screenResolutionScore, _this.result.fps, function (a, b) { return (a * b) / config_json_6.default.benchmark.fpsUnit; });
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
define("script/features/index", ["require", "exports", "script/features/fps", "script/features/animation", "script/features/clock", "script/features/benchmark"], function (require, exports, ImportedFps, ImportedAnimation, ImportedClock, ImportedBenchmark) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Features = void 0;
    ImportedFps = __importStar(ImportedFps);
    ImportedAnimation = __importStar(ImportedAnimation);
    ImportedClock = __importStar(ImportedClock);
    ImportedBenchmark = __importStar(ImportedBenchmark);
    var Features;
    (function (Features) {
        Features.Fps = ImportedFps.Fps;
        Features.Animation = ImportedAnimation.Animation;
        Features.Clock = ImportedClock.Clock;
        Features.Benchmark = ImportedBenchmark.Benchmark;
    })(Features || (exports.Features = Features = {}));
});
define("script/controller/base", ["require", "exports", "script/library/index", "script/features/index", "script/ui"], function (require, exports, _library_5, _features_1, ui_4) {
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
            ui_4.UI.keyboardShortcut.classList.toggle("show", false);
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
                if (fullscreen !== null && fullscreen !== void 0 ? fullscreen : ui_4.UI.withFullscreen.get()) {
                    _library_5.Library.UI.requestFullscreen(document.body);
                    setTimeout(function () { return document.body.focus(); }, 100);
                }
                else {
                    _library_5.Library.UI.exitFullscreen();
                }
            }
        };
    })(Base || (exports.Base = Base = {}));
});
define("script/controller/animation", ["require", "exports", "phi-colors", "script/features/index", "script/library/index", "script/controller/base", "script/ui", "resource/config"], function (require, exports, phi_colors_2, _features_2, _library_6, base_1, ui_5, config_json_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animation = void 0;
    config_json_7 = __importDefault(config_json_7);
    var Animation;
    (function (Animation) {
        Animation.animator = new _features_2.Features.Animation.Animator(ui_5.UI.canvas, Math.random);
        Animation.cloclLocale = undefined;
        Animation.getOpacity = function () {
            return "".concat(parseFloat(ui_5.UI.brightnessSelect.get()), "%");
        };
        Animation.updateOpacity = function () {
            if (Animation.isInAnimation()) {
                document.body.style.setProperty("opacity", Animation.getOpacity());
                ui_5.UI.canvas.style.removeProperty("opacity");
            }
            else {
                document.body.style.removeProperty("opacity");
                ui_5.UI.canvas.style.setProperty("opacity", Animation.getOpacity());
            }
        };
        Animation.isInAnimation = function () {
            return base_1.Base.isInMode("animation");
        };
        Animation.isFullscreenEnabled = function () {
            return _library_6.Library.UI.fullscreenEnabled && ui_5.UI.withFullscreen.get();
        };
        Animation.playAnimation = function () {
            base_1.Base.intoMode("animation");
            Animation.updateFps();
            Animation.updateOpacity();
            setTimeout(function () { return Animation.start(); }, Animation.isFullscreenEnabled() ? config_json_7.default.fullscreenAdditionalWait : 0);
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
            Animation.updateOpacity();
        };
        Animation.isAnimationStepTiming = function (now) {
            return parseInt(ui_5.UI.frameDelaySelect.get()) <= Animation.animator.getNowDifference(now);
        };
        Animation.updateClock = function () {
            var clockOption = ui_5.UI.clockSelect.get();
            if ("hide" !== clockOption) {
                _features_2.Features.Clock.update(Animation.cloclLocale);
                switch (clockOption) {
                    case "alternate":
                        var isWhite = (new Date().getTime() / config_json_7.default.clock.alternate.span) % 2 < 1.0;
                        ui_5.UI.clockDisplay.classList.toggle("white", isWhite);
                        ui_5.UI.clockDisplay.classList.toggle("black", !isWhite);
                        _features_2.Features.Clock.setColor(undefined);
                        break;
                    case "rainbow":
                        _features_2.Features.Clock.setColor(Animation.animator.phiColoring.makeSrgbColor(Animation.animator.phiColoring.makeRgb(Animation.animator.universalStep / phi_colors_2.phiColors.phi)));
                        break;
                    default:
                        _features_2.Features.Clock.setColor(undefined);
                        break;
                }
            }
        };
        Animation.loopAnimation = function (now) {
            if (Animation.isInAnimation()) {
                Animation.updateClock();
                _features_2.Features.Fps.step(now);
                Animation.updateFps();
                if (_features_2.Features.Fps.isUnderFuseFps()) {
                    Animation.pauseAnimation();
                }
                else {
                    if (Animation.isAnimationStepTiming(now)) {
                        Animation.animator.step(now);
                    }
                    window.requestAnimationFrame(Animation.loopAnimation);
                }
            }
        };
        Animation.start = function () { return setTimeout(function () { return window.requestAnimationFrame(function (now) {
            Animation.animator.startStep(now);
            Animation.loopAnimation(now);
        }); }, config_json_7.default.startWait); };
        Animation.updateFps = function () {
            if (ui_5.UI.showFps.get()) {
                _library_6.Library.UI.setTextContent(ui_5.UI.fpsDisplay, _features_2.Features.Fps.getText());
            }
        };
        Animation.shuffleAnimation = function () {
            return Animation.animator.shuffleStep();
        };
        Animation.initialize = function (params) {
            Animation.cloclLocale = params["clock-locale"];
        };
    })(Animation || (exports.Animation = Animation = {}));
});
define("script/controller/benchmark", ["require", "exports", "script/features/index", "script/library/index", "script/controller/base", "script/ui", "resource/config"], function (require, exports, _features_3, _library_7, base_2, ui_6, config_json_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Benchmark = void 0;
    config_json_8 = __importDefault(config_json_8);
    var Benchmark;
    (function (Benchmark) {
        Benchmark.benchmark = new _features_3.Features.Benchmark.Measurement(ui_6.UI.benchmarkCanvas);
        Benchmark.loopBenchmark = function (now) {
            if (Benchmark.isInBenchmark()) {
                _features_3.Features.Fps.step(now);
                ui_6.UI.showFps.get();
                Benchmark.benchmark.step(now);
                if (Benchmark.benchmark.isEnd()) {
                    Benchmark.benchmark.end();
                    setTimeout(function () {
                        Benchmark.stopBenchmark();
                        Benchmark.showResult();
                    }, config_json_8.default.benchmark.endWait);
                }
                else {
                    window.requestAnimationFrame(Benchmark.loopBenchmark);
                }
            }
        };
        Benchmark.isInBenchmark = function () {
            return base_2.Base.isInMode("benchmark");
        };
        Benchmark.isInBenchmarkResult = function () {
            return document.body.classList.contains("benchmark-result");
        };
        Benchmark.isInBenchmarkOrResult = function () {
            return Benchmark.isInBenchmark() || Benchmark.isInBenchmarkResult();
        };
        Benchmark.runBenchmark = function () {
            base_2.Base.intoMode("benchmark");
            Benchmark.benchmark.start();
            if (_library_7.Library.UI.fullscreenEnabled) {
                _library_7.Library.UI.requestFullscreen(document.body);
            }
            setTimeout(function () {
                return window.requestAnimationFrame(function (now) {
                    Benchmark.loopBenchmark(now);
                });
            }, config_json_8.default.benchmark.startWait);
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
        var numberResultToText = function (i) {
            return i.toFixed(config_json_8.default.benchmark.decimalDigits);
        };
        var showMeasurementScore = function (element, score, formatter) {
            return _library_7.Library.UI.setTextContent(element, _features_3.Features.Benchmark.measurementScoreToText(score, formatter));
        };
        var showNumberMeasurementScore = function (element, score) {
            return showMeasurementScore(element, score, numberResultToText);
        };
        Benchmark.showResult = function () {
            document.body.classList.toggle("immersive", true);
            document.body.classList.toggle("benchmark-result", true);
            showNumberMeasurementScore(ui_6.UI.benchmarkTotalScore, Benchmark.benchmark.result.totalScore);
            showNumberMeasurementScore(ui_6.UI.benchmarkScorePerFullHD, Benchmark.benchmark.result.totalRenderingScore);
            showNumberMeasurementScore(ui_6.UI.benchmarkCalculationScore, Benchmark.benchmark.result.totalCalculationScore);
            showNumberMeasurementScore(ui_6.UI.benchmarkLinesCalculationScore, Benchmark.benchmark.result.linesCalculationScore);
            showNumberMeasurementScore(ui_6.UI.benchmarkSpotsCalculationScore, Benchmark.benchmark.result.spotsCalculationScore);
            showNumberMeasurementScore(ui_6.UI.benchmarkLinesRenderingScore, Benchmark.benchmark.result.linesRenderingScorePerFullHd);
            showNumberMeasurementScore(ui_6.UI.benchmarkSpotsRenderingScore, Benchmark.benchmark.result.spotsRenderingScorePerFullHd);
            showNumberMeasurementScore(ui_6.UI.benchmarkDisplayScore, Benchmark.benchmark.result.displayScore);
            showNumberMeasurementScore(ui_6.UI.benchmarkFpsScore, Benchmark.benchmark.result.fps);
            showNumberMeasurementScore(ui_6.UI.benchmarkScreenResolutionScore, Benchmark.benchmark.result.screenResolutionScore);
            showMeasurementScore(ui_6.UI.benchmarkScreenWidth, Benchmark.benchmark.result.screenResolution, function (i) { return numberResultToText(i.width); });
            showMeasurementScore(ui_6.UI.benchmarkScreenHeight, Benchmark.benchmark.result.screenResolution, function (i) { return numberResultToText(i.height); });
            showMeasurementScore(ui_6.UI.benchmarkDevicePixelRatio, Benchmark.benchmark.result.screenResolution, function (i) { return numberResultToText(i.devicePixelRatio); });
            showMeasurementScore(ui_6.UI.benchmarkScreenColorDepth, Benchmark.benchmark.result.screenResolution, function (i) { return numberResultToText(i.colorDepth); });
        };
        Benchmark.abortBenchmark = function () {
            if (Benchmark.isInBenchmark() && !Benchmark.benchmark.isEnd()) {
                Benchmark.benchmark.end();
                Benchmark.stopBenchmark();
                Benchmark.showResult();
            }
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
        Controller.initialize = function (params) {
            Controller.Animation.initialize(params);
        };
    })(Controller || (exports.Controller = Controller = {}));
});
define("resource/evil-commonjs.config", [], {
    "log": {
        "config": false,
        "load": false,
        "define": false,
        "readyToCapture": false,
        "results": false
    },
    "loadingTimeout": 500
});
define("resource/evil-timer.js.config", [], {
    "debug": true
});
define("resource/images", [], {
    "play-icon": "./image/play.svg",
    "pause-icon": "./image/pause.svg"
});
define("script/url", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Url = void 0;
    var Url;
    (function (Url) {
        Url.parseParameter = function (url) {
            var result = {};
            var urlObj = new URL(url);
            var params = urlObj.searchParams;
            params.forEach(function (value, key) { return result[key] = value; });
            return result;
        };
        Url.make = function (params) {
            var url = new URL(window.location.href);
            for (var _i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                url.searchParams.set(key, value);
            }
            return url.toString();
        };
        // export const update = (params: Record<string, string>): void =>
        //     window.history.replaceState({}, "", make(params));
        Url.addParameter = function (params, key, value) {
            params[key] = value;
            return params;
        };
        // export const applyParam = (key: string, value: string): void =>
        //     update(addParameter(parseParameter(window.location.href), key, value));
        Url.initialize = function () {
            // Initialization of params is necessary, but it is actually initialized at the time of declaration. In reality, nothing is done here.
        };
        Url.params = Url.parseParameter(window.location.href);
    })(Url || (exports.Url = Url = {}));
});
define("script/loadstatus", ["require", "exports", "script/library/index", "script/ui"], function (require, exports, _library_8, ui_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadStatus = void 0;
    var LoadStatus;
    (function (LoadStatus) {
        LoadStatus.getBoolLabel = function (config) {
            return function (i) {
                return i ? config.mapping["true"] : config.mapping["false"];
            };
        };
        LoadStatus.getEnumLabel = function (config) {
            return function (i) { var _a, _b; return (_b = (_a = config.mapping[i]) !== null && _a !== void 0 ? _a : config.default) !== null && _b !== void 0 ? _b : ""; };
        };
        LoadStatus.getIntegerLabel = function (config) {
            return function (i) {
                var _a, _b, _c, _d, _e, _f;
                var value = parseInt(i);
                return config.direction === "ascending" ?
                    (_c = (_b = (_a = config.mapping.find(function (e) { return value <= e.number; })) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : config.default) !== null && _c !== void 0 ? _c : "" :
                    (_f = (_e = (_d = config.mapping.find(function (e) { return e.number <= value; })) === null || _d === void 0 ? void 0 : _d.label) !== null && _e !== void 0 ? _e : config.default) !== null && _f !== void 0 ? _f : "";
            };
        };
        LoadStatus.setEnumLabel = function (config, i) {
            return ui_7.UI.setAndUpdateLabel(_library_8.Library.UI.getElementById("span", config.id), LoadStatus.getEnumLabel(config)(i));
        };
        LoadStatus.setBoolLabel = function (config, i) {
            return ui_7.UI.setAndUpdateLabel(_library_8.Library.UI.getElementById("span", config.id), LoadStatus.getBoolLabel(config)(i));
        };
        LoadStatus.setIntegerLabel = function (config, i) {
            return ui_7.UI.setAndUpdateLabel(_library_8.Library.UI.getElementById("span", config.id), LoadStatus.getIntegerLabel(config)(i));
        };
    })(LoadStatus || (exports.LoadStatus = LoadStatus = {}));
});
define("resource/loadstatus", [], {
    "colorspace": {
        "id": "colorspace-load-status",
        "type": "enum",
        "mapping": {
            "sRGB": "LowLoad",
            "Display P3": "HighLoad",
            "Rec. 2020": "HighLoad"
        },
        "default": ""
    },
    "layers": {
        "id": "layers-load-status",
        "type": "integer",
        "direction": "descending",
        "mapping": [
            {
                "number": 31,
                "label": "HighLoad"
            },
            {
                "number": 11,
                "label": "MediumLoad"
            }
        ],
        "default": "LowLoad"
    },
    "spotsLayers": {
        "id": "spots-layers-load-status",
        "type": "integer",
        "direction": "descending",
        "mapping": [
            {
                "number": 40,
                "label": "HighLoad"
            },
            {
                "number": 20,
                "label": "MediumLoad"
            }
        ],
        "default": "LowLoad"
    },
    "frameDelay": {
        "id": "frame-delay-load-status",
        "type": "integer",
        "direction": "ascending",
        "mapping": [
            {
                "number": 0,
                "label": "FullPower"
            },
            {
                "number": 99,
                "label": "HighLoad"
            },
            {
                "number": 350,
                "label": "MediumLoad"
            }
        ],
        "default": "LowLoad"
    },
    "withFullscreen": {
        "id": "with-fullscreen-load-status",
        "type": "boolean",
        "mapping": {
            "true": "HighLoad",
            "false": ""
        }
    },
    "showFps": {
        "id": "show-fps-load-status",
        "type": "boolean",
        "mapping": {
            "true": "WithLoad",
            "false": ""
        }
    },
    "clock": {
        "id": "clock-load-status",
        "type": "enum",
        "mapping": {
            "hide": "",
            "blend": "WithLoad",
            "white": "WithLoad",
            "black": "WithLoad",
            "system": "WithLoad",
            "alternate": "WithLoad",
            "rainbow": "WithLoad"
        },
        "default": ""
    }
});
define("script/events", ["require", "exports", "script/library/index", "script/features/index", "script/controller/index", "script/ui", "script/loadstatus", "script/url", "resource/config", "resource/control", "resource/loadstatus"], function (require, exports, _library_9, _features_4, _controller_1, ui_8, loadstatus_1, url_1, config_json_9, control_json_3, loadstatus_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = void 0;
    config_json_9 = __importDefault(config_json_9);
    control_json_3 = __importDefault(control_json_3);
    loadstatus_json_1 = __importDefault(loadstatus_json_1);
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
            update(function () { return _controller_1.Controller.Animation.animator.setColorspace(ui_8.UI.colorspaceSelect.get()); });
            updateColorspaceLoadStatus();
        };
        var updateColorspaceLoadStatus = function () {
            return loadstatus_1.LoadStatus.setEnumLabel(loadstatus_json_1.default.colorspace, ui_8.UI.colorspaceSelect.get());
        };
        var updateColoring = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setColoring(ui_8.UI.coloringSelect.get()); });
        };
        var updatePattern = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setPattern(ui_8.UI.patternSelect.get()); });
        };
        var updateLayers = function () {
            update(function () { return _controller_1.Controller.Animation.animator.setLayers(parseInt(ui_8.UI.layersSelect.get())); });
            updateLayersLoadStatus();
        };
        var updateLayersLoadStatus = function () {
            return loadstatus_1.LoadStatus.setIntegerLabel(loadstatus_json_1.default.layers, ui_8.UI.layersSelect.get());
        };
        var updateSpotsLayers = function () {
            update(function () { return _controller_1.Controller.Animation.animator.setSpotsLayers(parseInt(ui_8.UI.spotslayersSelect.get()) / 100.0); });
            updateSpotsLayersLoadStatus();
        };
        var updateSpotsLayersLoadStatus = function () {
            return loadstatus_1.LoadStatus.setIntegerLabel(loadstatus_json_1.default.spotsLayers, ui_8.UI.spotslayersSelect.get());
        };
        var setCanvasSize = function (size) {
            ["width", "height",].forEach(function (i) { return ui_8.UI.canvas.style.setProperty(i, size); });
            updateDiagonalSize();
        };
        var updateCanvasSize = function () {
            var newCanvasSize = parseFloat(ui_8.UI.canvasSizeSelect.get());
            var newCanvasSizeRate = Math.sqrt(newCanvasSize / 100.0);
            var canvasSize = newCanvasSizeRate * 100.0;
            setCanvasSize("".concat(canvasSize, "%"));
        };
        var updateCycleSpan = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setCycleSpan(parseInt(ui_8.UI.cycleSpanSelect.get())); });
        };
        var updateFuseFps = function () {
            return _features_4.Features.Fps.fuseFps = parseFloat(ui_8.UI.fuseFpsSelect.get());
        };
        var updateFrameDelayLoadStatus = function () {
            return loadstatus_1.LoadStatus.setIntegerLabel(loadstatus_json_1.default.frameDelay, ui_8.UI.frameDelaySelect.get());
        };
        var updateEasing = function () {
            return update(function () { return _controller_1.Controller.Animation.animator.setEasing(ui_8.UI.easingCheckbox.get()); });
        };
        var updateWithFullscreen = function () {
            return loadstatus_1.LoadStatus.setBoolLabel(loadstatus_json_1.default.withFullscreen, ui_8.UI.withFullscreen.get());
        };
        var updateShowFps = function () {
            ui_8.UI.fpsDisplay.classList.toggle("hide", !ui_8.UI.showFps.get());
            updateShowFpsLoadStatus();
        };
        var updateShowFpsLoadStatus = function () {
            return loadstatus_1.LoadStatus.setBoolLabel(loadstatus_json_1.default.showFps, ui_8.UI.showFps.get());
        };
        var updateClock = function () {
            control_json_3.default.clock.enum.forEach(function (i) { return ui_8.UI.clockDisplay.classList.toggle(i, i === ui_8.UI.clockSelect.get()); });
            updateClockLoadStatus();
        };
        var updateClockLoadStatus = function () {
            return loadstatus_1.LoadStatus.setEnumLabel(loadstatus_json_1.default.clock, ui_8.UI.clockSelect.get());
        };
        var updateBrightness = function () {
            return _controller_1.Controller.Animation.updateOpacity();
        };
        ;
        var updateUrlAnchor = function (params) {
            if (0 < Object.keys(params).length) {
                ui_8.UI.urlAnchor.href = url_1.Url.make(params);
            }
            else {
                ui_8.UI.urlAnchor.href = "?";
            }
        };
        Events.initialize = function () {
            var applyParam = function (key, value) {
                url_1.Url.addParameter(url_1.Url.params, key, value);
                updateUrlAnchor(url_1.Url.params);
            };
            ui_8.UI.playButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                _controller_1.Controller.toggleAnimation();
            };
            ui_8.UI.runBenchmarkButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                _controller_1.Controller.Benchmark.runBenchmark();
            };
            ui_8.UI.colorspaceSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateColorspace);
            ui_8.UI.coloringSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateColoring);
            ui_8.UI.patternSelect.loadParameter(url_1.Url.params, applyParam).setChange(updatePattern);
            ui_8.UI.canvasSizeSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateCanvasSize);
            ui_8.UI.layersSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateLayers);
            ui_8.UI.spotslayersSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateSpotsLayers);
            ui_8.UI.cycleSpanSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateCycleSpan);
            ui_8.UI.fuseFpsSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateFuseFps);
            ui_8.UI.frameDelaySelect.loadParameter(url_1.Url.params, applyParam).setChange(updateFrameDelayLoadStatus);
            ui_8.UI.easingCheckbox.loadParameter(url_1.Url.params, applyParam).setChange(updateEasing);
            ui_8.UI.withFullscreen.loadParameter(url_1.Url.params, applyParam).setChange(updateWithFullscreen);
            ui_8.UI.showFps.loadParameter(url_1.Url.params, applyParam).setChange(updateShowFps);
            ui_8.UI.clockSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateClock);
            ui_8.UI.brightnessSelect.loadParameter(url_1.Url.params, applyParam).setChange(updateBrightness);
            ui_8.UI.languageSelect.loadParameter(url_1.Url.params, applyParam).setChange(ui_8.UI.updateLanguage);
            ui_8.UI.benchmarkAbortButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                _controller_1.Controller.Benchmark.stopBenchmark();
            };
            ui_8.UI.benchmarkResultCloseButton.data.click = function (event, button) {
                event === null || event === void 0 ? void 0 : event.stopPropagation();
                button.dom.blur();
                //Controller.Benchmark.runBenchmark();
                document.body.classList.toggle("immersive", false);
                document.body.classList.toggle("benchmark-result", false);
            };
            ui_8.UI.canvas.addEventListener("click", function (event) {
                event.stopPropagation();
                if (_controller_1.Controller.Benchmark.isInBenchmark()) {
                    console.log("👆 canvas.Click: stopBenchmark", event, ui_8.UI.canvas);
                    _controller_1.Controller.Benchmark.stopBenchmark();
                }
                else {
                    console.log("👆 canvas.Click: pauseAnimation", event, ui_8.UI.canvas);
                    _controller_1.Controller.Animation.pauseAnimation();
                }
            });
            ui_8.UI.benchmarkCanvas.addEventListener("click", function (event) {
                event.stopPropagation();
                console.log("👆 benchmarkCanvas.Click: stopBenchmark", event, ui_8.UI.benchmarkCanvas);
                _controller_1.Controller.Benchmark.stopBenchmark();
            });
            var mouseMoveTimer = new _library_9.Library.UI.ToggleClassForWhileTimer();
            ui_8.UI.screenBody.addEventListener("mousemove", function (_event) {
                if (config_json_9.default.log.mousemove && !mouseMoveTimer.isOn()) {
                    console.log("🖱️ MouseMove:", event, ui_8.UI.screenBody);
                }
                mouseMoveTimer.start(document.body, "mousemove", 1000);
            });
            _library_9.Library.UI.querySelectorAllWithFallback("label", ["label[for]:has(select)", "label[for]"])
                .forEach(function (label) { return _library_9.Library.UI.showPickerOnLabel(label); });
            _library_9.Library.Shortcuts.setCommandMap({
                "nop": function () { },
                "toggleHideUI": function () {
                    document.body.classList.toggle("hide-ui");
                    if (document.body.classList.contains("hide-ui")) {
                        ui_8.UI.keyboardShortcut.classList.toggle("show", false);
                    }
                },
                "toggleAnimation": function () { return _controller_1.Controller.toggleAnimation(); },
                "switchColoringForward": function () { return ui_8.UI.coloringSelect.cycle(true); },
                "switchColoringBackward": function () { return ui_8.UI.coloringSelect.cycle(false); },
                "switchPatternForward": function () { return ui_8.UI.patternSelect.cycle(true); },
                "switchPatternBackward": function () { return ui_8.UI.patternSelect.cycle(false); },
                "increaseFrameDelay": function () { return ui_8.UI.frameDelaySelect.switch(false); },
                "decreaseFrameDelay": function () { return ui_8.UI.frameDelaySelect.switch(true); },
                "increaseCanvasSize": function () { return ui_8.UI.canvasSizeSelect.switch(true); },
                "decreaseCanvasSize": function () { return ui_8.UI.canvasSizeSelect.switch(false); },
                "increaseLayer": function () { return ui_8.UI.layersSelect.switch(true); },
                "decreaseLayer": function () { return ui_8.UI.layersSelect.switch(false); },
                "speedDown": function () { return ui_8.UI.cycleSpanSelect.switch(true); },
                "speedUp": function () { return ui_8.UI.cycleSpanSelect.switch(false); },
                "toggleFullScreen": function () {
                    if (_controller_1.Controller.Animation.isInAnimation()) {
                        if (_library_9.Library.UI.fullscreenEnabled) {
                            if ((null !== _library_9.Library.UI.getFullscreenElement()) === ui_8.UI.withFullscreen.get()) {
                                ui_8.UI.withFullscreen.toggle();
                            }
                            _controller_1.Controller.Base.updateFullscreenState();
                        }
                    }
                    else {
                        ui_8.UI.withFullscreen.toggle();
                    }
                },
                "toggleShowFps": function () {
                    ui_8.UI.showFps.toggle();
                    updateShowFps();
                },
                "switchClockForward": function () { return ui_8.UI.clockSelect.cycle(false); },
                "switchClockBackward": function () { return ui_8.UI.clockSelect.cycle(true); },
                "unknownKeyDown": function () {
                    if (!_controller_1.Controller.Benchmark.isInBenchmarkOrResult()) {
                        showShortcutsTimer.start(ui_8.UI.keyboardShortcut, "show", 3000);
                    }
                }
            });
            var showShortcutsTimer = new _library_9.Library.UI.ToggleClassForWhileTimer();
            window.addEventListener("resize", function () { return updateDiagonalSize(); });
            [
                ui_8.UI.colorspaceSelect,
                ui_8.UI.coloringSelect,
                ui_8.UI.patternSelect,
                ui_8.UI.canvasSizeSelect,
                ui_8.UI.layersSelect,
                ui_8.UI.spotslayersSelect,
                ui_8.UI.cycleSpanSelect,
                ui_8.UI.fuseFpsSelect,
                ui_8.UI.easingCheckbox,
                // UI.withFullscreen,
                ui_8.UI.showFps,
            ].forEach(function (i) { return i.fire(); });
            document.addEventListener("visibilitychange", function () {
                console.log("\uD83D\uDC40 visibilitychange: document.hidden: ".concat(document.hidden));
                _controller_1.Controller.Benchmark.abortBenchmark();
                _features_4.Features.Fps.reset();
            });
            updateColorspaceLoadStatus();
            updateLayersLoadStatus();
            updateSpotsLayersLoadStatus();
            updateFrameDelayLoadStatus();
            updateWithFullscreen();
            updateShowFpsLoadStatus();
            updateClock();
            ui_8.UI.updateLanguage();
            updateUrlAnchor(url_1.Url.params);
            document.addEventListener("DOMContentLoaded", function () {
                // Catch up input values that the web browser quietly restores without firing events when a previously closed page is restored
                setTimeout(function () {
                    return [
                        ui_8.UI.colorspaceSelect,
                        ui_8.UI.coloringSelect,
                        ui_8.UI.patternSelect,
                        ui_8.UI.canvasSizeSelect,
                        ui_8.UI.layersSelect,
                        ui_8.UI.spotslayersSelect,
                        ui_8.UI.cycleSpanSelect,
                        ui_8.UI.fuseFpsSelect,
                        ui_8.UI.frameDelaySelect,
                        ui_8.UI.easingCheckbox,
                        ui_8.UI.withFullscreen,
                        ui_8.UI.showFps,
                        ui_8.UI.clockSelect,
                        ui_8.UI.brightnessSelect,
                        ui_8.UI.languageSelect,
                    ]
                        .forEach(function (i) { return i.catchUpRestore(url_1.Url.params); });
                }, 25);
            });
        };
    })(Events || (exports.Events = Events = {}));
});
define("script/screenshot", ["require", "exports", "script/controller/index", "script/ui"], function (require, exports, _controller_2, ui_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Screenshot = void 0;
    var Screenshot;
    (function (Screenshot) {
        Screenshot.initialize = function (params) {
            var screenshot = params["screenshot"];
            switch (screenshot) {
                case "favicon":
                    Screenshot.fixCanvasSize("1024px", "1024px");
                    Screenshot.adjustPlayButtonSize(3);
                    Screenshot.shuffleAnimation();
                    break;
                case "twitter-card":
                    Screenshot.fixCanvasSize("1200px", "630px");
                    Screenshot.adjustPlayButtonSize(2);
                    Screenshot.shuffleAnimation();
                    break;
                case "black":
                    ui_9.UI.screenBody.classList.add("black");
                    break;
                case "sample":
                    Screenshot.shuffleAnimation();
                    break;
            }
        };
        Screenshot.shuffleAnimation = function () {
            _controller_2.Controller.Animation.shuffleAnimation();
        };
        Screenshot.fixCanvasSize = function (width, height) {
            ["min-width", "max-width",].forEach(function (i) { return ui_9.UI.canvas.style.setProperty(i, width); });
            ["min-height", "max-height",].forEach(function (i) { return ui_9.UI.canvas.style.setProperty(i, height); });
            _controller_2.Controller.Animation.animator.updateDiagonalSize();
        };
        Screenshot.adjustPlayButtonSize = function (rate) {
            ui_9.UI.playButton.dom.style.setProperty("border-width", "".concat(rate, "px"));
            ui_9.UI.playButton.dom.style.setProperty("width", "".concat(11 * rate, "rem"));
            ui_9.UI.playButton.dom.style.setProperty("height", "".concat(11 * rate, "rem"));
            ui_9.UI.playButton.dom.style.setProperty("border-radius", "".concat(1.5 * rate, "rem"));
            ui_9.UI.playButton.dom.style.setProperty("padding", "".concat(1.5 * rate, "rem"));
        };
    })(Screenshot || (exports.Screenshot = Screenshot = {}));
});
define("script/index", ["require", "exports", "script/tools/index", "script/library/index", "script/features/index", "script/controller/index", "resource/config", "resource/control", "resource/evil-commonjs.config", "resource/evil-timer.js.config", "resource/images", "resource/powered-by", "resource/shortcuts", "script/url", "script/ui", "script/events", "script/screenshot"], function (require, exports, _tools_5, _library_10, _features_5, _controller_3, config_json_10, control_json_4, evil_commonjs_config_json_1, evil_timer_js_config_json_1, images_json_1, powered_by_json_2, shortcuts_json_2, url_2, ui_10, events_1, screenshot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    config_json_10 = __importDefault(config_json_10);
    control_json_4 = __importDefault(control_json_4);
    evil_commonjs_config_json_1 = __importDefault(evil_commonjs_config_json_1);
    evil_timer_js_config_json_1 = __importDefault(evil_timer_js_config_json_1);
    images_json_1 = __importDefault(images_json_1);
    powered_by_json_2 = __importDefault(powered_by_json_2);
    shortcuts_json_2 = __importDefault(shortcuts_json_2);
    url_2.Url.initialize();
    ui_10.UI.initialize();
    events_1.Events.initialize();
    _controller_3.Controller.initialize(url_2.Url.params);
    screenshot_1.Screenshot.initialize(url_2.Url.params);
    console.log("\uD83D\uDCE6 BUILD AT: ".concat(build.at, " ( ").concat(_tools_5.Tools.Timespan.toDisplayString(new Date().getTime() - build.tick, 1), " ").concat(_library_10.Library.Locale.map("ago"), " )"));
    var consoleInterface = globalThis;
    var Resource = {
        config: config_json_10.default,
        control: control_json_4.default,
        evilCommonJsConfig: evil_commonjs_config_json_1.default,
        evilTimerJsConfig: evil_timer_js_config_json_1.default,
        images: images_json_1.default,
        locale: _library_10.Library.Locale.master,
        poweredBy: powered_by_json_2.default,
        shortcuts: shortcuts_json_2.default
    };
    var modules = {
        Tools: _tools_5.Tools,
        Library: _library_10.Library,
        Features: _features_5.Features,
        Controller: _controller_3.Controller,
        Url: url_2.Url,
        UI: ui_10.UI,
        Events: events_1.Events,
        Screenshot: screenshot_1.Screenshot,
        Resource: Resource
    };
    Object.entries(modules).forEach(function (_a) {
        var name = _a[0], module = _a[1];
        return consoleInterface[name] = module;
    });
    console.log("\uD83D\uDCE6 Available modules: ".concat(Object.keys(modules).join(", ")));
});
//# sourceMappingURL=index.js.map