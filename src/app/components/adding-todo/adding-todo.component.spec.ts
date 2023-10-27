import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingTodoComponent } from './adding-todo.component';

describe('AddingTodoComponent', () => {
  let component: AddingTodoComponent;
  let fixture: ComponentFixture<AddingTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingTodoComponent]
    });
    fixture = TestBed.createComponent(AddingTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
