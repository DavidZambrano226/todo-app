import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { setFilter, validFilters } from 'src/app/filters/filter.action';
import { clearComplete } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  actualFilter: validFilters = 'all';
  filters: validFilters[] = ['all', 'completes', 'pendings'];
  pendingTasks = 0;

  constructor( private store: Store<AppState>, ) { }

  ngOnInit() {

    // this.store.select('filters').subscribe(filtre => this.actualFilter = filtre);
    this.store.subscribe( state => {
      this.actualFilter = state.filters;
      this.pendingTasks = state.todos.filter( todo => !todo.complete ).length;
    });
  }

  applyFilter( filterChage: validFilters) {
    this.store.dispatch( setFilter( {filter: filterChage} ) );
  }

  clearTodos() {
    this.store.dispatch ( clearComplete() );
  }

}
