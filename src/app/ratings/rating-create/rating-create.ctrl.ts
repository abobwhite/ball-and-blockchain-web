import PolicySvc from '../../service/policy.svc.ts';
import Policy from '../../domain/policy.ts';
import IToastrService = angular.toastr.IToastrService;
import Rating from '../../domain/rating.ts';
import Web3Svc from '../../service/web3.svc.ts';

class RatingCreateCtrl {
  public rating: Rating;
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
    this.rating = new Rating({
      userId: Web3.activeAccount,
      policyId: policy.id
    });
  }

  public saveRating(form: any): void {
    if (form.$valid) {
      // this.Policies.addRating(this.rating).then(() => {
      //   this.toastr.success('Rating was added');
      //   this.$uibModalInstance.dismiss();
      // }, () => {
      //   this.toastr.error('There was an error adding your rating');
      // });
    } else {
      this.toastr.error('All fields are required, please try again');
    }
  }

  public cancel(): void {
    this.$uibModalInstance.close();
  }
}

export default RatingCreateCtrl;