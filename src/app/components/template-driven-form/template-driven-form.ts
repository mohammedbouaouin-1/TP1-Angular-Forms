import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Inscription, PAYS_LIST } from '../../models/inscription.model';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    JsonPipe,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css'
})
export class TemplateDrivenFormComponent {
  countries = PAYS_LIST;

  user: Inscription = {
    fullname: '',
    age: null,
    country: '',
    email: ''
  };

  submittedData: Inscription | null = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submittedData = { ...this.user };
      console.log('Données soumises (Template-Driven) :', this.submittedData);
    }
  }
}
