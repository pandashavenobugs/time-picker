import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMaterialTimepickerModule.setLocale('tr-TR'),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
