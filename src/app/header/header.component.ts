import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticate;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit():void{
    debugger
    this.authService.user_token.subscribe(resp=>{
       this.isAuthenticate=resp?true:false;
       console.log(this.isAuthenticate);
       this.router.navigate(['/user'])
    })
  }

  logOut(){
    this.authService.logout();
  }

}
