export interface IUser {
  id: number;
  name: string;
  role: string;
  password: string;
  items: Array<ICriterion>;
}

export interface ICriterion {
  year: string;
  university: string;
  specialty: string;

}
