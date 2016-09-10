import Policy from '../domain/policy.ts';
import IToastrService = angular.toastr.IToastrService;
import PolicySvc from "../service/policy.svc.ts";

class HomeCtrl {
  public Policies: PolicySvc;
  public policies: Array<Policy> = [];
  public selectedPolicy: Policy;
  private $uibModal: any;
  private toastr: IToastrService;

  /** @ngInject */
  constructor(policies: Array<Policy>, $uibModal: any, toastr: IToastrService, Policies: PolicySvc) {
    this.policies = policies;
    this.$uibModal = $uibModal;
    this.toastr = toastr;
    this.Policies = Policies;
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

  public addRating(policy: Policy): void {
    let modalInstance: any = this.$uibModal.open({
      template: require('../ratings/rating-create/rating-create.html'),
      controller: 'RatingCreateCtrl as ctrl',
      size: 'sm',
      resolve: {
        policy: () => { return policy; }
      }
    });

    modalInstance.result.then(this.loadPolicies.bind(this));
  }

  public addBid(policy: Policy): void {
    let modalInstance: any = this.$uibModal.open({
      template: require('../bids/bid-create/bid-create.html'),
      controller: 'BidCreateCtrl as ctrl',
      size: 'sm',
      resolve: {
        policy: () => { return policy; }
      }
    });

    modalInstance.result.then(this.loadPolicies.bind(this));
  }

  private loadPolicies(): void {
    this.Policies.getPolicies().then((policies: any) => {
      this.policies = policies;
    }, () => {
      this.toastr.error('Could not load policies');
    });
  }
}

export default HomeCtrl;