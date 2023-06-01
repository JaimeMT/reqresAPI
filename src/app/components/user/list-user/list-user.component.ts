import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  usuarios?: User[]; // puede ser nulo

  constructor(private userService: UserService) {


  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.usuarios = res.data;
    });
  }

  borrarUsuario(usuario:number){

    this.userService.deleteUser(usuario).subscribe(data =>{

      console.log("borrado");
    })
  }
}
