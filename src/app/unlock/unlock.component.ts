import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {
unlock:FormGroup=new FormGroup({
  email:new FormControl(''),
  tempPwd:new FormControl(''),
  newPwd:new FormControl(''),
  confirmPwd:new FormControl('')
})
  constructor(private unlockus:UserService,private activate:ActivatedRoute) { }
  submit(value:FormGroup){
    this.unlockus.unlockuser(this.unlock.value).subscribe((res)=>{console.log(res)})
  }
  ngOnInit(): void {
    this.unlock=new FormGroup({
      'email':new FormControl('',[Validators.required]),
      'tempPwd':new FormControl('',[Validators.required]),
      'newPwd':new FormControl('',[Validators.required]),
      'confirmPwd':new FormControl('',[Validators.required]),
    })
  }

}
