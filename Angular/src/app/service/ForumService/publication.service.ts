import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Publication} from "../../model/Forum/publication";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  url = environment.url + '/Publication';

  getListPublication() {
    return this.http.get<Publication[]>(this.url +'/Get');
  }

  addPublication(publication: Publication,id: string):Observable<any>{
    return this.http.post(this.url+'/AddPubToUser/'+id, publication);
  }

  getListPubByUser(id:string) {
    return this.http.get<Publication[]>(this.url +'/GetAllPubByUser/'+id);
  }

  DeletePublication(id:string){
      return this.http.delete(this.url +'/Delete/'+id);
    }

}
