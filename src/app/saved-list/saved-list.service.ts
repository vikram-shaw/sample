import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockData } from './data';
import { SavedItem } from './model';

@Injectable({
  providedIn: 'root'
})
export class SavedListService {

  constructor() { }

  getSavedList(): Observable<SavedItem[]> {
    return of(MockData);
  }

  getSavedListByText(text: string): Observable<SavedItem[]> {
    return of(MockData.filter(
      x => x.name.toLowerCase().includes(text.toLowerCase())
    ));
  }

  getSavedItem(itemId: number): Observable<SavedItem> {
    return of(MockData.filter(x => x.id === itemId)[0]??null);
  }
}
