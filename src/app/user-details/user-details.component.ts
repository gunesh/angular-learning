import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);

    const response = this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/1`);
    console.log(response);
  }
}
