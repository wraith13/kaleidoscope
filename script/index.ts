import { Library } from "@library";
import { Tools } from "@tools";
import { Features } from "@features";
import control from "@resource/control.json";
import config from "@resource/config.json";
import poweredBy from "@resource/powered-by.json";
const screenBody = Library.UI.getElementById("div", "screen-body");
const canvas = Library.UI.getElementById("div", "canvas");
const topCoat = Library.UI.getElementById("div", "top-coat");
const keyboardShortcut = Library.UI.getElementById("div", "keyboard-shortcut");
const animator = new Features.Animation.Animator(canvas);
const isInAnimation = () => document.body.classList.contains("immersive");
const playAnimation = () =>
{
    document.body.classList.toggle("immersive", true);
    document.body.classList.toggle("mousemove", false);
    keyboardShortcut.classList.toggle("show", false);
    updateFullscreenState();
    Features.Fps.reset();
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
    document.body.classList.toggle("immersive", false);
    updateFullscreenState(false);
};
const toggleAnimation = () =>
    isInAnimation() ? pauseAnimation(): playAnimation();
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
const updatePattern = (): unknown => update(() => animator.setPattern(patternSelect.get()));
const updateColoring = (): unknown => update(() => animator.setColoring(coloringSelect.get()));
const updateLayers = (): void => update(() => animator.setLayers(parseInt(layersSelect.get())));
const updateCanvasSize = () =>
{
    const newCanvasSize = parseFloat(canvasSizeSelect.get());
    const newCanvasSizeRate = Math.sqrt(newCanvasSize /100.0);
    const canvasMargin = (1 -newCanvasSizeRate) *100 /2;
    [ "top", "right", "bottom", "left", ].forEach
    (
        i => canvas.style.setProperty(i, `${canvasMargin}%`)
    );
    updateDiagonalSize();
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
    patternSelect.reloadOptions();
    coloringSelect.reloadOptions();
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
    id:"play-button",
    click: (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        toggleAnimation();
    }
});
const patternSelect = new Library.Control.Select
(
    control.pattern,
    { change: () => updatePattern(), }
);
const coloringSelect = new Library.Control.Select
(
    control.coloring,
    { change: () => updateColoring(), }
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
topCoat.addEventListener
(
    "click",
    event =>
    {
        event.stopPropagation();
        if (event.target === event.currentTarget)
        {
            console.log("👆 topCoat.Click:", event, topCoat);
            pauseAnimation();
        }
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
updatePattern();
updateColoring();
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
    "switchPatternForward": () => patternSelect.switch(true),
    "switchPatternBackward": () => patternSelect.switch(false),
    "switchColoringForward": () => coloringSelect.switch(true),
    "switchColoringBackward": () => coloringSelect.switch(false),
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
