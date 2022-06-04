import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import { SavedItem } from './model';
import { SavedListService } from './saved-list.service';

@Component({
  selector: 'vs-saved-list',
  templateUrl: './saved-list.component.html',
  styleUrls: ['./saved-list.component.scss']
})
export class SavedListsComponent implements OnInit {

  data: SavedItem[] = [];
  selectedItem!: SavedItem;

  constructor(private communication: CommunicationService) {

    this.communication.searchText$.subscribe(x => {
      this.data = x;
    })
  }

  ngOnInit(): void {
  }

}
