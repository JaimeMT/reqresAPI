import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  user!: User ;
   id! : string;

  constructor(private route : ActivatedRoute,
    private userService: UserService) {



  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.userService.getUser(this.id).subscribe((res : any) => {
      this.user =res.data ;

    })
  }



}
