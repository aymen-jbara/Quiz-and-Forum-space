import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LikeService {



  constructor(private http: HttpClient) { }


  url = environment.url + '/Like';




  getListAnswer(id:string) {
    return this.http.get<number>(this.url +'/countAllLikeByPub/'+id);
  }
}
