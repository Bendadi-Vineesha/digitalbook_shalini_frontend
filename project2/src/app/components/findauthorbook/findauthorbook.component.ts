import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { LoginService } from 'src/app/services/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findauthorbook',
  templateUrl: './findauthorbook.component.html',
  styleUrls: ['./findauthorbook.component.css']
})
export class FindauthorbookComponent implements OnInit {

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


  books:any[] = [];

  constructor(private authorService:AuthorService,private loginService:LoginService,private router: Router) { }

  //listData : any =  MatTableDataSource
  //displayedColumns : string[] =['id','title']

  ngOnInit(): void {
    this.findAuthorBooks()
  }

  updateBook(id : number){
    this.router.navigate(['updatebook', id])

  }
  findAuthorBooks(){

    const userinfo = localStorage.getItem('loggedUser')
    
    this.book.author = JSON.stringify(userinfo).replace('"','')
    this.book.author = this.book.author.replace('"','')

    this.authorService.findBook(this.book.author)
    .subscribe({
        next: (res:any)=>{
            console.log(res);
            this.books = res;
            //this.listData = new MatTableDataSource(this.books)
        },
        error: (err:any)=>{ 
            console.log(err)
        }
      
        
    })
    //this.listData = new MatTableDataSource(this.books)
}

}
