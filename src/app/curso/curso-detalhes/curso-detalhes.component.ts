import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Curso} from '../curso/curso';
import {CursoService} from '../../shared/curso.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit ,OnDestroy{
  curso:Curso;
  inscricao:Subscription;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private cursoService:CursoService) { }


  ngOnInit() {
   this.inscricao= this.route.params.subscribe((params:any)=>{
       this.curso=this.cursoService.getCurso(params['id']);

    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
