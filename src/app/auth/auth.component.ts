import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  LoginForm:FormGroup;
  minLength=8;
  errorMsg='';
  isLoginMode=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.LoginForm=new FormGroup({
      userEmail:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      Password:new FormControl('',[Validators.required,Validators.minLength(this.minLength)])
    })
  }

  onSubmit(){
    console.log(this.LoginForm);
    this.isLoginMode=true;
    this.authService.login(this.LoginForm.value.userEmail,this.LoginForm.value.Password).subscribe(resp=>{
        console.log('Login Responce',resp);
        localStorage.setItem('User_token',JSON.stringify(resp));
        this.authService.user_token.next(resp);
        this.LoginForm.reset();
      },error=>{
        this.errorMsg=error;
        this.LoginForm.reset();
      });
  }

}
