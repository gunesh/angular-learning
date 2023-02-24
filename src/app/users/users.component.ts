import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  data: any = [];
  page: any = 1;
  per_page: any = 1;
  support: any = {};
  total: any = 0;
  total_pages: any = 0;
  constructor(private userData: UsersService) {
    this.onGetUsers();
  }
  showAddForm: boolean = false;

  ngOnInit(): void {}

  onAddCancelAction() {
    this.showAddForm = !this.showAddForm;
  }
  getUserFormData(data: any) {
    this.userData.addUser(data).subscribe((res) => {
      this.users = [...this.users, res];
      this.showAddForm = !this.showAddForm;
    });
  }
  onDelete(id: number) {
    console.log(id);
  }
  onGetUsers() {
    this.userData.users().subscribe((resp: any) => {
      this.users = resp.data;
      this.page = resp.page;
      this.page = resp.page;
      this.per_page = resp.per_page;
      this.support = resp.support;
      this.total = resp.total;
      this.total_pages = resp.total_pages;
    });
  }
  userList() {
    return this.users;
  }
  onUpdate(id: number) {
    console.log(id);
  }
  onView(id: number) {
    console.log(id);
  }
}
