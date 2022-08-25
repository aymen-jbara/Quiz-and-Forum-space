import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Answer} from "../../model/Forum/answer";
import {CommentPub} from "../../model/Forum/comment-pub";

@Injectable({
  providedIn: 'root'
})
export class CommentPubService {

  constructor(private http: HttpClient) { }


  url = environment.url + '/commentPub';

  getListComment() {
    return this.http.get<CommentPub[]>(this.url +'/Get');
  }


  TestComment(Comment:CommentPub) {
  return this.http.get<boolean>(this.url +'/testCommentPub');
}

  AddCommentPub(Comment:CommentPub,idUser:string,idPub:string){
    return this.http.post(this.url +'/addCommentToPubAndUser/'+idUser+'/'+idPub,Comment);
  }

  DeleteCommentPub(idComment:string){
    return this.http.delete(this.url +'/Delete/'+idComment);
  }
  CountComment(idPub:string) {
    return this.http.get<number>(this.url +'/countCommentPub/'+idPub);
  }

}
