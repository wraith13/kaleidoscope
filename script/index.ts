import { Controller } from "@controller";
import { Features } from "@features";
import { Library } from "@library";
import { Tools } from "@tools";
import config from "@resource/config.json";
import control from "@resource/control.json";
import evilCommonJsConfig from "@resource/evil-commonjs.config.json";
import evilTimerJsConfig from "@resource/evil-timer.js.config.json";
import images from "@resource/images.json";
import localeEn from "@resource/lang.en.json";
import localeJa from "@resource/lang.ja.json";
import poweredBy from "@resource/powered-by.json";
import shortcuts from "@resource/shortcuts.json";
import { UI } from "./ui";
import { Events } from "./events";
UI.initialize();
Events.initialize();
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${Tools.Timespan.toDisplayString(new Date().getTime() -build.tick, 1)} ${Library.Locale.map("ago")} )`);
const consoleInterface = globalThis as any;
const Resource =
{
    config,
    control,
    evilCommonJsConfig,
    evilTimerJsConfig,
    images,
    localeEn,
    localeJa,
    poweredBy,
    shortcuts
};
const modules =
{
    Controller,
    Features,
    Library,
    Tools,
    UI,
    Events,
    Resource
};
Object.entries(modules).forEach(([ name, module ]) => consoleInterface[name] = module);
console.log(`📦 Available modules: ${Object.keys(modules).join(", ")}`);
