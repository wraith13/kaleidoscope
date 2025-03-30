import { Library } from "@library";
import { Tools } from "@tools";
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
