import Web3Svc from './web3.svc.ts';

class AuthSvc {
  private Web3: Web3Svc;

  /** @ngInject */
  constructor(Web3: Web3Svc) {
    this.Web3 = Web3;
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
    return localStorage.removeItem('loggedInUser');
  }
}

export default AuthSvc;