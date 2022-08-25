import { Component, OnInit } from '@angular/core';
import {User} from "../../model/Forum/User";
import {AuthService} from "../../service/ForumService/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.GetUser().subscribe(
      (data) => {
        this.user = data ,
          console.log(this.user)
      });

  }
}
