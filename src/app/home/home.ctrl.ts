import Policy from '../domain/policy.ts';
import RiskType from '../domain/risk-type.ts';
import * as moment from 'moment';

class HomeCtrl {
  public policies: Array<Policy>;
  public selectedPolicy: Policy;

  /** @ngInject */
  constructor() {
    let policy1: Policy = new Policy();
    policy1.id = '12345678901234567892345678';
    policy1.assumingUserId = 'q827343333';
    policy1.cedingUserId = '923878327';
    policy1.riskType = RiskType.LUNG_CANCER;
    policy1.policyFaceAmount = 100000;
    policy1.ratingExpiration = moment().add(1, 'd').toDate();
    policy1.offerExpiration = moment().add(2, 'd').toDate();

    this.policies = [policy1];
  }

  public get hasSelectedPolicy(): boolean {
    return !!this.selectedPolicy;
  }

  public selectPolicy(policy: Policy): void {
    this.selectedPolicy = policy;
  }

  public unSelectPolicy(): void {
    this.selectedPolicy = null;
  }
}

export default HomeCtrl;