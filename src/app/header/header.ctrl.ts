import AuthSvc from '../service/auth.svc.ts';

class HeaderCtrl {
  private Auth: AuthSvc;

  /** @ngInject */
  constructor(Auth: AuthSvc) {
    this.Auth = Auth;
  }

  public get isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }

  public get loggedInUser(): string {
    return this.Auth.getLoggedInUser();
  }

  public logout(): void {
    this.Auth.logout();
  }
}

export default HeaderCtrl;