import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryDialog, WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from '../shared/material.module';
import { IconsModule } from '../shared/icons.module';
import { ComponentsModule } from '../components/components.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';


@NgModule({
  declarations: [PagesComponent, WelcomeComponent, GalleryDialog, HomeComponent, RoomsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    IconsModule,
    ComponentsModule,
    NgxMasonryModule
  ]
})
export class PagesModule { }
