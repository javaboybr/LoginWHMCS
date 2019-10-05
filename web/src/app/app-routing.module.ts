import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: '',
        loadChildren: './client/client.module#ClientModule'
      },
      {
        path: '',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
