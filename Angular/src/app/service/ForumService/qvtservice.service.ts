import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {QVT} from "../../model/Forum/qvt";
import {RatingForum} from "../../model/Forum/RatingForum";
import {Opinion} from "../../model/Forum/opinion";
import {ConseilUser} from "../../model/Forum/conseil-user";


@Injectable({
  providedIn: 'root'
})
export class QVTServiceService {

  constructor(private http: HttpClient) { }

  url = environment.url + '/QVT';

  addQVT(qvt: QVT):Observable<any>{
    return this.http.post(this.url+'/Add', qvt);
  }
  getListQVT() {
    return this.http.get<QVT[]>(this.url +'/Get');
  }
  deleteQVT(id: string) {
    return this.http.delete(this.url + '/Delete/'+id);
  }
  Update (qvt: Object){
      return this.http.put<QVT>(this.url+'/Put',qvt);
    }
    GetQvtById(id:string){
      return this.http.get<QVT>(this.url +'/GetById/'+id);
    }
    getconseilQuiz(id:string){
      return this.http.get<QVT>(this.url +'/C/'+id);
    }
    TestPasserQuiz(idQ:string,idU:string){
    return this.http.get<string>(this.url +'/test/'+idQ+'/'+idU);
  }
//*****************************************Rating
  url1=environment.url;

  addRatingToUser(idUser:string ,r:Object) {
  return this.http.put<Object>(this.url1 +'/Rating/Put/'+idUser,r);
}
  FindRatingByUser(idUser:string) {
    return this.http.get<number>(this.url1 +'/Rating/Get/'+idUser);
  }
  CalculRating(){
    return this.http.get<number>(this.url1+'/Rating/GetCalcul')
  }
//**************************************************Opinion
  url2 = environment.url + '/Opinion';

  getListOpinion() {
    return this.http.get<Opinion[]>(this.url2 +'/Get');
  }

  AddOpinionToUser(op:Opinion,idU:string):Observable<any>{
    return this.http.post(this.url2+'/AddOpinionToUser/'+idU,op);
  }
  GetConseilsUser(idU:string){
    return this.http.get<ConseilUser>('http://localhost:8089/ConseilUser/Get/'+idU);
  }
}

