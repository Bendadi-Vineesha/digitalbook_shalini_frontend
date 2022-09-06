import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

 

  //url = "http://3.111.52.78:64396/author/api/v1/createBook"
  //url = "http://3.111.52.78:51813/author/api/v1/createBook"

  //url1 = "http://3.111.52.78:52392/author/api/v1/findBook/"

  private host:string = "http://localhost:9094/author/api/v1/findBook1";
  private host1:string = "http://localhost:9094/author/api/v1/updateBook";
  private host2:string = "http://localhost:9094/author/api/v1/findBookById/";
  private host3:string = "http://localhost:9094/author/api/v1/register";
  url = "http://localhost:9094/author/api/v1/createBook"
  url2 = "http://localhost:9094/author/api/v1/authorPage"

  //private base:string ="http://3.111.52.78:58256/author/api/v1/"

  constructor(private http:HttpClient) { }

   header = {
    headers: new HttpHeaders().
    set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
  }

  author(){
    //return this.http.get(this.base,this.header)

    return this.http.get(this.url2,this.header)
  }

  registration(author: any)  
  {
    //return this.http.post(this.base+"/register",author)
   return  this.http.post(this.host3,author)
  }
  getBookById(id: number) 
  {
    //return this.http.get(this.base+"/findBookById/"+id,this.header)
   return  this.http.get(this.host2+id)
  }
  generateBook(book:any) {
    //return this.http.get(this.base,this.header)
    
    return this.http.post<string>(`${this.url}`,book,this.header)
  }

  findBook(author:any) {
    
    return this.http.get(this.host+"/"+author)
  }

  updateBook(id:any, author:any, book:any) 
  {

    //http://localhost:9094/author/api/v1/updateBook?id=34&author=valmiki
    return this.http.put(this.host1+"?id="+id+"&author="+author,book,this.header)
  }

  

  
}
