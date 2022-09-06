import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-readerinvoice',
  templateUrl: './readerinvoice.component.html',
  styleUrls: ['./readerinvoice.component.css']
})
export class ReaderinvoiceComponent implements OnInit {

  flag : boolean = false
  flag1 : boolean = false
  
  content1: any
  readerInvoice : any
  readercontent : any[] = []

  constructor(private readerService : ReaderService, private authorService : AuthorService) { }

  ngOnInit(): void {
  }

  read(id:any){
    this.flag=false
    this.flag1=false

    
    this.authorService.getBookById(id).subscribe(
      (res:any)=>{
        
        this.readercontent=res.content
        if(res.block == 'No')
        this.flag=true
        if(res.block == 'Yes')
        this.flag1=true

  
      }
    )
  
   
  
  }

  readerInvoiceDetail(email : any){
    //this.email2=email
    //console.log(email)
 this.readerService.subscribedBook(email).subscribe({
  next:(res:any)=>{
    this.readerInvoice=res;
  },
  error:(err:any)=>{
    
    console.log(err)
    
  }
}
   
 )
  }


}
