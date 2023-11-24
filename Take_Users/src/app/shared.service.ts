// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private showViewUsersSource = new BehaviorSubject<boolean>(false);
  showViewUsers$ = this.showViewUsersSource.asObservable();

  toggleViewUsers() {
    this.showViewUsersSource.next(!this.showViewUsersSource.value);
  }

  getCurrentViewUsersState(): boolean {
    return this.showViewUsersSource.value;
  }
}
