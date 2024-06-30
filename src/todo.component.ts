import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';


interface TodoItem {
  id: number;
  text: string;
}
@Component({
  selector: 'todo',
  standalone: true,
  imports: [CommonModule, FormsModule,TodoListComponent],
  template: `
    <h1>Todo</h1>
    <div class="input-text">
    <input placeholder='new todo' [(ngModel)]="name" />
    <button (click)="addTodo()" [disabled]="!!!name">add</button><br/>
    </div>
    <todo-list [items]="items" (onTodoRemove)="onTodoRemove($event)"></todo-list>
  
  `,
  styles:[
    `
    .input-text{
      display:grid;
      grid-template-columns: auto .2fr;
    }
    `
  ]
})
export class TodoComponent {
  name = '';
  items: Array<TodoItem> = [
    { id: 1, text: 'buy sugar' },
    { id: 2, text: 'go for walking' },
  ];

  addTodo() {
    if (!!this.name) {
      const newItems = this.items;
      newItems.unshift({ id: this.items.length, text: this.name });
      this.items = newItems;
      this.name = '';
    }
  }

  onTodoRemove(itemId: number) {
    const newItems = this.items.filter((i) => i.id !== itemId);
    this.items = newItems;
  }
}
