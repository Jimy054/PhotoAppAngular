import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component'
//Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
//Component
import { CreateThoughtComponent } from './components/Thought/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/Thought/list-thought/list-thought.component';
import { ListCollectionComponent } from './components/Collection/list-collection/list-collection.component';
import { CreateCollectionComponent } from './components/Collection/create-collection/create-collection.component';
import { CreatePhotoComponent } from './components/Photo/create-photo/create-photo.component';
import { ListPhotoComponent } from './components/Photo/list-photo/list-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ListCollectionComponent,
    CreateCollectionComponent,
    CreatePhotoComponent,
    ListPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    BrowserAnimationsModule
  ],
  entryComponents:[CreateThoughtComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
