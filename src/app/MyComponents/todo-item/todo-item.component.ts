import { Todo } from './../../Todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delTodo(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("delete triggered!");
  }

  checkboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}
