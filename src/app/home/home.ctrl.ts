import PolicySvc from '../service/policy.svc.ts';
import RiskType from '../domain/risk-type.ts';
import Policy from '../domain/policy.ts';
import * as moment from 'moment';
import IToastrService = angular.toastr.IToastrService;

class HomeCtrl {
  public policies: Array<Policy> = [];
  public selectedPolicy: Policy;
  private $uibModal: any;
  private toastr: IToastrService;

  /** @ngInject */
  constructor(policies: Array<Policy>, $uibModal: any, toastr: IToastrService) {
    this.policies = policies;
    this.$uibModal = $uibModal;
    this.toastr = toastr;
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
    //return Policies.getPolicies();
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
}

export default HomeCtrl;