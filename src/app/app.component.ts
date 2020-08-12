import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diktatorerne';
  registerForm: any;
  deleteForm: any;
  entry: Array<any>;
  counter: number;
  data1: [object] = [Object];
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      birthYear: '',
      deathYear: ''
    });
  }

  ngOnInit(): void {
  }

  register(user: object) {
    console.log(user);
    this.counter += 1;
    this.data1.push(user);
    console.log(this.data1);
  }

  deleteLatest() {
    this.data1.splice(-1, 1);
  }
}
