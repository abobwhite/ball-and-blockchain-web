import Policy from '../domain/policy.ts';

class HomeCtrl {
  public policies: Array<Policy> = [];
  public selectedPolicy: Policy;

  /** @ngInject */
  constructor(policies: Array<Policy>) {
    this.policies = policies;
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