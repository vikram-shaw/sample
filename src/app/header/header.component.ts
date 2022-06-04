import { Component } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import { SavedListService } from '../saved-list/saved-list.service';

@Component({
  selector: 'vs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private _searchText = '';

  set searchText(text: string) {
    this._searchText = text;
    if(text) {
      this.savedService.getSavedListByText(text).subscribe(x => {
        this.communication.update(x);
      });
    } else {
      this.savedService.getSavedList().subscribe(x => {
        this.communication.update(x);
      });
    }
  }

  get searchText() {
    return this._searchText??'';
  }

  constructor(private communication: CommunicationService,
    private savedService: SavedListService) {
      this.savedService.getSavedList().subscribe(x => {
        this.communication.update(x);
      });
    }

}
