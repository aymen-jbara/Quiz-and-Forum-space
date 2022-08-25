import {RatingForum} from "./RatingForum";

export class User{
  id:string;
  name:string;
	username:string ;
	password: string ;
    roles:string[];
    ratingForum:RatingForum;
}
