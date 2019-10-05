import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const clientRoutes: Routes = [
  {
    path: 'cliente',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
