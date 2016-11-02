import IPromise = angular.IPromise;
import IToastrService = angular.toastr.IToastrService;
var Web3: any = require('web3');

class Web3Svc {
  public pendingRequests: number = 0;
  public static WEB3_REQUEST: string = 'web3RequestEvent';
  public static WEB3_RESPONSE: string = 'web3ResponseEvent';
  private $web3: any;
  private usersToAccountMap: Object = {
    'abobwhite': 0,
    'joeshehata': 1,
    'wstampley': 2,
    'mbono': 3
  };

  /** @ngInject */
  constructor(private toastr: IToastrService, private $rootScope: ng.IRootScopeService) {
    // CONFIG.eth.provider
    this.$web3 = new Web3(new Web3.providers.HttpProvider('http://192.241.254.151:8080'));
  }

  public get raw(): any {
    return this.$web3;
  }

  public get activeAccount(): string {
    return this.$web3.eth.defaultAccount;
  }

  public setAccount(username: string): boolean {
    if (username in this.usersToAccountMap) {
      this.$web3.eth.defaultAccount = this.$web3.eth.accounts[this.usersToAccountMap[username]];
    } else {
      this.toastr.error('That user is not registered!');
      return false;
    }

    return true;
  }

  public getContract(abi: Array<Object>, address: string): any {
    return this.$web3.eth.contract(abi).at(address);
  }

  public executeContract(contract: any, method: string, args: Array<any>): IPromise<any> {
    this.pendingRequests += 1;
    this.$rootScope.$broadcast(Web3Svc.WEB3_REQUEST);

    return <IPromise<any>>(new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(contract[method].apply(null, args));
        } catch (err) {
          reject(err);
        }
      }, 1);
    })).then((response) => {
      this.pendingRequests -= 1;
      this.$rootScope.$broadcast(Web3Svc.WEB3_RESPONSE);
      return response;
    }, () => {
      this.pendingRequests -= 1;
      this.$rootScope.$broadcast(Web3Svc.WEB3_RESPONSE);
    });
  }
}

export default Web3Svc;