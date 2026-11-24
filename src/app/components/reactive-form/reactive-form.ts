import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Inscription, PAYS_LIST } from '../../models/inscription.model';

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveFormComponent {
  countries = PAYS_LIST;
  inscriptionForm: FormGroup;
  submittedData: Inscription | null = null;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get fullname() {
    return this.inscriptionForm.get('fullname');
  }

  get age() {
    return this.inscriptionForm.get('age');
  }

  get country() {
    return this.inscriptionForm.get('country');
  }

  get email() {
    return this.inscriptionForm.get('email');
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.submittedData = this.inscriptionForm.value;
      console.log('Données soumises (Reactive Forms) :', this.submittedData);
    }
  }
}
