import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signin:FormGroup=new FormGroup({
     email:new FormControl(''),
     pwd:new FormControl('')
  })
  dataformat:any;
  constructor(private login:UserService, private router:Router) {}
  success:any;
  check(){
    if(this.dataformat=="Invalid Credentials"){
      alert("Invalid Input");
    } 
    // else if(this.accinfo=="account is locked"){
    //    alert("your Account is Locked");}
       else {
      this.SignIn();
      ;
    }
  }
  SignIn(){
    this.login.loginuser(this.signin.value).subscribe((res)=>{
      this.dataformat=res;
      console.log(res);
      this.success=res;
      if(this.success=="SUCCESS"){
        this.router.navigate(['/home']).then(()=> window.location.reload()); 
      }
      })
  }
  ngOnInit(): void {
    this.signin=new FormGroup({
      'email':new  FormControl('',[Validators.required]),
      'pwd':new FormControl('',[Validators.required,Validators.minLength(5)]),

    })
  }

}
