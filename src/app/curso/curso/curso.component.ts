import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../shared/curso.service';
import {Curso} from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  listaCurso:Curso[];
  constructor(private cursoService:CursoService) { }

  ngOnInit() {
    this.listaCurso=this.cursoService.getCursos();
  }

}
