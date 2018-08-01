import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from './../../Services/data.service';
import { Cap } from '../../Model/cap';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  caps: Array<Cap> = [];
  private cap: Cap  ;

  constructor(private _dataService: DataService,  private router: Router) {
    this._dataService.getTodos()
      .subscribe(res => this.caps = res);
  }

  ngOnInit() {}

  goToCapPage(cap) {
    this.router.navigate(['/cap', cap.myUniqueID]);
  }

  onTodoDelete(todoId: string) {
    this._dataService.deleteTodo(todoId)
      .subscribe(res => {
        this.caps = this.caps.filter( (todo: any) => {
          return todo._id != todoId;
        });
        console.log(res)
      });
  }

}
