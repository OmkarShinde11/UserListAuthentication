import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError} from 'rxjs'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LoginApiUrl='https://reqres.in/api/login';
  user_token=new BehaviorSubject(null);
  token='';
  // private RegisterUrl='https://reqres.in/api/register';
  constructor(private http:HttpClient,private router:Router) { }

  login(userEmail,Password){
    return this.http.post(this.LoginApiUrl,
      {
        email:userEmail,
        password:Password,
      }
      ).pipe(catchError(this.handleError),tap(resp=>{
        this.token=resp['token'];
        console.log(this.token);
      }))
  }

  // register(userEmail,Password){
  //   return this.http.post(this.RegisterUrl,
  //     {
  //       email:userEmail,
  //       password:Password
  //     }
  //     ).pipe(catchError(this.handleError));
  // }
  
  private handleError(errorResp:HttpErrorResponse){
    let errorMsg='';
    errorMsg=errorResp.error.error;
    return throwError(errorMsg)
  }

  logout(){
    this.user_token.next(null);
    localStorage.removeItem('User_token');
    this.router.navigate(['/auth']);
  }

  AutoLogin(){
    let loaduser=JSON.parse(localStorage.getItem('User_token'));
    this.user_token.next(loaduser);
    // this.token=loaduser.token
  }
  isAuthenticate(){
    if(this.token!="" && this.token!=null){
      return true
    }
    else{
      return false
    }
  }

  isAuthAuthenticate(){
    if(this.token=="" || this.token==null){
      return false
    }
    else{
      return true
    }
  }
}
