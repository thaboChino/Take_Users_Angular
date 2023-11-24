import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-count-users',
  templateUrl: './count-users.component.html',
  styleUrls: ['./count-users.component.css']
})
export class CountUsersComponent implements OnInit {
  sizeOfArray!: number;
  showViewUsers = false;

  constructor(private apiService: ApiServiceService, private cdr: ChangeDetectorRef,private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to the onUserAdded observable to update user count when a new user is added
    this.apiService.onUserAdded().subscribe(() => {
      this.updateUserCount();
    });

    // Initial update of user count
    this.updateUserCount();
  }

  // Fetch all users and update the count
  updateUserCount() {
    const usersObservable: Observable<any[]> = this.apiService.getUsers();

    usersObservable.subscribe(users => {
      this.sizeOfArray = users.length;

      // Trigger change detection manually
      this.cdr.detectChanges();
    });
  }

  getAllUsers() {
    // Your logic to get all users
    this.sharedService.toggleViewUsers();
  }
}
