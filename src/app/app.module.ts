import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CursoService} from './shared/curso.service';
import {AlunoService} from './shared/aluno.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursoService,AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
