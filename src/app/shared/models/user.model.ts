import {ICriterion, IUser} from "../interfaces/user.interface";

export class User implements IUser {
  constructor(
    public id: number,
    public role: string,
    public name: string,
    public password: string,
    public items: Array<ICriterion>
  ) {
  }
}
