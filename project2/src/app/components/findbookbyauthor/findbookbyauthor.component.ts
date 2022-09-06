import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-findbookbyauthor',
  templateUrl: './findbookbyauthor.component.html',
  styleUrls: ['./findbookbyauthor.component.css']
})
export class FindbookbyauthorComponent implements OnInit {

  author1 : any

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


  constructor(private readerService: ReaderService,private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {

    // this.author1 = this.route.snapshot.params['author']
    
    // this.readerService.findBookByAuthor(this.author1).subscribe({
    //   next: (res:any)=>{
    //       console.log(res);
    //       this.book = res;
    //       //this.listData = new MatTableDataSource(this.books)
    //   },
    //   error: (err:any)=>{
    //       console.log(err)
    //   }}
      
    //   )
  }

  
    
}




