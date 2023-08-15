import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelevisionListComponent } from './television-list/television-list.component';
import { CreateTelevisionComponent } from './create-television/create-television.component';
import { UpdateTelevisionComponent } from './update-television/update-television.component';
import { TelevisionDetailsComponent } from './television-details/television-details.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'televisions', component: TelevisionListComponent },
  { path: 'create-television', component: CreateTelevisionComponent },
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'update-television/:id', component: UpdateTelevisionComponent },
  { path: 'television-details/:id', component: TelevisionDetailsComponent },
  { path: 'login-page', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
