import { Routes } from '@angular/router';

import { ReactiveFormComponent } from './components/reactive-form/reactive-form';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form';

export const routes: Routes = [
  { path: '', redirectTo: 'template-driven', pathMatch: 'full' },
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormComponent }
];
