import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TakeUsers';
  showViewUsers$ = this.sharedService.showViewUsers$; // Ensure this line is correct

  constructor(private sharedService: SharedService) {}
}
