import {Component, OnInit} from '@angular/core';
import {LoginService} from './shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'modulosRotas';
  isLoged:boolean;
  constructor(private loginService:LoginService,private router:Router){}
  ngOnInit(): void {
    this.loginService.emissor.subscribe(result=>{this.isLoged=result});
  }

  logout() {
    this.isLoged=false;
    this.router.navigate(['/login']);
  }
}
