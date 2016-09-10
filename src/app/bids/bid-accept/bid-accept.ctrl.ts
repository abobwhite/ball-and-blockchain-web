import PolicySvc from '../../service/policy.svc.ts';
import IToastrService = angular.toastr.IToastrService;
import Policy from '../../domain/policy.ts';
import Bid from "../../domain/bid.ts";

class BidAcceptCtrl {
  private policy: Policy;
  private toastr: IToastrService;
  private $uibModalInstance: any;
  private Policies: PolicySvc;

  /** @ngInject */
  constructor(Policies: PolicySvc, policy: Policy, toastr: IToastrService, $uibModalInstance: any) {
    this.policy = policy;
    this.toastr = toastr;
    this.$uibModalInstance = $uibModalInstance;
    this.Policies = Policies;
  }

  public acceptBid(bid: Bid): void {
    this.Policies.accept(this.policy.id, bid.userId).then(() => {
      this.toastr.success('Bid was accepted');
      this.$uibModalInstance.dismiss();
    }, () => {
      this.toastr.error('There was an error accepting the bid');
    });
  }

  public cancel(): void {
    this.$uibModalInstance.close();
  }
}

export default BidAcceptCtrl;