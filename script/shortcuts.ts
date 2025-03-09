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
    const shouldRequireFocusCheck = (keys: string[]) =>
        ! keys.some(key => ["Shift", "Control", "Alt", "Meta"].includes(key));
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
    const joinable = <T>(value: T) => undefined !== value && null !== value ? [ value, ]: [];
    export const handleKeyEvent = (type: "onKeyDown" | "onKeyUp", event: KeyboardEvent, commandMap: CommandMap) =>
    {
        const normalizedKey = normalizeKey(event.key, event.code);
        const pressedKeys =
        [
            ...joinable(event.shiftKey ? "Shift": null),
            ...joinable(event.ctrlKey ? "Control": null),
            normalizedKey,
        ]
        .filter((i, ix, list) => ix === list.indexOf(i));
        if ( ! shouldRequireFocusCheck(pressedKeys) || ! isInputElementFocused())
        {
            const commandKeys = shortcuts.filter
            (
                shortcut =>
                    shortcut.keys.length === pressedKeys.length &&
                    shortcut.keys.every(key => pressedKeys.includes(key)) &&
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
}
