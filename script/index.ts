import { Library } from "@library";
import { Tools } from "@tools";
import { Features } from "@features";
import control from "@resource/control.json";
import config from "@resource/config.json";
import poweredBy from "@resource/powered-by.json";
const screenBody = Library.UI.getElementById("div", "screen-body");
const canvas = Library.UI.getElementById("div", "canvas");
const benchmarkProgressBar = Library.UI.getElementById("div", "benchmark-progress-bar");
const benchmarkCanvas = Library.UI.getElementById("div", "benchmark-canvas");
const keyboardShortcut = Library.UI.getElementById("div", "keyboard-shortcut");
const animator = new Features.Animation.Animator(canvas);
const isInMode = (mode: string) =>
    document.body.classList.contains("immersive") && document.body.classList.contains(mode);
const intoMode = (mode: string) =>
{
    document.body.classList.toggle("immersive", true);
    document.body.classList.toggle(mode, true);
    document.body.classList.toggle("mousemove", false);
    keyboardShortcut.classList.toggle("show", false);
    updateFullscreenState();
    Features.Fps.reset();
}
const exitMode = (mode: string) =>
{
    document.body.classList.toggle("immersive", false);
    document.body.classList.toggle(mode, false);
    updateFullscreenState(false);
};
const isInAnimation = () => isInMode("animation");
const playAnimation = () =>
{
    intoMode("animation");
    updateFps();
    start();
};
const pauseAnimation = () =>
{
    if (isInAnimation())
    {
        console.log
        (
            "📈 fps",
            {
                count: Features.Fps.standardDeviation.count,
                mean: Features.Fps.standardDeviation.mean,
                standardDeviation: Features.Fps.standardDeviation.getStandardDeviation(),
            }
        );
    }
    exitMode("animation");
};
const toggleAnimation = () =>
{
    switch(true)
    {
    case isInAnimation():
        pauseAnimation();
        break;
    case isInBenchmark():
        stopBenchmark();
        break;
    default:
        playAnimation();
        break;
    }
}
const updateFps = () =>
{
    if (showFps.get())
    {
        fpsDisplay.innerText = Features.Fps.getText();
    }
}
const update = (setter?: () => unknown) =>
{
    setter?.();
    if ( ! isInAnimation())
    {
        animator.update();
    }
};
const updateDiagonalSize = () => update(() => animator.updateDiagonalSize());
const updateColorspace = (): unknown => update(() => animator.setColorspace(colorspaceSelect.get()));
const updateColoring = (): unknown => update(() => animator.setColoring(coloringSelect.get()));
const updatePattern = (): unknown => update(() => animator.setPattern(patternSelect.get()));
const updateLayers = (): void => update(() => animator.setLayers(parseInt(layersSelect.get())));
const setCanvasSize = (size: string) =>
{
    [ "width", "height", ].forEach
    (
        i => canvas.style.setProperty(i, size)
    );
    updateDiagonalSize();
};
const updateCanvasSize = () =>
{
    const newCanvasSize = parseFloat(canvasSizeSelect.get());
    const newCanvasSizeRate = Math.sqrt(newCanvasSize /100.0);
    const canvasSize = newCanvasSizeRate *100.0;
    setCanvasSize(`${canvasSize}%`);
};
const updateCycleSpan = (): void => update(() => animator.setCycleSpan(parseInt(cycleSpanSelect.get())));
const updateFuseFps = (): number => Features.Fps.fuseFps = parseFloat(fuseFpsSelect.get());
const updateEasing = () => update(() => animator.setEasing(easingCheckbox.get()));
const updateShowFps = () =>
{
    fpsDisplay.classList.toggle("hide", ! showFps.get());
};
const initializeLanguage = () =>
{
    Library.UI.querySelectorAllWithFallback("span", [ "[data-lang-key]" ])
        .forEach(i => i.innerText = Library.Locale.map(i.getAttribute("data-lang-key") as Library.Locale.KeyType));
    Library.UI.replaceChildren
    (
        keyboardShortcut,
        Library.Shortcuts.getDisplayList().map
        (
            i =>
            [
                {
                    tag: "span",
                    children: i.keyss
                        .map(j => j.map(key => ({ tag: "kbd", text: key })))
                        .reduce
                        (
                            (accumulator, item, i) =>
                            [
                                ...accumulator,
                                ...(0 < i ? [{ tag: "span", className: "separator" , text: "/", }]: []),
                                ...item,
                            ],
                            [] as Library.UI.ElementSource[]
                        ),
                } as const,
                { tag: "span", text: Library.Locale.map(i.description as Library.Locale.KeyType), } as const
            ]
        )
        .reduce((a, b) => a.concat(b), [])
    );
    Library.UI.replaceChildren
    (
        Library.UI.getElementById("ul", "information-list"),
        config.informations.map(i => ({ tag: "li", text: Library.Locale.map(<Library.Locale.KeyType>i), }))
    );
};
const updateLanguage = () =>
{
    Library.Locale.setLocale(languageSelect.get() as Library.Locale.Type | "Auto");
    colorspaceSelect.reloadOptions();
    coloringSelect.reloadOptions();
    patternSelect.reloadOptions();
    canvasSizeSelect.reloadOptions();
    layersSelect.reloadOptions();
    cycleSpanSelect.reloadOptions();
    fuseFpsSelect.reloadOptions();
    languageSelect.reloadOptions();
    initializeLanguage();
}
//const playButton =
new Library.Control.Button
({
    id: "play-button",
    click: (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        toggleAnimation();
    }
});
//const runBenchmarkButton =
new Library.Control.Button
({
    id: "run-benchmark",
    click: (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        runBenchmark();
    }
});
const colorspaceSelect = new Library.Control.Select
(
    control.colorspace,
    { change: () => updateColorspace(), }
);
const coloringSelect = new Library.Control.Select
(
    control.coloring,
    { change: () => updateColoring(), }
);
const patternSelect = new Library.Control.Select
(
    control.pattern,
    { change: () => updatePattern(), }
);
const canvasSizeSelect = new Library.Control.Select
(
    control.canvasSize,
    { makeLabel: i => `${i} %`, change: () => updateCanvasSize(), }
);
const layersSelect = new Library.Control.Select
(
    control.layers,
    { change: () => updateLayers(), }
);
const cycleSpanSelect = new Library.Control.Select
(
    control.cycleSpan,
    { makeLabel: Tools.Timespan.toDisplayString, change: () => updateCycleSpan(), }
);
const fuseFpsSelect = new Library.Control.Select
(
    control.fuseFps,
    { change: () => updateFuseFps(), }
);
const easingCheckbox = new Library.Control.Checkbox(control.easing);
const withFullscreen = new Library.Control.Checkbox(control.withFullscreen);
if ( ! Library.UI.fullscreenEnabled && withFullscreen.dom.parentElement)
{
    withFullscreen.dom.parentElement.style.setProperty("display", "none");
}
const showFps = new Library.Control.Checkbox
(
    control.showFPS,
    { change: () => updateShowFps(), }
);
const languageSelect = new Library.Control.Select
(
    control.language,
    {
        makeLabel: i => "Auto" === i ? Library.Locale.map("Auto"): Library.Locale.map("lang-label", i as Library.Locale.Type),
        change: () => updateLanguage(),
    }
);
const fpsDisplay = Library.UI.getElementById("div", "fps");
Library.UI.replaceChildren
(
    Library.UI.querySelector("ul", "#powered-by ul"),
    Object.entries(poweredBy).map
    (
        ([ text, href, ]) => ({ tag: "li", children: [ Library.UI.createElement({ tag: "a", text, attributes: { href, } }), ], })
    )
);
//Library.UI.getElementsByClassName("div", "layer")[0].style.setProperty("background-color", animator.phiColoring.makeColor(0.0));
const updateFullscreenState = (fullscreen?: boolean) =>
{
    if (Library.UI.fullscreenEnabled)
    {
        if (fullscreen ?? withFullscreen.get())
        {
            Library.UI.requestFullscreen(document.body);
        }
        else
        {
            Library.UI.exitFullscreen();
        }
    }
};
const loopAnimation = (now: number) =>
{
    if (isInAnimation())
    {
        Features.Fps.step(now);
        updateFps();
        if (Features.Fps.isUnderFuseFps())
        {
            pauseAnimation();
        }
        else
        {
            animator.step(now);
            window.requestAnimationFrame(loopAnimation);
        }
    }
};
const start = () => setTimeout
(
    () => window.requestAnimationFrame
    (
        now =>
        {
            animator.startStep(now);
            loopAnimation(now);
        }
    ),
    config.startWait
);
const loopBenchmark = (now: number) =>
{
    if (isInAnimation())
    {
        Features.Fps.step(now);
        updateFps();
        if (Features.Fps.isUnderFuseFps())
        {
            stopBenchmark();
        }
        else
        {
            animator.step(now);
            window.requestAnimationFrame(loopBenchmark);
        }
    }
};
const isInBenchmark = () => isInMode("benchmark");
const setBenchmarkProgressBarSize = (size: number) =>
    Library.UI.cullOrBreed(benchmarkProgressBar, { tag: "div", className: "progress-block", }, size);
const setBenchmarkProgressBarProgress = (progress: number) =>
    Array.from(benchmarkProgressBar.children).forEach((i, ix) => i.classList.toggle("on", ix < progress));
const runBenchmark = () =>
{
    intoMode("benchmark");
    setBenchmarkProgressBarSize(7);
    setBenchmarkProgressBarProgress(1);
    updateFps();
    setTimeout
    (
        () => window.requestAnimationFrame
        (
            now =>
            {
                animator.startStep(now);
                loopBenchmark(now);
            }
        ),
        config.startWait
    );
};
const stopBenchmark = () =>
{
    if (isInBenchmark())
    {
        console.log
        (
            "📈 fps",
            {
                count: Features.Fps.standardDeviation.count,
                mean: Features.Fps.standardDeviation.mean,
                standardDeviation: Features.Fps.standardDeviation.getStandardDeviation(),
            }
        );
    }
    exitMode("benchmark");
};
canvas.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        console.log("👆 canvas.Click: pauseAnimation", event, canvas);
        pauseAnimation();
    }
);
benchmarkCanvas.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        console.log("👆 benchmarkCanvas.Click: stopBenchmark", event, benchmarkCanvas);
        stopBenchmark();
    }
);
const mouseMoveTimer = new Library.UI.ToggleClassForWhileTimer();
screenBody.addEventListener
(
    "mousemove",
    _event =>
    {
        if (config.log.mousemove && ! mouseMoveTimer.isOn())
        {
            console.log("🖱️ MouseMove:", event, screenBody);
        }
        mouseMoveTimer.start(document.body, "mousemove", 1000)
    }
);
updateColorspace();
updateColoring();
updatePattern();
updateCanvasSize();
updateEasing();
updateLayers();
updateCycleSpan();
updateFuseFps();
updateShowFps();
Library.UI.querySelectorAllWithFallback("label", [ "label[for]:has(select)", "label[for]" ])
    .forEach(label => Library.UI.showPickerOnLabel(label));
initializeLanguage();
Library.Shortcuts.setCommandMap
({
    "nop": () => { },
    "toggleHideUI": () =>
    {
        document.body.classList.toggle("hide-ui");
        if (document.body.classList.contains("hide-ui"))
        {
            keyboardShortcut.classList.toggle("show", false);
        }
    },
    "toggleAnimation": () => toggleAnimation(),
    "switchColoringForward": () => coloringSelect.switch(true),
    "switchColoringBackward": () => coloringSelect.switch(false),
    "switchPatternForward": () => patternSelect.switch(true),
    "switchPatternBackward": () => patternSelect.switch(false),
    "increaseCanvasSize": () => canvasSizeSelect.switch(true),
    "decreaseCanvasSize": () => canvasSizeSelect.switch(false),
    "increaseLayer": () => layersSelect.switch(true),
    "decreaseLayer": () => layersSelect.switch(false),
    "speedDown": () => cycleSpanSelect.switch(true),
    "speedUp": () => cycleSpanSelect.switch(false),
    "toggleFullScreen": () =>
    {
        withFullscreen.toggle();
        if (isInAnimation())
        {
            updateFullscreenState();
        }
    },
    "toggleShowFps": () =>
    {
        showFps.toggle();
        updateShowFps();
    },
    "unknownKeyDown": () =>
    {
        showShortcutsTimer.start(keyboardShortcut, "show", 3000);
    }
});
const showShortcutsTimer = new Library.UI.ToggleClassForWhileTimer();
window.addEventListener("resize", () => updateDiagonalSize());
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${Tools.Timespan.toDisplayString(new Date().getTime() -build.tick, 1)} ${Library.Locale.map("ago")} )`);
