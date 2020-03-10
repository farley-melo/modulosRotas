import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CursoModule} from './curso/curso.module';
import {HomeModule} from './home/home.module';
import {CursoService} from './shared/curso.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CursoModule,HomeModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
