import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url == 'http://localhost:9898/public/signup' || request.url == 'http://localhost:9898/public/login'){
      return next.handle(request);
    }else{
    let authToken = localStorage.getItem("authToken") as string
    console.log(authToken+"auth");    
    return next.handle(request.clone({ setHeaders: { authToken } }));
    }
  }
}
