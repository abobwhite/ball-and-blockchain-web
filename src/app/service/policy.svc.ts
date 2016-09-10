import IPromise = angular.IPromise;
import Policy from '../domain/policy.ts';
import Web3Svc from './web3.svc.ts';
import abi from '../abi/policy.ts';
import Territory from '../domain/territory.ts';

class PolicySvc {
  private Web3: Web3Svc;
  private policyContract: any;

  /** @ngInject */
  constructor(Web3: Web3Svc) {
    this.Web3 = Web3;
    const address: string = '0xf152a771cfaa9a848af9f52dbcb442f75f629eda';

    this.policyContract = this.Web3.getContract(abi, address);
  }

  public addPolicy(disclosure: string): IPromise<any>  {
    return this.executeContract('addPolicy', [disclosure]);
  }

  public getPolicies(): IPromise<Policy> {
    return this.executeContract('getPolicies', []).then(result => {
      return result[0].map((item, index) => {
        return new Policy({
          id: result[0][index],
          riskType: this.Web3.raw.toAscii(result[1][index]),
          ratingExpiration: new Date(this.Web3.raw.toDecimal(result[2][index])),
          offerExpiration: new Date(this.Web3.raw.toDecimal(result[3][index])),
          territoryOfIssue: <Territory>(this.Web3.raw.toAscii(result[4][index])),
          policyFaceAmount: this.Web3.raw.toDecimal(result[5][index]),
          disclosures: this.Web3.raw.toAscii(result[6][index]),
          assumingUserId: 'q827343333',
          cedingUserId: '923878327'
        });
      });
    });
  }

  public bid(value: number): IPromise<any> {
    return this.executeContract('bid', [value]);
  }

  public cancelBid(): IPromise<any> {
    return this.executeContract('cancelBid', []);
  }

  public getBids(): IPromise<any> {
    return this.executeContract('getBids', []).then(result => {
      return result[0].map((item, index) => {
        return {
          bidder: result[0][index],
          value: this.Web3.raw.toDecimal(result[1][index])
        };
      });
    });
  }

  public accept(address: string): IPromise<any> {
    return this.policyContract.accept(address);
  }

  private executeContract(method: string, args: Array<any>): IPromise<any> {
    return this.Web3.executeContract(this.policyContract, method, args);
  }
}

export default PolicySvc;
