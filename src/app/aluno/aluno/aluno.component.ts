import { Component, OnInit } from '@angular/core';
import {AlunoService} from '../../shared/aluno.service';
import {Aluno} from '../aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  listaAluno:Aluno[];
  constructor(private alunoService:AlunoService) { }

  ngOnInit() {
    this.listaAluno=this.alunoService.getAlunos();
  }

}
