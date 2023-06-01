import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/interface/resource.interface';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.css']
})
export class ListResourceComponent implements OnInit {

  recursos?: Resource[]; // puede ser nulo

  constructor(private recursosService: ResourceService){




}

 ngOnInit(): void{

  this.recursosService.getResources().subscribe((res : any) =>{

    this.recursos = res.data;

  })

 }

}
