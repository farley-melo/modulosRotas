import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'aluno',loadChildren:()=>import('./aluno/aluno.module').then(m=>m.AlunoModule)},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'curso',loadChildren:()=>import('./curso/curso.module').then(m=>m.CursoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
