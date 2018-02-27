import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';
import {DataTableModule} from 'angular2-datatable';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { MapListPipe } from './map-list.pipe';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: EditComponent },
  { path: 'new', component: NewComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent,
    NewComponent,
    MapListPipe
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent],
  })



 export class AppModule {

 }
