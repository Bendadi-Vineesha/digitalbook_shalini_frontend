import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag : boolean = false

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService, private navService:NavService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form is submitted");
    if(this.credentials.username!='' && this.credentials.password!='' && this.credentials.username!=null && this.credentials.password!=null){
      console.log("we have to submit the form");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
         
          console.log(response.token)
          this.loginService.loginUser(response.token)
          

          
          this.loginService.handleResponse(this.credentials)
          
          window.location.href="/dashboard"
        },
        
        error=>{
          //console.log(error);
          this.flag = true
        }
      )
    
     
    }
    else{
      console.log("fields are empty");
    }
  }

}
