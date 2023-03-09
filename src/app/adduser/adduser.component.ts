import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  adduserform:FormGroup=new FormGroup({
    fname:new  FormControl('',[Validators.required]),
    lname:new  FormControl('',[Validators.required]),
    email:new  FormControl('',[Validators.required]),
    phno:new  FormControl('',[Validators.required]),
    dob:new  FormControl('',[Validators.required]),
    gender:new  FormControl('',[Validators.required]),
    countryId:new  FormControl('',[Validators.required]),
    stateId:new  FormControl('',[Validators.required]),
    cityId:new FormControl('')
  })
  constructor(private saveuser:UserService) {}
  alldata:any;
  Submit(value:FormGroup){
    this.saveuser.signinuser(this.adduserform.value).subscribe((res)=>{this.alldata=res;console.log(res)})
  }
  emailblur(email:any){
    if(email=="DUPLICATE"){
      alert("email is alredy exist")
    }else{
      this.uniqueEmail();
    }
  }
  uniqueEmail(){
    this.saveuser.getuniqueemail(this.adduserform.value.email).subscribe((res)=>{
      console.log(res)
    })
  }
  
  Reset(value:FormGroup){
     value.reset()
  }
  allcountries:any;
  getcountrydata(){
   this.saveuser.getcountry().subscribe(
    (res:any)=>{
      this.allcountries=res;
    }
   )
  }
  allstates:any;
  getstatedata(countryID:any){
    this.saveuser.getstate(countryID).subscribe(
      (res)=>{
        this.allstates=res
      }
    )
  }
  allcities:any;
  getcitydata(stateID:any){
    this.saveuser.getcity(stateID).subscribe(
      (res)=>{
        this.allcities=res;
      }
    )
  }
  ngOnInit(): void {
   this.getcountrydata();
    this.adduserform=new FormGroup({
      'fname':new  FormControl('',[Validators.required]),
      'lname':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'email':new  FormControl('',[Validators.required]),
      'phno':new  FormControl('',[Validators.required]),
      'dob':new  FormControl('',[Validators.required]),
      'gender':new  FormControl('',[Validators.required]),
      'countryId':new  FormControl('',[Validators.required]),
      'stateId':new  FormControl('',[Validators.required]),
      'cityId':new FormControl('',[Validators.required])
    })
  }

}
