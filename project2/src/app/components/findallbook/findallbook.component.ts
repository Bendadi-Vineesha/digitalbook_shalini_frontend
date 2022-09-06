import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-findallbook',
  templateUrl: './findallbook.component.html',
  styleUrls: ['./findallbook.component.css']
})
export class FindallbookComponent implements OnInit {

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


  constructor(private readerService: ReaderService, private router :Router) { }

  ngOnInit(): void {

    this.findllBooks()
  }

  findllBooks(){

    

    this.readerService.findAll()
    .subscribe({
        next: (res:any)=>{
            console.log(res);
            this.books = res;
            
        },
        error: (err:any)=>{ 
            console.log(err)
        }
      
        
    })
    
}

subscribeBook(id : number){
  this.router.navigate(['readersubscribebook', id])

}



}
