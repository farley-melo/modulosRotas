import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlunoComponent} from './aluno/aluno.component';
import {AlunoDetalhesComponent} from './aluno-detalhes/aluno-detalhes.component';
import {AlunoFormComponent} from './aluno-form/aluno-form.component';

const routes: Routes = [
  {path:'',component:AlunoComponent,children:[
      {path:'novo',component:AlunoFormComponent},
      {path:':id',component:AlunoDetalhesComponent},
      {path:':id/editar',component:AlunoFormComponent}
    ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
