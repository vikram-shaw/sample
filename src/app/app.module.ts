import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SavedListsComponent } from './saved-list/saved-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './saved-list/item/item.component';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from './communication/communication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SavedListsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
