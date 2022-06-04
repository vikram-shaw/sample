import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SavedItem } from '../saved-list/model';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private searchText: Subject<SavedItem[]> = new BehaviorSubject<SavedItem[]>([]);

  get searchText$() {
    return this.searchText.asObservable();
  }

  update(items: SavedItem[]): void {
    this.searchText.next(items);
  }
}
