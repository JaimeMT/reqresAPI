import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {


  usuarios?: User[]; // puede ser nulo

  constructor(private userService: UserService){

    this.usuarios = this.userService.getUsuarios();

}
