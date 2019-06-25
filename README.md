# AWS CDK: Create an EKS Cluster into an existing vpc

or: how to turn 20 lines of typescript into 267 lines of CloudFormation.

## Getting started

* `git clone https://github.com/fortunecookiezen/eks-cluster-cdk.git`
* `cd eks-cluster-cdk`
* `npm install @aws-cdk/aws-ec2 @aws-cdk/aws-eks`
* `npm run build`
* `cdk deploy`

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
