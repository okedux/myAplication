import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LiginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  contraseñas: String[] = ["123456", "password"];
  emails: String[] = ["jajaja@gail.com"];

  //esta funcion se encarga del login
  login() {
    //Verifica si el email existe
    const emailIndex = this.emails.indexOf(this.email);
    if (emailIndex === -1) {
      this.errorMessage = 'El email no está registrado';
      return false;
    }

    //Verifica si la contraseña coincide SOLO en la misma posición
    else if (this.password !== this.contraseñas[emailIndex]) {
      this.errorMessage = 'Contraseña incorrecta para este email';
      return false;
    }else{
      this.errorMessage = '';
      return true;
    }

    //Si ambos son correctos y en la misma posición
    this.errorMessage = '';
  }

  //muestra en consola el email y la contraseña
  consola() {
    console.log("contraseña " + this.password);
    console.log("email " + this.email);
  }
}
