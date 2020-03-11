import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  get usuarioAutenticado(): boolean {
    return this._usuarioAutenticado;
  }
  emissor=new EventEmitter<boolean>();
  private _usuarioAutenticado:boolean;
  constructor() { }
  login(nome:string,senha:string):boolean{
    if(nome=='farley'&&senha=='1234'){
      this._usuarioAutenticado=true;
      this.emissor.emit(true);
      return true;
    }else{
      this._usuarioAutenticado=false;
      this.emissor.emit(false);
      alert('usuario nao encotrado');
      return false;
    }
}
}
