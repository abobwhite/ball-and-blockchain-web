import Policy from "../../domain/policy.ts";
import IToastrService = angular.toastr.IToastrService;
import PolicySvc from "../../service/policy.svc.ts";
import Web3Svc from "../../service/web3.svc.ts";

class MyPoliciesCtrl {
  public Policies: PolicySvc;
  public policies: Array<Policy> = [];
  private $uibModal: any;
  private toastr: IToastrService;
  private Web3: Web3Svc;

  /** @ngInject */
  constructor(policies: Array<Policy>, $uibModal: any, toastr: IToastrService, Policies: PolicySvc, Web3: Web3Svc) {
    this.policies = policies;
    this.$uibModal = $uibModal;
    this.Policies = Policies;
    this.toastr = toastr;
    this.Web3 = Web3;
  }

  public viewBids(policy: Policy): void {
    let modalInstance: any = this.$uibModal.open({
      template: require('../../bids/bid-accept/bid-accept.html'),
      controller: 'BidAcceptCtrl as ctrl',
      size: 'sm',
      resolve: {
        policy: () => { return policy; }
      }
    });

    modalInstance.result.then(this.loadPolicies.bind(this));
  }

  private loadPolicies(): void {
    this.Policies.getPolicies().then((policies: any) => {
      this.policies = Array<Policy>(policies.filter((policy: Policy) => { return policy.cedingUserId === this.Web3.activeAccount; }));
    }, () => {
      this.toastr.error('Could not load policies');
    });
  }
}

export default MyPoliciesCtrl;