import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nome:string;
  senha:string;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  login() {

    let result=this.loginService.login(this.nome,this.senha);
    if(result==true){
      this.router.navigate(['/home']);
    }


  }
}
