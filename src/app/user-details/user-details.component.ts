import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  users: any = [];
  constructor(private userData: UsersService, private route: ActivatedRoute) {
    this.onGetUsers();
  }
  id: any = 0;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    // this.api.get('users?page=1').subscribe((res) => {
    //   this.users = res;
    //   console.log('data response', this.users);
    // });

    //   this.api.getFoodFacts('users?page=1').subscribe(response =>{
    //    console.log(response);

    // });
  }
  onDelete(id: number) {
    console.log(id);
  }
  onGetUsers() {
    this.userData.users().subscribe((data) => {
      this.users = data;
    });
  }
  userList() {
    return this.users;
  }
  onUpdate(id: number) {}
  onAdd(obj: any) {}
  onView(id: number) {}
}
