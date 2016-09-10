import PolicySvc from '../../service/policy.svc.ts';
import Policy from '../../domain/policy.ts';
import IToastrService = angular.toastr.IToastrService;
import Web3Svc from '../../service/web3.svc.ts';
import RiskType from "../../domain/risk-type.ts";
import Territory from "../../domain/territory.ts";
import Gender from "../../domain/gender.ts";
import EnumHelperSvc from "../../service/enum-helper.svc.ts";
import MaritalStatus from "../../domain/marital-status.ts";

class PolicyCreateCtrl {
  public policy: Policy;
  public datepickerOptions: Object;
  public riskTypeOptions: Array<Object>;
  public genderOptions: Array<Object>;
  public ratingExpirationOpen: boolean;
  public maritalStatusOptions: Array<Object>;
  public territoryOptions: Array<Object>;
  public bidExpirationOpen: boolean;
  private toastr: IToastrService;
  private Policies: PolicySvc;
  private $state: ng.ui.IStateService;
  private EnumHelper: EnumHelperSvc;

  /** @ngInject */
  constructor(Policies: PolicySvc, Web3: Web3Svc, toastr: IToastrService, $state: ng.ui.IStateService, EnumHelper: EnumHelperSvc) {
    this.policy = new Policy({
      dob: new Date() //TODO: Temp
    });
    this.toastr = toastr;
    this.Policies = Policies;
    this.$state = $state;
    this.EnumHelper = EnumHelper;
    this.riskTypeOptions = this.EnumHelper.getNamesAndValues(RiskType, true);
    this.maritalStatusOptions = this.EnumHelper.getNamesAndValues(MaritalStatus);
    this.genderOptions = this.EnumHelper.getNamesAndValues(Gender, true);
    this.territoryOptions = this.EnumHelper.getNamesAndValues(Territory, true);
    this.ratingExpirationOpen = false;
    this.bidExpirationOpen = false;
    this.datepickerOptions = {
      minDate: new Date()
    };
  }

  public savePolicy(form: any): void {
    if (form.$valid) {
      this.Policies.addPolicy(RiskType[this.policy.riskType], this.policy.ratingExpiration.getTime(), this.policy.offerExpiration.getTime(),
          Territory[this.policy.territoryOfIssue], this.policy.policyFaceAmount, Gender[this.policy.gender], this.policy.dob.getTime(),
          this.policy.disclosures).then(() => {
        this.toastr.success('Policy was created');
        this.$state.go('Home');
      }, () => {
        this.toastr.error('There was an error adding your policy');
      });
    } else {
      this.toastr.error('All fields are required, please try again');
    }
  }
}

export default PolicyCreateCtrl;