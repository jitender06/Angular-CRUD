import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter() 

  handleDelete(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("clicked")
  }
}
