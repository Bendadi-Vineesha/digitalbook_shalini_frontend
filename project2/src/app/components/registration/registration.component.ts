import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  alert:boolean = false

 author={
   username :'',
   password :''
 }

  constructor(private authorService : AuthorService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    
    
    
      this.authorService.registration(this.author).subscribe(
        author=>{

          if(author==null)
          {
            this.alert=true
          }
          else{
            window.location.href="/login"
          }
          console.log(author)
          //console.log(localStorage.getItem('loggedUser'))
          //this.authorService.loginUser(response.token)
          //window.location.href="/"
        }
        
        // error=>{
        //   console.log(error);
        // }
      )
    
     
    }

}
