import { Injectable } from '@angular/core';
import {Aluno} from '../aluno/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos:Aluno[]=[
    new Aluno(1,'farley','farley@gmail.com'),
    new Aluno(2,'diane','diane@gmail.com'),
    new Aluno(3,'maria','maria@gmail.com')
  ];
  constructor() { }
  getAlunos():Aluno[]{
    return this.alunos;
  }
  getAluno(id:number):Aluno|null{
    let alunos=this.getAlunos();
    for(let aluno of alunos){
      if(aluno.id==id){
        return aluno;
      }
    }
    return null;
  }
}
