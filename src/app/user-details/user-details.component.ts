import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  users: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.warn(this.route.snapshot.paramMap.get('id'));
    // this.api.get('users?page=1').subscribe((res) => {
    //   this.users = res;
    //   console.log('data response', this.users);
    // });

    //   this.api.getFoodFacts('users?page=1').subscribe(response =>{
    //    console.log(response);

    // });
  }
}
