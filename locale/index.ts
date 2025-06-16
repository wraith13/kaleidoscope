import fs from "fs";
const sourceDirectory = "./resource/lang";
const outputDirectory = "./locale/generated";
const description =
{
    template: `<meta name="description" lang="__LANG__" content="__DESCRIPTION__">`,
    separetor: "\n",
    output: `${outputDirectory}/description.html`,
};
const twitterDescription =
{
    template: `<meta name="twitter:description" lang="__LANG__" content="__DESCRIPTION__">`,
    separetor: "\n",
    output: `${outputDirectory}/twitter-description.html`,
}
const writeHtmlPart = (master: Record<string, any>, data: { template: string, separetor: string, output: string }) => fs.writeFileSync
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
const makeMasterFromSource = async () =>
{
    const temporaryMaster = { } as Record<string, any>;
    await Promise.all
    (
        fs.readdirSync(sourceDirectory)
        .filter((file: string) => file.endsWith(".json"))
        .sort()
        .map
        (
            async (file: string) =>
            {
                const lang = file.replace(/\.json$/, "");
                const json = JSON.parse(await fs.promises.readFile(`${sourceDirectory}/${file}`, "utf8"));
                temporaryMaster[lang] = json;
            }
        )
    );
    const master = { } as Record<string, any>;
    Object.keys(temporaryMaster)
        .sort()
        .forEach(key => master[key] = temporaryMaster[key]);
    return master;
};
const main = async () =>
{
    const master = await makeMasterFromSource();
    fs.writeFileSync
    (
        `./README.md`,
        fs.readFileSync("./README.template.md", "utf8")
            .replace(/__LANG_LABEL_LIST__/g, Object.keys(master).map(key => master[key]["lang-label"]).join(", ")),
        "utf8"
    );
    fs.writeFileSync
    (
        `${outputDirectory}/master.ts`,
        `export const localeMaster = ${JSON.stringify(master, null, 4)};`,
        "utf8"
    );
    fs.writeFileSync
    (
        `${outputDirectory}/manifest.langs.json`,
        JSON.stringify(Object.keys(master).map(lang => ({ "__LOCALE__": lang})), null, 4),
        "utf8"
    );
    writeHtmlPart(master, description);
    writeHtmlPart(master, twitterDescription);
};
main();
