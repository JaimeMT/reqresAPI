import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { UserRegister } from 'src/app/interface/user-register.interface';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    const userRegister: UserRegister = {
      email: this.email,
      password: this.password
    }

    console.log(userRegister);
    this.userService.register(userRegister).subscribe({next :rest => {
      this.router.navigate(['/resource']);
      console.log(rest);
    },

    error: error => {
      if (error instanceof HttpErrorResponse && error.status === 400) {
        alert("No se ha introducido una contraseña o contraseña no válida");
   }}
  })
  }
}
