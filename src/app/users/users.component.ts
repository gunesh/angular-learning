import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(private userData: UsersService) {
    this.onGetUsers();
  }
  showAddForm: boolean = false;

  ngOnInit(): void {}

  onAddCancelAction() {
    this.showAddForm = !this.showAddForm;
  }
  getUserFormData(data: any) {
    console.log(data);
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
  onUpdate(id: number) {
    console.log(id);
  }
  onAdd(obj: any) {}
  onView(id: number) {
    console.log(id);
  }
}
