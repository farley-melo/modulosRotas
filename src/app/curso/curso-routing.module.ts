import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursoComponent} from './curso/curso.component';
import {CursoDetalhesComponent} from './curso-detalhes/curso-detalhes.component';
import {CursoNaoEncontradoComponent} from './curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {path:'curso',component:CursoComponent},
  {path:'curso/:id',component:CursoDetalhesComponent},
  {path:'cursoNaoEncontrado',component:CursoNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
