import IPromise = angular.IPromise;
import Policy from '../domain/policy.ts';
import Rating from '../domain/rating.ts';
import Bid from '../domain/bid.ts';
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
    const address: string = '0x458bd64355a87e60b4027df307a84a3894bb4c95';
    //const address: string = '0x098973d569c95d00b8f26924243a394cf520c285';

    this.policyContract = this.Web3.getContract(abi, address);

    // this.bid("0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6", 300);
    // this.getPolicies();
    // this.policyContract.NewBid().watch((err, result) => {
    //   if (err) {
    //     console.log("Error! + ", err);
    //     return;
    //   }
    //   console.log("new bid", result);
    //   Events.publish('NEW_BID', {});
    // });
  }

  public addPolicy(riskType: string, ratingExpiration: number, offerExpiration: number, territoryOfIssue: string,
                   policyFaceAmount: number, gender: string, dob: number, disclosures: string): IPromise<any>  {
    return this.executeContract('addPolicy', arguments);
  }

  public getPolicies(): IPromise<Policy> {
    // let policiesById: any = {};
    // let policies: any = [];

    return this.executeContract('getPolicies', []).then(result => {
      return result[0].map((item, index) => {
        return new Policy({
          id: result[0][index],
          riskType: this.Web3.raw.toAscii(result[1][index]),
          ratingExpiration: new Date(this.Web3.raw.toDecimal(result[2][index])),
          offerExpiration: new Date(this.Web3.raw.toDecimal(result[3][index])),
          territoryOfIssue: <Territory>(this.Web3.raw.toAscii(result[4][index])),
          policyFaceAmount: this.Web3.raw.toDecimal(result[5][index]),
          cedingUserId: result[6][index]
        });
      });


    //   // public ratings: Array<Rating> = [];
    //   // public bids: Array<Bid> = [];
    //
    //   policies = result[0].map((item, index) => {
    //     policiesById[result[0][index]] = new Policy({
    //       id: result[0][index],
    //       riskType: this.Web3.raw.toAscii(result[1][index]),
    //       ratingExpiration: new Date(this.Web3.raw.toDecimal(result[2][index])),
    //       offerExpiration: new Date(this.Web3.raw.toDecimal(result[3][index])),
    //       territoryOfIssue: <Territory>(this.Web3.raw.toAscii(result[4][index])),
    //       policyFaceAmount: this.Web3.raw.toDecimal(result[5][index]),
    //       disclosures: this.Web3.raw.toAscii(result[6][index]),
    //       assumingUserId: 'q827343333',
    //       cedingUserId: '923878327'
    //     });
    //
    //     return policiesById[result[0][index]];
    //   });
    //
    //   return Promise.resolve(policies);
    //
    // }).then(() => {
    //   return new Promise((resolve, reject) => {
    //     return Promise.all(promises.concat).then()
    //   });
    //
    //   var promises: any = Object.keys(policiesById).map((key) => {
    //       return this.getBids(key).then((bids) => {
    //         policiesById[key].bids = bids;
    //       }).catch(console.error);
    //   });
    //
    //   // debugger;
    //   // return Promise.all(promises).then();
    //
    // });
    // //     .then((r) => {
    // //   debugger;
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
        return new Bid({
          userId: result[0][index],
          policyId: policyId,
          value: this.Web3.raw.toDecimal(result[1][index])
        });
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
    //bytes32[] ids, address[] reviewers, uint[] values, uint[] costs, bytes32[] details, address[] purchasers
    return this.executeContract('getReviews', arguments).then(result => {
      return result[0].map((item, index) => {
        return new Rating({
          id: result[0][index],
          userId: result[1][index],
          policyId: policyId,
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
