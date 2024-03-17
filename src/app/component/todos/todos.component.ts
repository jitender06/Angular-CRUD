import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "string",
        desc: "string",
        active: true,
      },
      {
        sno: 2,
        title: "string 2",
        desc: "string 2",
        active: true,
      },
      {
        sno: 3,
        title: "string 3",
        desc: "string 3",
        active: true,
      }
    ]
  }

  handleSubmit() {
    console.log("clicked");
  }
}
