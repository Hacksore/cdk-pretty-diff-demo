const { resolve } = require('path');
const { writeFileSync } = require('fs');
const { getCustomDiff, renderCustomDiffToHtmlString } = require('cdk-pretty-diff');

(async () => {
  const nicerDiffs = await getCustomDiff();
  const html = renderCustomDiffToHtmlString(nicerDiffs, 'CDK Diff');
  writeFileSync(resolve(__dirname, '../cdk.out/diff.html'), html);
})();
