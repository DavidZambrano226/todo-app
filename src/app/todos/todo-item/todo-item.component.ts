import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { deleteAct, edit, toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;
  @ViewChild('inputEditing') inputEditing: ElementRef;

  chkComplete: FormControl;
  txtEdit: FormControl;
  editing = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    this.chkComplete = new FormControl( this.todoItem.complete );
    this.txtEdit = new FormControl( this.todoItem.text, Validators.required);

    this.chkComplete.valueChanges.subscribe( value => {
      this.store.dispatch( toggle({id: this.todoItem.id}) );
    });
  }
  edit() {
    this.editing = true;
    this.txtEdit.setValue(this.todoItem.text);
    setTimeout(() => {
      this.inputEditing.nativeElement.select();
    }, 1);
  }
  endEdition() {
    this.editing = false;

    if (this.txtEdit.invalid) { return; }
    if (this.txtEdit.value === this.todoItem.text) {return;}

    this.store.dispatch( 
      edit(
        {
          id: this.todoItem.id,
          text: this.txtEdit.value
        })
    )
  }

  deleteItem() {
    this.store.dispatch( deleteAct( { id: this.todoItem.id } ));
  }

}
