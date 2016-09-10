import IPromise = angular.IPromise;
var Web3: any = require('web3');

class PolicySvc {
  private $rootScope: ng.IRootScopeService;
  private $web3: any;
  private $policyContract: any;

  /** @ngInject */
  constructor($rootScope: ng.IRootScopeService) {
    this.$rootScope = $rootScope;
    // CONFIG.eth.provider
    this.$web3 = new Web3(new Web3.providers.HttpProvider('http://192.241.254.151:8080'));

    this.$web3.eth.defaultAccount = this.$web3.eth.accounts[0];

    const abi: Array<Object> = [{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"targetBidder","type":"address"}],"name":"accept","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getPolicies","outputs":[{"name":"id","type":"bytes32[]"},{"name":"riskType","type":"bytes32[]"},{"name":"ratingExpiration","type":"uint256[]"},{"name":"offerExpiration","type":"uint256[]"},{"name":"territoryOfIssue","type":"bytes32[]"},{"name":"policyFaceAmount","type":"uint256[]"},{"name":"disclosures","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_cost","type":"uint256"},{"name":"_details","type":"bytes32"}],"name":"reviewPolicy","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_riskType","type":"bytes32"},{"name":"_ratingExpiration","type":"uint256"},{"name":"_offerExpiration","type":"uint256"},{"name":"_territoryOfIssue","type":"bytes32"},{"name":"_policyFaceAmount","type":"uint256"},{"name":"_gender","type":"bytes32"},{"name":"_dob","type":"uint256"},{"name":"_disclosures","type":"bytes32"}],"name":"addPolicy","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"bytes32"}],"name":"getBids","outputs":[{"name":"bidders","type":"address[]"},{"name":"values","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"bid","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"CanceledBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_message","type":"string"}],"name":"Accepted","type":"event"}];
    const address: string = '0xf152a771cfaa9a848af9f52dbcb442f75f629eda';

    this.$policyContract = this.$web3.eth.contract(abi).at(address);
  }

  public addPolicy(disclosure: string): IPromise<any>  {
    return this.promiseWrapper('addPolicy', [disclosure]);
  }

  public getPolicies(): IPromise<any> {
    return this.promiseWrapper('getPolicies', []);
  }

  public bid(value: number): IPromise<any> {
    return this.promiseWrapper('bid', [value]);
  }

  public cancelBid(): IPromise<any> {
    return this.promiseWrapper('cancelBid', []);
  }

  public getBids(): IPromise<any> {
    return this.promiseWrapper('getBids', []).then(result => {
      return result[0].map((item, index) => {
        return {
          bidder: result[0][index],
          value: this.$web3.toDecimal(result[1][index])
        };
      });
    });
  }

  public accept(address: string): IPromise<any> {
    return this.$policyContract.accept(address);
  }

  private promiseWrapper(method: string, args: Array<any>): IPromise<any> {
    return <IPromise<any>>(new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(this.$policyContract[method].apply(null, args));
        } catch (err) {
          reject(err);
        }
      }, 1);
    }));
  }
}

export default PolicySvc;
