import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Answer} from "../../model/Forum/answer";
import {QVT} from "../../model/Forum/qvt";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {
  constructor(private http: HttpClient) { }


  url = environment.url + '/Answer';


  getListAnswer() {
    return this.http.get<Answer[]>(this.url +'/Get');
  }
  getListIdAnswer(id:string) {
    return this.http.get<number[]>(this.url +'/GetIdAnswer/'+id);
  }
  AddResponseUser(idu:string,idA:string):Observable<any>{
      return this.http.post(this.url+'/AddAnswerToUser/'+idu+'/'+idA,[idu,idA]);
  }

  getPDF(idU:string,idQ:string) {
    return this.http.get<boolean>(this.url +'/getPDF/'+idU+'/'+idQ);
  }


  Desaffectaion(idu:string,idQ:string){
    return this.http.delete(this.url+'/SuppAnswerToUser/'+idu+'/'+idQ);
  }
}
