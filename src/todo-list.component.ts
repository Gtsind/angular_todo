import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector:'todo-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <li *ngFor="let item of items" class="todo-item">
  <div>{{item.text}} </div>
  <a (click)="removeTodo(item.id)">remove</a>
  </li>
  `,
  styles:[
    `
    .todo-item {
      display:grid;
      grid-template-columns: 1fr auto;
      align-items: center
      gap-row:10px;
      padding: 10px 0;
      border: 1px solid darkkhaki;
      padding: 10px;
      margin-bottom:10px;
    }
    .todo-item:hover {
      cursor:pointer;
      background:darkkhaki
    }
    `
  ]
})

export class TodoListComponent {

  @Input() items: Array<any> = []
  @Output() onTodoRemove = new EventEmitter<number>();
  removeTodo(todoId: number){
    this.onTodoRemove.emit(todoId)
  }
}