import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UnlockComponent } from './unlock/unlock.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'signin',component:SignInComponent},
  {path:'Forgot',component:ForgotpasswordComponent},
  {path:'unlockAcc',component:UnlockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
