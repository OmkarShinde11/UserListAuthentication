import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  DataApiUrl='https://reqres.in/api/users'
  constructor(private router:Router,private http:HttpClient) { }
   
  getData(currentPage){
    return this.http.get(this.DataApiUrl,{
      params:new HttpParams().set('page',currentPage),
    })
  }
}
