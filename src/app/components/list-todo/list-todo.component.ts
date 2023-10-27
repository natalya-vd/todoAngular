import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/types';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {
  @Input() listTodo!: TodoItem[]

  @Output() deleteTodo = new EventEmitter<number>()

  onDeleteTodo(id: number): void {
    this.deleteTodo.emit(id)
  }
}
