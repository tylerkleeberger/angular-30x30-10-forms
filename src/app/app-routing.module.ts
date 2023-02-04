import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationDetailsComponent } from './components/registration-details/registration-details.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'register', component: FormComponent },
  { path: 'details/:id', component: RegistrationDetailsComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
