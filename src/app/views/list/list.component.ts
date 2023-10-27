import { Component } from '@angular/core';
import { TodoItem } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  protected id: number = 1

  listTodo: TodoItem[] = []

  handleAddTodo(value: string): void {
    this.listTodo.push({
      id: this.id++,
      task: value
    })
  }

  handleDeleteTodo(id: number): void {
    this.listTodo = this.listTodo.filter((todo) => todo.id !== id)
  }
}
