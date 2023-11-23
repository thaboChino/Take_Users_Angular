import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-veiw-users',
  templateUrl: './veiw-users.component.html',
  styleUrls: ['./veiw-users.component.css']
})
export class VeiwUsersComponent {
  
  users: any[] = [];
  showViewUsers: boolean = false;

  constructor(private apiService: ApiServiceService, private sharedService: SharedService) {
    this.sharedService.showViewUsers$.subscribe((show) => {
      this.showViewUsers = show;
    });
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}