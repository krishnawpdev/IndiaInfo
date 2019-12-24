import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class AppService{

    constructor(private httpclient: HttpClient) { }
    
    getNews(): Observable<any> {

        return this.httpclient.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=db2ba5b09c4541b697f24fb8bc9da03f");

    }
}