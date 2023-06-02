import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { UserRegister } from 'src/app/interface/user-register.interface';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    const userLogin: UserRegister ={
      email: this.email,
      password: this.password
    };

    console.log(userLogin);
    this.userService.login(userLogin).subscribe({next : rest => {
      console.log(rest);
        this.router.navigate(['/users']);
    },

    error: error => {
      if (error instanceof HttpErrorResponse && error.status === 400) {
        alert("Email o contraseña incorrectos");
   }}})
  }

  registrarse(){
    this.router.navigate(['/register']);
  }
}
