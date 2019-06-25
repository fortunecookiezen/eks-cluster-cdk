#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { EksClusterCdkStack } from '../lib/eks-cluster-cdk-stack';

const app = new cdk.App();
new EksClusterCdkStack(app, 'EksClusterCdkStack');
