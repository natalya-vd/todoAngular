import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddingTodoComponent } from './adding-todo.component';

@NgModule({
  declarations: [AddingTodoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddingTodoComponent
  ]
})
export class AddingTodoModule { }
