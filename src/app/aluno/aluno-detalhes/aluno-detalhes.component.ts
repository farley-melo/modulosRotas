import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlunoService} from '../../shared/aluno.service';
import {Aluno} from '../aluno';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit,OnDestroy {
  aluno:Aluno;
  inscricao:Subscription;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private alunoService:AlunoService) { }

  ngOnInit() {
    this.inscricao=this.route.params.subscribe((params:any)=>{
      this.aluno=this.alunoService.getAluno(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
