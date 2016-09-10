import IPromise = angular.IPromise;
import Policy from '../domain/policy.ts';
import Rating from '../domain/rating.ts';
import Web3Svc from './web3.svc.ts';
import abi from '../abi/policy.ts';
import Territory from '../domain/territory.ts';
import EventsSvc from "./events.svc.ts";

class PolicySvc {
  private Web3: Web3Svc;
  private policyContract: any;

  /** @ngInject */
  constructor(Web3: Web3Svc, Events: EventsSvc) {
    this.Web3 = Web3;
    const address: string = '0xffef5840edf53beafc3f7aee8fb3fd77ecb569f0';
    //const address: string = '0x098973d569c95d00b8f26924243a394cf520c285';

    this.policyContract = this.Web3.getContract(abi, address);
  }

  public addPolicy(riskType: string, ratingExpiration: number, offerExpiration: number, territoryOfIssue: string,
                   policyFaceAmount: number, gender: string, dob: number, disclosures: string): IPromise<any>  {
    return this.executeContract('addPolicy', arguments);
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

  public bid(policyId: string, value: number): IPromise<any> {
    return this.executeContract('bid', [policyId, value]);
  }

  // public cancelBid(): IPromise<any> {
  //   return this.executeContract('cancelBid', []);
  // }

  public getBids(policyId: string): IPromise<any> {
    return this.executeContract('getBids', [policyId]).then(result => {
      return result[0].map((item, index) => {
        return {
          bidder: result[0][index],
          value: this.Web3.raw.toDecimal(result[1][index])
        };
      });
    });
  }

  public accept(policyId: string, address: string): IPromise<any> {
    return this.policyContract.accept(policyId, address);
  }

  // todo: implement
  public addRating(policyId: string, value: number, cost: number, details: string): IPromise<any>{
    return this.executeContract('addReview', arguments);
  }

  public getRatings(policyId: string): IPromise<any> {
    return this.executeContract('getReviews', arguments).then(result => {
      return result[0].map((item, index) => {
        return new Rating({
          id: result[0][index],
          policyId: result[1][index],
          //userId: result[2][index], // todo: there is no user id coming back
          value: this.Web3.raw.toDecimal(result[2][index]),
          cost: this.Web3.raw.toDecimal(result[3][index]),
          details: this.Web3.raw.toAscii(result[4][index])
        });
      });
    });
  }

  public buyRating(reviewId: string): IPromise<any> {
    return this.executeContract('buyReview', arguments);
  }

  private executeContract(method: string, args: any): IPromise<any> {
    return this.Web3.executeContract(this.policyContract, method, args);
  }
}

export default PolicySvc;
