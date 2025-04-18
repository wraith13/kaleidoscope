import { Library } from "@library";
import { Tools } from "@tools";
import config from "@resource/config.json";
import control from "@resource/control.json";
import poweredBy from "@resource/powered-by.json";
export namespace UI
{
    export const screenBody =
        Library.UI.getElementById("div", "screen-body");
    export const canvas =
        Library.UI.getElementById("div", "canvas");
    export const playButton =
        new Library.Control.Button({ id: "play-button", });
    export const runBenchmarkButton =
        new Library.Control.Button({ id: "run-benchmark", });
    export const colorspaceSelect =
        new Library.Control.Select(control.colorspace);
    export const coloringSelect =
        new Library.Control.Select(control.coloring);
    export const patternSelect =
        new Library.Control.Select(control.pattern);
    export const canvasSizeSelect =
        new Library.Control.Select(control.canvasSize, { makeLabel: i => `${i} %` });
    export const layersSelect =
        new Library.Control.Select(control.layers);
    export const spotslayersSelect =
        new Library.Control.Select(control.spotsLayers, { makeLabel: i => `${i} %` });
    export const cycleSpanSelect =
        new Library.Control.Select(control.cycleSpan, { makeLabel: Tools.Timespan.toDisplayString });
    export const fuseFpsSelect =
        new Library.Control.Select(control.fuseFps);
    export const easingCheckbox =
        new Library.Control.Checkbox(control.easing);
    export const withFullscreen =
        new Library.Control.Checkbox(control.withFullscreen);
    export const showFps =
        new Library.Control.Checkbox(control.showFPS);
    export const languageSelect =
        new Library.Control.Select
        (
            control.language,
            {
                makeLabel: i => "Auto" === i ?
                    Library.Locale.map("Auto"):
                    Library.Locale.map("lang-label", i as Library.Locale.Language),
                change: () => updateLanguage(),
            }
        );
    export const fpsDisplay =
        Library.UI.getElementById("div", "fps");
    export const benchmarkProgressBar =
        Library.UI.getElementById("div", "benchmark-progress-bar");
    export const benchmarkCanvas =
        Library.UI.getElementById("div", "benchmark-canvas");
    export const keyboardShortcut =
        Library.UI.getElementById("div", "keyboard-shortcut");
    export const benchmarkPhase =
        Library.UI.getElementById("span", "benchmark-phase");
    export const scorePanel =
        Library.UI.getElementById("div", "score-panel");
    export const benchmarkDescription =
        Library.UI.getElementById("div", "benchmark-popup-description");
    export const benchmarkAbortButton =
        new Library.Control.Button({ id: "benchmark-abort-button", });
    export const benchmarkResultCloseButton =
        new Library.Control.Button({ id: "benchmark-result-close-button", });
    export const updateLanguage = () =>
    {
        Library.Locale.setLocale(UI.languageSelect.get() as Library.Locale.Language | "Auto");
        UI.colorspaceSelect.reloadOptions();
        UI.coloringSelect.reloadOptions();
        UI.patternSelect.reloadOptions();
        UI.canvasSizeSelect.reloadOptions();
        UI.layersSelect.reloadOptions();
        UI.cycleSpanSelect.reloadOptions();
        UI.fuseFpsSelect.reloadOptions();
        UI.languageSelect.reloadOptions();
        Library.UI.querySelectorAllWithFallback("span", [ "[data-lang-key]" ])
            .forEach(i => i.innerText = Library.Locale.map(i.getAttribute("data-lang-key") as Library.Locale.Label));
        Library.UI.replaceChildren
        (
            UI.keyboardShortcut,
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
                    { tag: "span", text: Library.Locale.map(i.description as Library.Locale.Label), } as const
                ]
            )
            .reduce((a, b) => a.concat(b), [])
        );
        Library.UI.replaceChildren
        (
            Library.UI.getElementById("ul", "information-list"),
            config.informations.map(i => ({ tag: "li", text: Library.Locale.map(<Library.Locale.Label>i), }))
        );
    }
    export const initialize = () =>
    {
        if ( ! Library.UI.fullscreenEnabled && withFullscreen.dom.parentElement)
        {
            withFullscreen.dom.parentElement.style.setProperty("display", "none");
        }
        Library.UI.replaceChildren
        (
            Library.UI.querySelector("ul", "#powered-by ul"),
            Object.entries(poweredBy).map
            (
                ([ text, href, ]) => ({ tag: "li", children: [ Library.UI.createElement({ tag: "a", text, attributes: { href, } }), ], })
            )
        );
        updateLanguage();
    };
}
