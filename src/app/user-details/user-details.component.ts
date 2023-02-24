import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  users: any;
  constructor(
    private api: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.api.get('users?page=1').subscribe((res) => {
      this.users = res;
      console.log('data response', this.users);
    });
  }
}
