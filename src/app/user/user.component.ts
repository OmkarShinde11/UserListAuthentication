import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList=[]
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getData(1).subscribe(resp=>{
      console.log(resp);
      this.userList.push(resp);
      console.log(this.userList);
    });
  }

  paginate(event){
    console.log(event);
    this.userService.getData(event.page+1).subscribe(resp=>{
      console.log(resp);
      this.userList=[];
      this.userList.push(resp)
    });
    
  }
}
