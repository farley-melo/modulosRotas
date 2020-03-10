import { Injectable } from '@angular/core';
import {Curso} from '../curso/curso/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private listaCursos:Curso[]=[
    new Curso(1,'java','linguagem de programacao multifuncional'),
    new Curso(2,'angular','framework front end para aplicacoes de grande porte'),
    new Curso(3,'mysql','banco de dados mais ultilizados em sistemas web')
  ];
  constructor() { }
  getCursos():Curso[]{
    return this.listaCursos;
  }
  getCurso(id:number):Curso|null{
    let cursos:Curso[]=this.getCursos();
    for(let curso of cursos){
      if(curso.id==id){
        return curso;
      }
    }
    return null;
  }
}
