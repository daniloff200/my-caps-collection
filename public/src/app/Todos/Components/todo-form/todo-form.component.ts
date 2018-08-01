import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from './../../Services/data.service';

import { Cap } from './../../Model/cap';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  caps: Array<Cap> = [];
  cap: Cap = {
    name: '',
    text: '',
    brewery: '',
    country: '',
    image: '',
    myUniqueID: 0
  };

  result = '';

  constructor(private _dataService: DataService,  private router: Router) {
    this._dataService.getTodos()
      .subscribe(res => this.caps = res);
  }

  onSubmit() {
    this._dataService.createTodo(this.cap)
      .subscribe(res => {
        this.result = res.data;
        console.log(res)
      });
  }

  ngOnInit() {
  }

}
