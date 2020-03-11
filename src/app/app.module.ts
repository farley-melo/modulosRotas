import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CursoService} from './shared/curso.service';
import {AlunoService} from './shared/aluno.service';
import {LoginService} from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursoService,AlunoService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
