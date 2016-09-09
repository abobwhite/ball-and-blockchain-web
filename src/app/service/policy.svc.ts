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
    this.$web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    this.$web3.eth.defaultAccount = this.$web3.eth.accounts[0];

    const abi: Array<Object> = [{'constant': true, 'inputs': [], 'name': 'ended', 'outputs': [{'name': '', 'type': 'bool'}], 'type': 'function'}, {
      'constant': false,
      'inputs': [{'name': '_value', 'type': 'uint256'}],
      'name': 'bid',
      'outputs': [],
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [{'name': '_disclosures', 'type': 'bytes32'}],
      'name': 'createPolicy',
      'outputs': [],
      'type': 'function'
    }, {'constant': false, 'inputs': [], 'name': 'cancelBid', 'outputs': [], 'type': 'function'}, {
      'constant': false,
      'inputs': [{'name': 'targetBidder', 'type': 'address'}],
      'name': 'accept',
      'outputs': [],
      'type': 'function'
    }, {
      'constant': false,
      'inputs': [{'name': '_disclosures', 'type': 'bytes32'}],
      'name': 'getPolicy',
      'outputs': [{'name': 'disclosures', 'type': 'bytes32'}],
      'type': 'function'
    }, {
      'constant': true,
      'inputs': [],
      'name': 'getBids',
      'outputs': [{'name': 'bidder', 'type': 'address[]'}, {'name': 'value', 'type': 'uint256[]'}],
      'type': 'function'
    }, {'inputs': [], 'type': 'constructor'}, {
      'anonymous': false,
      'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
      'name': 'NewBid',
      'type': 'event'
    }, {
      'anonymous': false,
      'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
      'name': 'CanceledBid',
      'type': 'event'
    }, {
      'anonymous': false,
      'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': false, 'name': '_message', 'type': 'string'}],
      'name': 'Accepted',
      'type': 'event'
    }];
    const address: string = '0x15c38c9539ecb15dc49b7872e0a2f72c0f3ef4a3';

    this.$policyContract = this.$web3.eth.contract(abi).at(address);
  }

  public createPolicy(disclosure: string): IPromise<any>  {
    return this.promiseWrapper('createPolicy', [disclosure]);
  }

  public getPolicy(): IPromise<any> {
    return this.promiseWrapper('getPolicy', []);
  }

  public bid(value: number): IPromise<any> {
    //this.$web3.eth.defaultAccount=this.$web3.eth.accounts[1];
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
