import DomainBase from './domain-base.ts';

class Rating extends DomainBase {
  public id: string;
  public policyId: string;
  public userId: string;
  public value: number;
  public cost: number;
  public details: any;
}

export default Rating;