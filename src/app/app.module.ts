import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EuElementsModule } from 'eu-elements';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EuElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
