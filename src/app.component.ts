import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class='main-component'>
    <div style="display:flex;gap:10px;margin-bottom:20px">
    <a href='/'>Todo</a>
    <a href='/client'>Client List</a>
    </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
