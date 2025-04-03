import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PeopleService } from './services/people.service';

// Define your routes here
const appRoutes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit/:id', component: PersonEditComponent },
  { path: 'edit/new', component: PersonEditComponent },
  { path: 'delete/:id', component: PersonDeleteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonEditComponent,
    PersonDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }