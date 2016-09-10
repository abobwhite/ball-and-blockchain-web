import DomainBase from './domain-base.ts';

class User extends DomainBase {
  public id: string;
  public name: string;
  public contactName: string;
  public contactNumber: number;
  public contactEmail: string;
}

export default User;