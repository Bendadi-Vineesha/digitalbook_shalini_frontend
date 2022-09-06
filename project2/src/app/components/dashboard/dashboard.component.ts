import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

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


  constructor(private authorService:AuthorService, private loginService:LoginService) {
    
   }

  ngOnInit(): void {
  }
  
  
}
