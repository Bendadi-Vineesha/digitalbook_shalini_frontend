import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http : HttpClient) { }
  //host : string = "http://3.111.213.99:54764/reader/api/v1"
 host : string = "http://localhost:9090/reader/api/v1"
 //host1 : string ="https://uwjfcqgya7.execute-api.ap-south-1.amazonaws.com/dev/reader"
 

  findAll()
{
  return this.http.get(this.host+"/findAll")
  //return this.http.get(this.host1)
}

findBookByCategory(category:any){
  return this.http.get(this.host+"/getBookByCategory/"+category)
}
findBookByTitle(title:any){
  return this.http.get(this.host+"/getBookByTitle/"+title)
}

findBookByAuthor(author:any){
  
  return this.http.get(this.host+"/getBookByAuthor/"+author)
}

findBookByPublisher(publisher:any){
  return this.http.get(this.host+"/getBookByPublisher/"+publisher)
}

findBookByPrice(price:any){
  return this.http.get(this.host+"/getBookByPrice/"+price)
}

subscribe(name:any, email:any,id : any){
  return this.http.get(this.host+"/subscribe1/"+name+"/"+email+"/"+id)
}

subscribebBook(email:any){
  return this.http.get(this.host+"/subscribedBook1/"+email)
}

subscribedBook(email:any){
  return this.http.get("http://localhost:9090/reader/api/v1/subscribedBooksDetail/"+email)
}

unsubscribebBook(email:any,bookId :any){
  return this.http.delete(this.host+"/deleteBookByBookIdAndEmail/"+bookId+"/"+email)
}

}


