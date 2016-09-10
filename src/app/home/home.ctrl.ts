import Policy from '../domain/policy.ts';
import RiskType from '../domain/risk-type.ts';
import * as moment from 'moment';

class HomeCtrl {
  public policies: Array<Policy>;
  public selectedPolicy: Policy;

  /** @ngInject */
  constructor() {
    this.policies = [
      new Policy({
        id: '12345678901234567892345678',
        assumingUserId: 'q827343333',
        cedingUserId: '923878327',
        riskType: RiskType.LUNG_CANCER,
        policyFaceAmount: 100000,
        ratingExpiration: moment().add(1, 'd').toDate(),
        offerExpiration: moment().add(2, 'd').toDate()
      }),
      new Policy({
        id: '34567890456789',
        assumingUserId: '9876543987654',
        cedingUserId: '234567890',
        riskType: RiskType.HEART_ATTACK,
        policyFaceAmount: 250000,
        ratingExpiration: moment().subtract(1, 'd').toDate(),
        offerExpiration: moment().add(2, 'd').toDate()
      })
    ];
  }

  public policyIsSelected(policy: Policy): boolean {
    return this.selectedPolicy === policy;
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