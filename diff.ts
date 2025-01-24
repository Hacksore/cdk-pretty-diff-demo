import "dotenv/config";
import { resolve } from "path";
import { writeFileSync } from "fs";
import { getCustomDiff, renderCustomDiffToHtmlString } from "cdk-pretty-diff";

const nicerDiffs = await getCustomDiff();
const html = renderCustomDiffToHtmlString(nicerDiffs, "CDK Diff");
const __dirname = resolve(new URL(".", import.meta.url).pathname)
writeFileSync(`${__dirname}/diff.html`, html);
