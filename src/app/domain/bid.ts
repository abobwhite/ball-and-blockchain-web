import DomainBase from './domain-base.ts';

class Bid extends DomainBase {
  public userId: string;
  public policyId: string;
  public value: number;
}

export default Bid;