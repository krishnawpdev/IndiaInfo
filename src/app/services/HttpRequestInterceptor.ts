import { Injectable } from "@angular/core";

import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpEvent<any>>{
        console.log("Interceptor called")
        return next.handle(req);
    }    
}