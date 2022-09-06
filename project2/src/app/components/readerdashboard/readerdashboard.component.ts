import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-readerdashboard',
  templateUrl: './readerdashboard.component.html',
  styleUrls: ['./readerdashboard.component.css']
})
export class ReaderdashboardComponent implements OnInit {
  
  //authorflag : boolean =false

  title : string =''
  author : string =''
  publisher : string =''
  category : string =''
  price : any =''

  bookresultbyauthor: any[]= []
  bookresultbytitle: any[]= []
  bookresultbypublisher: any[]= []
  bookresultbycategory: any[]= []
  bookresultbyprice: any[]= []


  constructor(private readerService: ReaderService, private router:Router) { }

  ngOnInit(): void {
    //location.reload()
  }
  reloadpage()
  {
    location.reload()
  }
  findBookByAuthor(author : any){
    
    this.readerService.findBookByAuthor(author).subscribe({
      next:(res:any)=>{
        
        
        console.log("success")
        console.log(res)
        this.bookresultbyauthor=res;
      },
      error:(err:any)=>{
        //this.authorflag=true
        console.log("failed")
        console.log(err)
      }
    }

    )

    

  }
  
  findBookByPublisher(publisher : any){
    this.readerService.findBookByPublisher(publisher).subscribe({
      next:(res:any)=>{
        
        
        console.log("success")
        console.log(res)
        this.bookresultbypublisher=res;
      },
      error:(err:any)=>{
        //this.authorflag=true
        console.log("failed")
        console.log(err)
      }
    }

    )

    

  }

  findBookByPrice(price : any){
    this.readerService.findBookByPrice(price).subscribe({
      next:(res:any)=>{
        
        
        console.log("success")
        console.log(res)
        this.bookresultbyprice=res;
      },
      error:(err:any)=>{
        //this.authorflag=true
        console.log("failed")
        console.log(err)
      }
    }

    )

    

  }

  findBookByCategory(category : any){
    this.readerService.findBookByCategory(category).subscribe({
      next:(res:any)=>{
        
        
        console.log("success")
        console.log(res)
        this.bookresultbycategory=res;
      },
      error:(err:any)=>{
        //this.authorflag=true
        console.log("failed")
        //console.log(err)
      }
    }

    )

    

  }
  
  subscribeBook(id : number){
    this.router.navigate(['readersubscribebook', id])
  
  }
  
  
  
  
  // findBookByTitle(title : any){
  //   this.readerService.findBookByTitle(title).subscribe({
  //     next:(res:any)=>{
        
        
  //       console.log("success")
  //       console.log(res)
  //       this.bookresultbytitle=res;
  //     },
  //     error:(err:any)=>{
  //       //this.authorflag=true
  //       console.log("failed")
  //       console.log(err)
  //     }
  //   }

  //   )

    

  // }
     


}
