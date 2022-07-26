import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchString: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  searchString$: Observable<any> = this.searchString.asObservable();
  constructor() {
    this.searchString.next('')
  }
 
   setSearchString(searchString: string) {
     this.searchString.next(searchString);
   }
}
