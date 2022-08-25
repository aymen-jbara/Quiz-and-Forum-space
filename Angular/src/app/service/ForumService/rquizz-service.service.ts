import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {RQuizz} from "../../model/Forum/RQuizz";


@Injectable({
  providedIn: 'root'
})
export class RQuizzServiceService {

  constructor(private http: HttpClient) { }


  url = environment.url + '/RQuizz';


  getListRQuizz() {
    return this.http.get<RQuizz[]>(this.url +'/Get');
  }

  getRQuizz(id:string) {
    return this.http.get<RQuizz>(this.url +'/GetRQuizz/'+id);
  }
}
