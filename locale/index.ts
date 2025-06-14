const manifest =
{
    template: `<link rel="manifest" lang="__LANG__" href="web.manifest.__LANG__.json" />`,
    separetor: "\n",
    output: "./locale/generated/manifest.html",
};
const description =
{
    template: `<meta name="description" lang="__LANG__" content="__DESCRIPTION__">`,
    separetor: "\n",
    output: "./locale/generated/description.html",
};
const twitterDescription =
{
    template: `<meta name="twitter:description" lang="__LANG__" content="__DESCRIPTION__">`,
    separetor: "\n",
    output: "./locale/generated/twitter-description.html",
}
const fs = require("fs");
const master = { } as Record<string, any>;
const makeFile = (data: { template: string, separetor: string, output: string }) => fs.writeFileSync
(
    data.output,
    Object.keys(master)
    .map
    (
        (lang: string) =>
        data.template
            .replace(/__LANG__/g, lang)
            .replace(/__DESCRIPTION__/g, master[lang]["description"])
    ).join(data.separetor),
    "utf8"
);
const main = async () =>
{
    const langPath = "./resource/lang";
    const temporaryMaster = { } as Record<string, any>;
    await Promise.all
    (
        fs.readdirSync(langPath)
        .filter((file: string) => file.endsWith(".json"))
        .sort()
        .map
        (
            async (file: string) =>
            {
                const lang = file.replace(/\.json$/, "");
                const json = JSON.parse(await fs.promises.readFile(`${langPath}/${file}`, "utf8"));
                temporaryMaster[lang] = json;
            }
        )
    );
    Object.keys(temporaryMaster)
        .sort()
        .forEach(key => master[key] = temporaryMaster[key]);
    fs.writeFileSync
    (
        "./locale/generated/master.ts",
        `export const localeMaster = ${JSON.stringify(master, null, 4)};`,
        "utf8"
    );
    makeFile(manifest);
    makeFile(description);
    makeFile(twitterDescription);
};
main();
