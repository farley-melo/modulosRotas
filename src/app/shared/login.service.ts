import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  emissor=new EventEmitter<boolean>();
  constructor() { }
  login(nome:string,senha:string):boolean{
    if(nome=='farley'&&senha=='1234'){
      this.emissor.emit(true);
      return true;
    }else{
      this.emissor.emit(false);
      alert('usuario nao encotrado');
      return false;
    }
}
}
