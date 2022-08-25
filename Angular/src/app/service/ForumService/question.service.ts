import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Question} from "../../model/Forum/question";


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }


  url = environment.url + '/Question';

  addQuestion(question: Question,id: string):Observable<any>{
    return this.http.put(this.url+'/AddQuestionToQuizz/'+id, question);
  }
  getListQuestion(id:string) {
    return this.http.get<Question[]>(this.url +'/GetQuestion/'+id);
  }
}
