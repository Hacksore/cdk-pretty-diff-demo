import { resolve } from "path";
import { writeFileSync } from "fs";
import { getCustomDiff, renderCustomDiffToHtmlString } from "cdk-pretty-diff";

const nicerDiffs = await getCustomDiff();
const html = renderCustomDiffToHtmlString(nicerDiffs, "CDK Diff");
writeFileSync(resolve(new URL(".", import.meta.url).pathname, "../cdk.out/diff.html"), html);
