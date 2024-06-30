import 'zone.js/dist/zone';
import { Component, signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';


@Component({
  selector: 'my-app',
  standalone: false,
  imports: [AppRoutingModule],
  template: `
  <router-outlet></router-outlet>
  <h2>Learning Signal</h2>
    <input type="text" [ngModel]="name()"  (ngModelChange)="name.set($event)" />
    <div>
    <button (click)="name.set('World')">Hello World!</button>
    <button (click)="name.set('Angular')">Hello Angular!</button>
    <button (click)="name.set('Signals')">Hello Signals!</button>
  </div> 
  <div>Count: {{ count() }}</div>
    <div>Double: {{ double() }}</div>

    <button (click)="inc()">Increase</button>
    <button (click)="reset()">Reset</button>

    <br>
  `,
  styles: [
    `
    `,
  ],
})
export class App1 {
  readonly name = signal('Nilesh Patel');

  readonly message = computed(() => {
    return `Hello ${this.name()}!`;
  });

  count = signal(0);
  double = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log(this.message());
    });
  }

  inc() {
    this.count.update((c) => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}

