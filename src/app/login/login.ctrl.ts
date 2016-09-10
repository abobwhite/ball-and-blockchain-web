import AuthSvc from '../service/auth.svc.ts';
import IToastrService = angular.toastr.IToastrService;

class LoginCtrl {
  public username: string;
  public password: string;
  private Auth: AuthSvc;
  private toastr: IToastrService;
  private $state: ng.ui.IStateService;

  /** @ngInject */
  constructor(Auth: AuthSvc, toastr: IToastrService, $state: ng.ui.IStateService) {
    this.Auth = Auth;
    this.toastr = toastr;
    this.$state = $state;

    if (!!this.Auth.getLoggedInUser()) {
      this.$state.go('Home');
    }
  }

  public login(): void {
    if (!!this.username && !!this.password) {
      this.Auth.login(this.username);
      this.$state.go('Home'); //TODO: Go to My Policies?
    } else {
      this.toastr.error('A username and password must be provided');
    }
  }
}

export default LoginCtrl;