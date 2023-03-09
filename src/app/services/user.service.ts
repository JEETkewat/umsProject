import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginuser(body:any){
    return this.http.post(`http://localhost:9090/login`,body,{responseType:'text'})
  }
  signinuser(body:any){
    return this.http.post(`http://localhost:9090/saveUser`,body,{responseType:'text'})
  }
  forgotuser(email:any){
    return this.http.get(`http://localhost:9090/forgotPwd/${email}`)
  }
  unlockuser(body:any){
    return this.http.post(`http://localhost:9090/unlock`,body,{responseType:'text'})
  }
  getcity(cityId:any){
    return this.http.get(`http://localhost:9090/cities/${cityId}`)
  }
  getcountry(){
    return this.http.get(`http://localhost:9090/countries`)
  }
  getstate(stateId:any){
    return this.http.get(`http://localhost:9090/states/${stateId}`)
  }
  getuniqueemail(email:any){
    return this.http.get(`http://localhost:9090/emailcheck/${email}`,{responseType:'text'})
  }
}
