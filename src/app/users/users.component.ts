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
    this.userData.addUser().subscribe((data)=>{
      console.log(data)
    })
    this.showAddForm = !this.showAddForm;
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
  onView(id: number) {
    console.log(id);
  }
}
