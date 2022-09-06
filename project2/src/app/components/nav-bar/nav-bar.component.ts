import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { LoginService } from 'src/app/services/login.service';
import { NavService } from 'src/app/services/nav.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  

  

  public loggedIn=false;

  constructor(public loginService:LoginService, private authorService:AuthorService) { }

 


  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  }

  logoutUser()
  {
    this.loginService.logout()
    location.reload()
  }
author()
{

  console.log(localStorage.getItem('token'))
  this.authorService.author().subscribe(
    (res:any)=>{
      console.log("========================================")
    }
  
    
  )
  
}
  

}
