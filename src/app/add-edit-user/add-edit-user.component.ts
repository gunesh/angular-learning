import { Component, OnInit } from '@angular/core';

//import validator and FormBuilder
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css'],
})
export class AddEditUserComponent implements OnInit {
  //Create FormGroup
  requiredForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm();
  }
  //Create required field validator for name
  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  ngOnInit() {}
}
