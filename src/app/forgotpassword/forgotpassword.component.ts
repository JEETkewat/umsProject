import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotform:FormGroup=new FormGroup({
    email:new FormControl('')
  })
  constructor(private forgot:UserService) { }
  Submit(value:FormGroup){
    this.forgot.forgotuser(this.forgotform.value).subscribe((res)=>{console.log(res)});
   
  }
 
  ngOnInit(): void {
    this.forgotform=new FormGroup({
      'email':new FormControl('',[Validators.required])
    })
  }

}
