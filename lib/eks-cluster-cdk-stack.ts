import cdk = require('@aws-cdk/cdk');
import ec2 = require('@aws-cdk/aws-ec2');
import eks = require('@aws-cdk/aws-eks');
export class EksClusterCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const vpc = ec2.Vpc.fromLookup(this, 'vpc', {
      vpcName: 'Vpc3Stack/vpc'
    });
    const cluster = new eks.Cluster(this, 'ekscluster', {
      vpc: vpc,
      //version: '1.13'
      // vpcSubnets: [
      //   {
      //     subnetType: ec2.SubnetType.Private
      //   }
      // ]
    });
    cluster.addCapacity('Nodes', {
      instanceType: new ec2.InstanceType('t2.small'),
      desiredCapacity: 3,
      maxCapacity: 7
    });
  }
}
