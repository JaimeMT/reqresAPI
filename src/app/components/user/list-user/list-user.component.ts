import { Component,ElementRef,Renderer2,ViewChild } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})

export class ListUserComponent {
  usuarios?: User[]; // puede ser nulo

  @ViewChild('alert') alert?: ElementRef;
  @ViewChild('parrf')  parrafo? : ElementRef;
  texto?:ElementRef;

  constructor(private userService: UserService, private renderer2:Renderer2) {


  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.usuarios = res.data;
    });
  }

  borrarUsuario(usuario:number){

    this.userService.deleteUser(usuario).subscribe(data =>{


      this.renderer2.addClass(this.alert?.nativeElement,'alert');
      this.renderer2.addClass(this.alert?.nativeElement,'alert-success');
      this.texto = this.renderer2.createText('Usuario Borrado con éxito !!!');
      this.renderer2.appendChild(this.parrafo?.nativeElement,this.texto);


    }, error =>{

      this.renderer2.addClass(this.alert?.nativeElement,'alert');
      this.renderer2.addClass(this.alert?.nativeElement,'alert-danger');
      this.texto = this.renderer2.createText('Error al borrar el usuario !!!');
      this.renderer2.appendChild(this.parrafo?.nativeElement,this.texto);


    })
  }
}
