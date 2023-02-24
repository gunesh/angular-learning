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
    if (confirm('Confirm want to delete this record')) {
      this.userData.deleteUser(id).subscribe((resp: any) => {
        console.log(resp);
      });
    } else {
      console.log('Delete canceled');
    }
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
    this.userData.updateUser(id).subscribe((resp: any) => {
      console.log(resp);
    });
  }
  onView(id: number) {
    this.userData.viewUser(id).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
