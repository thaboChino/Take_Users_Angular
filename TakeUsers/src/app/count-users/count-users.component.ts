import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-count-users',
  templateUrl: './count-users.component.html',
  styleUrls: ['./count-users.component.css']
})
export class CountUsersComponent {

  sizeOfArray!: number;

  constructor( private apiService: ApiServiceService){
    const usersObservable: Observable<any[]> = this.apiService.getUsers();

    usersObservable.subscribe(users => {
              this.sizeOfArray = users.length;
            });
    }

    getAllUsers(){
       
    }

}
