import * as cdk from "aws-cdk-lib";
import { CdkPrettyDiffDemoStack } from "./cdk-pretty-diff-demo-stack.js";

const app = new cdk.App();
new CdkPrettyDiffDemoStack(app, "CdkPrettyDiffDemoStack", {
  env: { account: "065495811055", region: "us-east-1" },
});
