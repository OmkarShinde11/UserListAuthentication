import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivateGuard } from '../user-activate.guard';
import { UserComponent } from './user.component';

const routes: Routes = [
   {
    path:'',
    component:UserComponent,
    canActivate:[UserActivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
