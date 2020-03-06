import { Injectable } from "@angular/core";

import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>>{
        console.log("Interceptor called");
        console.log(req);
        const authtoken = "sampletoken"
        const authReq = req.clone({
            setHeaders: {Authorization:authtoken}
        })
        return next.handle(authReq);
    }
}