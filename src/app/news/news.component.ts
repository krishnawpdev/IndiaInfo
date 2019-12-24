import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.services';

import { newsList } from '../classes/news.models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _appService: AppService) { }

  lstNews: newsList[];

  ngOnInit() {
    var response = this._appService.getNews().subscribe(data => { 

      this.lstNews = data.articles;
      console.log("LstNews " + JSON.stringify( data.articles))

    }) 
    
  }

  redirectToBrowser(url) {
    console.log(url)
  }

}
