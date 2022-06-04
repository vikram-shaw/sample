import { Component, Input, OnInit } from '@angular/core';
import { SavedItem } from '../model';

@Component({
  selector: 'vs-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{

  @Input('item') item!: SavedItem;

  ngOnInit(): void {

  }

}
