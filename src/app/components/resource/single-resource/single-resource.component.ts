import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'src/app/interface/resource.interface';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-single-resource',
  templateUrl: './single-resource.component.html',
  styleUrls: ['./single-resource.component.css']
})
export class SingleResourceComponent {
  resource!: Resource ;
  id! : string;

 constructor(private route : ActivatedRoute,
   private resourceService: ResourceService) {



 }

 ngOnInit() {
   this.id = this.route.snapshot.paramMap.get("id")!;
   this.resourceService.getResource(this.id).subscribe((res : any) => {
     this.resource =res.data ;

   })
 }
}
