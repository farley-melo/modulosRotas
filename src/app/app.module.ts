import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CursoService} from './shared/curso.service';
import {AlunoService} from './shared/aluno.service';
import {LoginService} from './shared/login.service';
import {LoginAuthGuard} from './shared/login-auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursoService,AlunoService,LoginService,LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
