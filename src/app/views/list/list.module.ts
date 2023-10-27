import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { AddingTodoModule } from 'src/app/components/adding-todo/adding-todo.module';
import { ListTodoModule } from 'src/app/components/list-todo/list-todo.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    AddingTodoModule,
    ListTodoModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
