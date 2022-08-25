import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {User} from "../../model/Forum/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();
  public id:string;
constructor(private http: HttpClient) {
}
  token:string
  user:User

  GetUser(){
    // @ts-ignore
    this.token = localStorage.getItem('jwt');
    console.log(this.token)

    const decodedToken = this.helper.decodeToken(this.token);
    console.log(decodedToken.sub)

    return this.http.get<User>('http://localhost:8089/QVT/Getuser/'+decodedToken.sub);
  }




}
