import { Library } from "@library";
import { Tools } from "@tools";
import { Features } from "@features";
import control from "@resource/control.json";
import config from "@resource/config.json";
import poweredBy from "@resource/powered-by.json";
const screenBody = Library.UI.getElementById("div", "screen-body");
const canvas = Library.UI.getElementById("div", "canvas");
const topCoat = Library.UI.getElementById("div", "top-coat");
const animator = new Features.Animation.Animator(canvas);
const isInAnimation = () => document.body.classList.contains("immersive");
const playAnimation = () =>
{
    document.body.classList.toggle("immersive", true);
    document.body.classList.toggle("mousemove", false);
    updateFullscreenState();
    start();
};
const pauseAnimation = () =>
{
    document.body.classList.toggle("immersive", false);
    updateFullscreenState(false);
};
const playOrPauseAnimation = () =>
    isInAnimation() ? pauseAnimation(): playAnimation();
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
    const canvasMergin = (1 -newCanvasSizeRate) *100 /2;
    [ "top", "right", "bottom", "left", ].forEach
    (
        i => canvas.style.setProperty(i, `${canvasMergin}%`)
    );
    updateDiagonalSize();
};
const updateCycleSpan = (): void => update(() => animator.setCycleSpan(parseInt(cycleSpanSelect.get())));
const updateFuseFps = (): number => Features.Fps.fuseFps = parseFloat(fuseFpsSelect.get());
const updateEasing = () => update(() => animator.setEasing(easingCheckbox.get()));
const updateShowFps = () =>
{
    fpsElement.classList.toggle("hide", ! showFPS.get());
};
//const playButton =
new Library.Control.Button
({
    id:"play-button",
    click: (event, button) =>
    {
        event.stopPropagation();
        button.dom.blur();
        playOrPauseAnimation();
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
const showFPS = new Library.Control.Checkbox
(
    control.showFPS,
    { change: () => updateShowFps(), }
);
const fpsElement = Library.UI.getElementById("div", "fps");
Library.UI.replaceChildren
(
    Library.UI.getElementById("div", "keyboard-shortcut"),
    Library.Shortcuts.getDisplayList().map
    (
        i =>
        [
            { tag: "span", children: i.keys.map(key => Library.UI.createElement({ tag: "kbd", text: key })) } as const,
            { tag: "span", text: Library.Locale.map(i.description as Library.Locale.KeyType), } as const,
        ]
    )
    .reduce((a, b) => a.concat(b), [])
);
Library.UI.replaceChildren
(
    Library.UI.querySelector("ul", "#powered-by ul"),
    Object.entries(poweredBy).map
    (
        ([ text, href, ]) => ({ tag: "li", children: [ Library.UI.createElement({ tag: "a", text, attributes: { href, } }), ], })
    )
);
Library.UI.getElementsByClassName("div", "layer")[0].style.setProperty("background-color", animator.phiColoring.makeColor(0.0));
Library.UI.replaceChildren
(
    Library.UI.getElementById("ul", "information-list"),
    config.informations.map(i => ({ tag: "li", text: Library.Locale.map(<Library.Locale.KeyType>i), }))
);
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
const animation = (now: number) =>
{
    if (isInAnimation())
    {
        Features.Fps.step(now);
        if (showFPS.get())
        {
            fpsElement.innerText = Features.Fps.getText();
        }
        if (Features.Fps.isUnderFuseFps())
        {
            pauseAnimation();
        }
        else
        {
            animator.step(now);
            window.requestAnimationFrame(animation);
        }
    }
};
const start = () => setTimeout
(
    () => window.requestAnimationFrame
    (
        now =>
        {
            Features.Fps.reset();
            animator.startStep(now);
            animation(now);
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
const mousemoveTimer = new Library.UI.ToggleClassForWhileTimer();
screenBody.addEventListener
(
    "mousemove",
    _event =>
    {
        if (config.log.mousemove && ! mousemoveTimer.isOn())
        {
            console.log("🖱️ MouseMove:", event, screenBody);
        }
        mousemoveTimer.start(document.body, "mousemove", 1000)
    }
)
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
    Library.UI.querySelectorAllWithFallback("span", [ "[data-lang-key]" ])
    .forEach(i => i.innerText = Library.Locale.map(i.getAttribute("data-lang-key") as Library.Locale.KeyType));
    Library.Shortcuts.setCommandMap
({
    "nop": () => { },
    "toggleHideUI": () => document.body.classList.toggle("hide-ui"),
    "playOrPause": () => playOrPauseAnimation(),
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
    "toggleShowFPS": () =>
    {
        showFPS.toggle();
        updateShowFps();
    }
});
window.addEventListener("resize", () => updateDiagonalSize());
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${Tools.Timespan.toDisplayString(new Date().getTime() -build.tick, 1)} ${Library.Locale.map("ago")} )`);
