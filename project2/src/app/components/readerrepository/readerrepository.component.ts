import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-readerrepository',
  templateUrl: './readerrepository.component.html',
  styleUrls: ['./readerrepository.component.css']
})
export class ReaderrepositoryComponent implements OnInit {

  flagforsuccess : boolean = false
  flagforfailure : boolean = false
  flagcontent : boolean = false

  readerBook : any
  email1 : any
  email2 : any
  readerInvoice : any

  book1:any

  constructor(private readerService:ReaderService, private authorService: AuthorService) { }

  ngOnInit(): void {
  }

  readerRepository(email : any){
    this.email1=email
 this.readerService.subscribebBook(email).subscribe({
  next:(res:any)=>{
        
        
    console.log("success")
    console.log(res)
    this.readerBook=res;
  },
  error:(err:any)=>{
    //this.authorflag=true
    console.log("failed")
    //console.log(err)
  }
}
   
 )
  }

  readerInvoiceDetail(email : any){
    this.email2=email
    console.log(email)
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
read(id:any){
  this.authorService.getBookById(id).subscribe(
    (res:any)=>{
      this.book1=res;
      

    }
  )

  this.flagcontent=true

}

  unSubscribe(id : any){
    this.flagforfailure=false
    this.flagforsuccess=false
    console.log(this.email1)
    console.log(id)

    this.readerService.unsubscribebBook(this.email1,id).subscribe(
      (res:any)=>{
        if(res==null){
          setTimeout(function(){
            
            
         }, 5000);
        
        this.flagforfailure=true
        this.readerRepository(this.email1)
        
        }
        else{
          

          setTimeout(function(){
            
         }, 5000);
        this.flagforsuccess=true
        this.readerRepository(this.email1)
        
          
        }
      }
    )

  }

}
