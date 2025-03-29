import { Library } from "@library";
import { Tools } from "@tools";
import { Controller } from "@controller";
import { UI } from "./ui";
import { Events } from "./events";
Events.initialize();
UI.initialize();
Controller.Animation.initialize();
interface BuildInformation
{
    at: string;
    tick: number;
}
declare var build: BuildInformation;
console.log(`📦 BUILD AT: ${build.at} ( ${Tools.Timespan.toDisplayString(new Date().getTime() -build.tick, 1)} ${Library.Locale.map("ago")} )`);
