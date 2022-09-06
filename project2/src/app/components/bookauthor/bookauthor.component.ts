import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-bookauthor',
  templateUrl: './bookauthor.component.html',
  styleUrls: ['./bookauthor.component.css']
})
export class BookauthorComponent implements OnInit {

  book={
    id:'',
    title:'',
    author:'',
    publisher:'',
    publishDate:'',
    block:'',
    category:'',
    content:'',
    price:''
  }

  

  constructor(private authorService:AuthorService,private loginService:LoginService) { }

  ngOnInit(): void {
    
  }
  
  onSubmit(){

    const userinfo = localStorage.getItem('loggedUser')
    
    this.book.author = JSON.stringify(userinfo).replace('"','')
    this.book.author = this.book.author.replace('"','')
    
    
      this.authorService.generateBook(this.book).subscribe(
        book=>{
          console.log(book)
          console.log(localStorage.getItem('loggedUser'))
          //this.authorService.loginUser(response.token)
          window.location.href="/dashboard"
        }
        
        // error=>{
        //   console.log(error);
        // }
      )
    
     
    }

    keyPressNumbers(event : any) {
      var charCode = (event.which) ? event.which : event.keyCode;
      // Only Numbers 0-9
      if ((charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
   
  
}
