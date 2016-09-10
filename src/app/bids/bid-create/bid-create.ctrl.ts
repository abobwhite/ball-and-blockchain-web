import PolicySvc from '../../service/policy.svc.ts';
import IToastrService = angular.toastr.IToastrService;
import Policy from '../../domain/policy.ts';
import Bid from '../../domain/bid.ts';
import Web3Svc from '../../service/web3.svc.ts';

class BidCreateCtrl {
  public bid: Bid;
  private policy: Policy;
  private toastr: IToastrService;
  private $uibModalInstance: any;
  private Policies: PolicySvc;

  /** @ngInject */
  constructor(Policies: PolicySvc, Web3: Web3Svc, policy: Policy, toastr: IToastrService, $uibModalInstance: any) {
    this.policy = policy;
    this.toastr = toastr;
    this.$uibModalInstance = $uibModalInstance;
    this.Policies = Policies;
    this.bid = new Bid({
      userId: Web3.activeAccount,
      policyId: policy.id
    });
  }

  public saveBid(form: any): void {
    if (form.$valid) {
      // this.Policies.bid(this.bid.policyId, this.bid.value).then(() => {
      //   this.toastr.success('Bid was placed');
      //   this.$uibModalInstance.dismiss();
      // }, () => {
      //   this.toastr.error('There was an error placing your bid');
      // });
    } else {
      this.toastr.error('All fields are required, please try again');
    }
  }

  public cancel(): void {
    this.$uibModalInstance.close();
  }
}

export default BidCreateCtrl;