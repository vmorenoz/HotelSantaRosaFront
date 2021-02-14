import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PagesComponent } from './pages.component';
import { RoomsComponent } from './rooms/rooms.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children : [
      {
        path : 'welcome',
        component : WelcomeComponent
      },
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'rooms',
        component : RoomsComponent
      },
      {
        path : '**',
        pathMatch : 'full',
        redirectTo : 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
