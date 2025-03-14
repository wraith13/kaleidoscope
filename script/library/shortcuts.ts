import shortcuts from "@resource/shortcuts.json";
export namespace Shortcuts
{
    export type CommandKey = Exclude<(typeof shortcuts)[number]["onKeyDown"] | (typeof shortcuts)[number]["onKeyUp"], undefined>;
    export type CommandMap = { [key in Shortcuts.CommandKey]-?: () => void };
    const keyDisplayNames =
    {
        "ArrowUp": "↑",
        "ArrowDown": "↓",
        "ArrowLeft": "←",
        "ArrowRight": "→",
        " ": "Space",
        "Control": "Ctrl",
    };
    const getDisplayKeyName = (key: string) => keyDisplayNames[key as keyof typeof keyDisplayNames] || key;
    export const getDisplayList = () =>
        shortcuts.map
        (
            i =>
            ({
                keys: i.keys.map(key => getDisplayKeyName(key)),
                description: i.description,
            })
        );
    const isInputElementFocused = () =>
        ["input", "textarea", "button"].includes(document.activeElement?.tagName?.toLowerCase() ?? "");
    const normalizeKey = (key: string, code: string) =>
        code === "Space" ? " ":
        key.length === 1 ? key.toUpperCase():
        key;
    const pressedKeys: string[] = [];
    export const handleKeyEvent = (type: "onKeyDown" | "onKeyUp", event: KeyboardEvent, commandMap: CommandMap) =>
    {
        const normalizedKey = normalizeKey(event.key, event.code);
        let shortcutkeys = pressedKeys.concat([]);
        switch(type)
        {
        case "onKeyDown":
            pressedKeys.push(normalizedKey);
            shortcutkeys = pressedKeys;
            break;
        case "onKeyUp":
            while(true)
            {
                const i = pressedKeys.indexOf(normalizedKey);
                if (0 <= i)
                {
                    pressedKeys.splice(i, 1);
                }
                else
                {
                    break;
                }
            }
            break;
        }
        if ( ! isInputElementFocused())
        {
            const commandKeys = shortcuts.filter
            (
                shortcut =>
                    shortcut.keys.length === shortcutkeys.length &&
                    shortcut.keys.every(key => shortcutkeys.includes(key)) &&
                    shortcut[type]
            )
            .map(i => i[type] as CommandKey);
            if (0 < commandKeys.length)
            {
                event.preventDefault();
                event.stopPropagation();
            }
            commandKeys.forEach
            (
                i =>
                {
                    console.log("👆 KeyboardShortcut:", i, type, pressedKeys);
                    const command = commandMap[i];
                    if (command)
                    {
                        command();
                    }
                    else
                    {
                        console.error("🦋 FIXME: Shortcuts.handleKeyEvent.NotFountCommand", i);
                    }
                }
            );
            if ("onKeyDown" === type && commandKeys.length <= 0 && ! ["Shift", "Control"].includes(normalizedKey))
            {
                console.log("💡 UnknownKeyDown:", pressedKeys);
            }
        }
    }
    export const setCommandMap = (commandMap: CommandMap) =>
    {
        window.addEventListener("keydown", (event) => Shortcuts.handleKeyEvent("onKeyDown", event, commandMap));
        window.addEventListener("keyup", (event) => Shortcuts.handleKeyEvent("onKeyUp", event, commandMap));
    };
}
