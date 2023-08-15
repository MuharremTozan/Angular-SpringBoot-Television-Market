import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelevisionListComponent } from './television-list/television-list.component';
import { CreateTelevisionComponent } from './create-television/create-television.component';
import { FormsModule } from '@angular/forms';
import { UpdateTelevisionComponent } from './update-television/update-television.component';
import { TelevisionDetailsComponent } from './television-details/television-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpDeleteAlertComponent } from './pop-up-delete-alert/pop-up-delete-alert.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TelevisionListComponent,
    CreateTelevisionComponent,
    UpdateTelevisionComponent,
    TelevisionDetailsComponent,
    PopUpDeleteAlertComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatTableModule

  ],
  providers: [PopUpDeleteAlertComponent, TelevisionListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
