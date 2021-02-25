import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filters/filter.action';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter?: validFilters): Todo[] {

    switch (filter) {
      case 'completes':
        return todos.filter( todo => todo.complete );
      case 'pendings':
        return todos.filter( todo => !todo.complete );
      default:
        return todos;
    }
  }

}
