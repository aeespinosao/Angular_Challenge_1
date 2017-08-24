import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UrlsecurePipe } from './urlsecure.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UrlsecurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
