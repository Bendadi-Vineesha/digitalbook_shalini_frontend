import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor(private loginService: LoginService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error("Method not implemented.");
          let newReq = req;
          let token=this.loginService.getToken()

          console.log("INTERCEPTER", token)

          if(token!=null)
          {
              newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
          }

          return next.handle(newReq)

    }

}