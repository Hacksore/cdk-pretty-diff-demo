import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkPrettyDiffDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // create s3 bucket
    const bucket = new cdk.aws_s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
    });

    // test bucket
    bucket.addLifecycleRule({
      expiration: cdk.Duration.days(365),
    });

  }
}
