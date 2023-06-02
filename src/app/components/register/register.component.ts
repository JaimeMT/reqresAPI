import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { UserRegister } from 'src/app/interface/user-register.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  register() {
    const userRegister: UserRegister = {
      email: this.email,
      password: this.password
    }

    console.log(userRegister);
    this.userService.register(userRegister).subscribe(rest => {
      console.log(rest);
    })
  }
}
