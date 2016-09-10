import IPromise = angular.IPromise;
import IToastrService = angular.toastr.IToastrService;
var Web3: any = require('web3');

class Web3Svc {
  private toastr: IToastrService;
  private $web3: any;
  private usersToAccountMap: Object = {
    'abobwhite': 0,
    'joeshehata': 1,
    'wstampley': 2,
    'mbono': 3
  };

  /** @ngInject */
  constructor(toastr: IToastrService) {
    this.toastr = toastr;
    // CONFIG.eth.provider
    this.$web3 = new Web3(new Web3.providers.HttpProvider('http://192.241.254.151:8080'));
    this.$web3.eth.defaultAccount = this.$web3.eth.accounts[0];
  }

  public get raw(): any {
    return this.$web3;
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
    return <IPromise<any>>(new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(contract[method].apply(null, args));
        } catch (err) {
          reject(err);
        }
      }, 1);
    }));
  }
}

export default Web3Svc;