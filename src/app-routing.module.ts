import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./todo.component').then((c) => c.TodoComponent),
  },
  {
    path: 'client',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./client-list/client-list.component').then(
            (c) => c.ClientListComponent
          ),
      },
      {
        path: `:id`,
        loadComponent: () =>
          import('./invoice-list/invoice-list.component').then(
            (c) => c.InvoiceListComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
