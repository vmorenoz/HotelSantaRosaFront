import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../shared/icons.module';


@NgModule({
  declarations: [ReservationFormComponent],
  exports: [ReservationFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class ComponentsModule { }
