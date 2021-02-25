import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { validFilters } from 'src/app/filters/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  actualFilter: validFilters;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    // this.store.select('todos')
    // .subscribe((todos: Todo[]) => this.todos = todos);

    // Get all states
    // this.store.subscribe( state => {
    //   this.todos = state.todos;
    //   this.actualFilter = state.filters;
    // });
    // Refactor the above function using destructuring
    this.store.subscribe( ({todos, filters}) => {
      this.todos = todos;
      this.actualFilter = filters;
    });

  }

}
