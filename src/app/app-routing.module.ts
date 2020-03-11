import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';


const routes: Routes = [
  {path:'aluno',loadChildren:()=>import('./aluno/aluno.module').then(m=>m.AlunoModule)},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'curso',loadChildren:()=>import('./curso/curso.module').then(m=>m.CursoModule)},
  {path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
