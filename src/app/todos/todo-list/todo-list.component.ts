import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('todos')
    .subscribe((todos: Todo[]) => this.todos = todos);

  }

}
