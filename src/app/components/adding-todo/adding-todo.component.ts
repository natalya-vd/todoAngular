import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adding-todo',
  templateUrl: './adding-todo.component.html',
  styleUrls: ['./adding-todo.component.scss']
})
export class AddingTodoComponent {
  task: string = ''

  @Output() addTodo = new EventEmitter<string>()

  onAddTodo(): void {
    this.addTodo.emit(this.task)
  }
}
