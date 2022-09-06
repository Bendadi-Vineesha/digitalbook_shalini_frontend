import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  id1 :any

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

  constructor(private authorService : AuthorService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id1 = this.route.snapshot.params['id']
    
    this.authorService.getBookById(this.id1).subscribe({
      next: (res:any)=>{
          console.log(res);
          this.book = res;
          //this.listData = new MatTableDataSource(this.books) 
      },
      error: (err:any)=>{
          console.log(err)
      }}
      
      )
  }

  onSubmit(){

    // const userinfo = localStorage.getItem('loggedUser')
    
    // this.book.author = JSON.stringify(userinfo).replace('"','')
    // this.book.author = this.book.author.replace('"','')
    
    
      this.authorService.updateBook(this.book.id,this.book.author,this.book).subscribe(
        book=>{
          console.log(this.book)
          //console.log(localStorage.getItem('loggedUser'))
          //this.authorService.loginUser(response.token)
          //window.location.href="/dashboard"
          this.updateBook()
        },
        
        // error=>{
        //   console.log(error);
        // }
      )
      
    
     
    }

    updateBook(){
      this.router.navigate(['/findauthorbook'])
  
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