import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public username1 =  ''

  url="http://localhost:9094/author/api/v1/generateToken" 
  
  

  constructor(private http:HttpClient, private router:Router) { }

  generateToken(credentials:any) {
    
    this.username1=credentials.username
    console.log(this.username1)
    console.log(credentials)
    
    
    return this.http.post<string>(`${this.url}`,credentials)
  }

  handleResponse(data:any){
    
    localStorage.setItem('loggedUser', data.username);
    //this.router.navigateByUrl('/dashboard');
  }

  
  

  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;
  
  }

  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token')
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }
}
