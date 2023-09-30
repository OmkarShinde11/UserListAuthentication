import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticate;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user_token.subscribe(resp=>{
       this.isAuthenticate=resp?true:false
    })
  }

  logOut(){
    this.authService.logout();
  }

}
