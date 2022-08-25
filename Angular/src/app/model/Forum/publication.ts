import {User} from "./User";


export class Publication {
  id :string;
  statut : string;
  isBlocked : boolean;
  user:User;
  nbrComment:number;
  nbrLike:number;
}
