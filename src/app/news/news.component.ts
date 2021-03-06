import { Component, OnInit,OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AppService } from '../services/app.services';

import { newsList } from '../classes/news.models';
import {DialogSpinner} from '../custom/DialogSpinnerComponent'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  private dialog: MatDialogRef<DialogSpinner>;

  constructor(private _appService: AppService,private matDialog: MatDialog) {

    let numbers = [1,4,1,4,5,6];
    console.log(Array.from(new Set(numbers))); // returns as array
    console.log("Numbers : " + [...new Set(numbers)]); // returns as a string
    
   }

  lstNews: newsList[];

  private _newsSubscrption: Subscription;
  ngOnInit() {
    this.dialog = this.matDialog.open(DialogSpinner, { id: 'DialogSpinnerComponent', disableClose: true });

    this._newsSubscrption = this._appService.getNews().subscribe(data => { 
      this.lstNews = data.articles;
      this.dialog.close();

    }) 
    
  }

  ngOnDestroy() {
    this._newsSubscrption.unsubscribe();
    this.lstNews = null;
    console.log("News data" + this.lstNews);
  }
  redirectToBrowser(url) {
    console.log(url)
  }

}
