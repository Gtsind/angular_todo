import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'client-list',
  standalone: true,
  template: `
  <div class="list-group">
  <div class='item-container list-group-item'>
      <button type="button" class="btn btn-link" (click)='goToClient(1)'>Ir a cliente 1</button>  
  </div>
  <div class='item-container list-group-item'>
     <button type="button" class="btn btn-link" (click)='goToClient(2)'>Ir a cliente 2</button>
  </div>
</div>
  `,
})
export class ClientListComponent {
  private route = inject(Router);

  goToClient(clientId: number) {
    this.route.navigate([`/client/${clientId}`]);
  }
}
