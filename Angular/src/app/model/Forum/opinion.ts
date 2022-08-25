import {User} from "./User";

export class Opinion {
  id:string;
  typeEmotions:string;
  description:string;
  IsBlocked:boolean;
  user:User;
}
