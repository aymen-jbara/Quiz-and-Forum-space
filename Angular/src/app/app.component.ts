import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/ForumService/auth.service";
import {Router} from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import {QVT} from "./model/Forum/qvt";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./model/Forum/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pidev';



  constructor(private http:HttpClient,private authService:AuthService, private router:Router) {
  }

  ngOnInit(): void {

     }
  /*GetUser(loggedUse:string){
    let jwt = localStorage.getItem('jwt');
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<User>('http://localhost:8089/QVT/Getuser/'+loggedUse,{headers:httpHeaders});
  }*/

}
