import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from '../app/services/app.services';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../app/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { FooterComponent} from './footer/footer.component'
import { HeaderComponent } from './navigation/header/header.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogSpinner } from './custom/DialogSpinnerComponent';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    NewsComponent,
    DialogSpinner
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [DialogSpinner]
})
export class AppModule { }
