import {Publication} from "./publication";
import {User} from "./User";

export class CommentPub {
  id:string;
  date:Date;
  description:string;
  isBlocked:boolean;
  publication:Publication;
  user:User
}
