import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  u_id = localStorage.getItem("id")
  url = "http://localhost:3000/user/"

  user!: Person
  constructor(private service: ApiService) { }

  ngOnInit(): void {

    this.service.getUserById(this.u_id).subscribe(
      data => {
        this.user = data
      }
    )
  }


}
