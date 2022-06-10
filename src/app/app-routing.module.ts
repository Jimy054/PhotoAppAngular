import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListCollectionComponent } from './components/Collection/list-collection/list-collection.component';
import { ListPhotoComponent } from './components/Photo/list-photo/list-photo.component';
import { CreateThoughtComponent } from './components/Thought/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/Thought/list-thought/list-thought.component';

const routes: Routes = [
  {path:"list-thought", component:ListThoughtComponent},
  {path:"list-photo", component:ListPhotoComponent},
  {path:"list-collection", component:ListCollectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
