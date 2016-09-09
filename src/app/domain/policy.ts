import RiskType from './risk-type.ts';
import Territory from './territory.ts';
import Disclosure from './disclosure.ts';
import Gender from './gender.ts';

class Policy {
  public id: string;
  public cedingUserId: string;
  public assumingUserId: string;
  public riskType: RiskType;
  public ratingExpiration: number;
  public offerExpiration: number;
  public territoryOfIssue: Territory;
  public policyFaceAmount: number;
  public gender: Gender;
  public dob: Date;
  public disclosures: Array<Disclosure>;

  constructor() {

  }
}

export default Policy;