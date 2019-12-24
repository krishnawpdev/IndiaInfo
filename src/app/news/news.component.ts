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

  constructor(private _appService: AppService,private matDialog: MatDialog) { }

  lstNews: newsList[];

  private subscrption: Subscription;
  ngOnInit() {
    this.dialog = this.matDialog.open(DialogSpinner, { id: 'DialogSpinnerComponent', disableClose: true });

    var response = this._appService.getNews().subscribe(data => { 
      this.lstNews = data.articles;
      this.dialog.close();

    }) 
    
  }

  ngOnDestroy() {
    this.subscrption.unsubscribe();
  }
  redirectToBrowser(url) {
    console.log(url)
  }

}
