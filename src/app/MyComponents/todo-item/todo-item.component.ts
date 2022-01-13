import { Todo } from './../../Todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Input() i:number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo): void{
    this.todoDelete.emit(todo);
    console.log("on click has been triggered")
  }
  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }

}
