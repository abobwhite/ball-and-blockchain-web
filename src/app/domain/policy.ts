import RiskType from './risk-type.ts';
import Territory from './territory.ts';
import Gender from './gender.ts';
import Rating from './rating.ts';
import Bid from './bid.ts';
import * as moment from 'moment';
import DomainBase from './domain-base.ts';

class Policy extends DomainBase {
  public id: string;
  public cedingUserId: string;
  public assumingUserId: string;
  public riskType: RiskType;
  public ratingExpiration: Date;
  public offerExpiration: Date;
  public territoryOfIssue: Territory;
  public policyFaceAmount: number;
  public gender: Gender;
  public dob: Date;
  public disclosures: string;
  public ratings: Array<Rating> = [];
  public bids: Array<Bid> = [];

  public get isRequestingRatings(): boolean {
    return moment().isBefore(moment(this.ratingExpiration));
  }

  public get isRequestingBids(): boolean {
    return moment().isAfter(moment(this.ratingExpiration)) && moment().isBefore(moment(this.offerExpiration));
  }
}

export default Policy;