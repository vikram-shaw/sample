import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './saved-list/item/item.component';
import { SavedListsComponent } from './saved-list/saved-list.component';

const routes: Routes = [
  {
    path: 'saved-list',
    component: SavedListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
