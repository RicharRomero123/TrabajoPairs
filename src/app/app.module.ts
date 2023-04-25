import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PeliculasTableComponent } from './peliculas-table/peliculas-table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import{MatIconModule} from '@angular/material/icon';
import{MatTableModule} from '@angular/material/table';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatButtonModule} from '@angular/material/button';
import{FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import{ReactiveFormsModule} from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculasTableComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
