import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-readersubscribebook',
  templateUrl: './readersubscribebook.component.html',
  styleUrls: ['./readersubscribebook.component.css']
})
export class ReadersubscribebookComponent implements OnInit {

  flag : boolean = false
  flag1 : boolean = false

  subscriber ={
    name:'',
    email:'' 
  }

  id2 : any 

  constructor(private route:ActivatedRoute, private readerService: ReaderService, private router :Router) { }

  ngOnInit(): void {

    this.id2= this.route.snapshot.params['id']
  }

  onSubmit(){
    this.flag=false
    this.flag1=false
 this.readerService.subscribe(this.subscriber.name, this.subscriber.email,this.id2).subscribe(
   (res:any)=>{
     if(res==null)
     {
       this.flag1 = true

       setTimeout(function(){
        window.location.href="/findallbook"
     }, 5000);

     }
     else{
     this.flag=true
     setTimeout(function(){
      window.location.href="/findallbook"
   }, 5000);
     console.log("subscribed")
     }

   }
 )
  }

  updateBook(){
    this.router.navigate(['/findallbook'])

  }

}
