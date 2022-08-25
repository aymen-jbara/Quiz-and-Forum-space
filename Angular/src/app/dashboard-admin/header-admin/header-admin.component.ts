import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/ForumService/auth.service";
import {User} from "../../model/Forum/User";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {
user:User;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.GetUser().subscribe(
      (data) => {this.user = data ,
        console.log(this.user)});

  }

}
