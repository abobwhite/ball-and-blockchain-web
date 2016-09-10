import Web3Svc from './web3.svc.ts';

class AuthSvc {
  private Web3: Web3Svc;
  private $state: ng.ui.IStateService;

  /** @ngInject */
  constructor(Web3: Web3Svc, $state: ng.ui.IStateService) {
    this.Web3 = Web3;
    this.$state = $state;
  }

  public login(username: string): void {
    if (this.Web3.setAccount(username)) {
      localStorage.setItem('loggedInUser', username);
    }
  }

  public getLoggedInUser(): string {
    return localStorage.getItem('loggedInUser');
  }

  public logout(): void {
    localStorage.removeItem('loggedInUser');
    this.$state.go('Login');
  }
}

export default AuthSvc;