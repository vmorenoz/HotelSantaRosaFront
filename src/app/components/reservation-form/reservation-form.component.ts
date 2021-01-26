import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  rooms : any[] = [
    'Simple',
    'Simple ejecutiva',
    'Doble',
    'Triple',
    'Matrimonial',
    'Suite',
  ]

  formGroup : FormGroup
  subscriptions : Subscription = new Subscription()

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

  createForm(){
    this.formGroup = this.formBuilder.group({
      fullname : this.formBuilder.control('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      email : this.formBuilder.control('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.email
      ]),
      phone_number : this.formBuilder.control('', Validators.required),
      check_in : this.formBuilder.control(new Date(), Validators.required),
      check_out : this.formBuilder.control(''),
      room : this.formBuilder.control('', Validators.required)
    })
  }

  onSubmit(){

  }

}
