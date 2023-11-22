import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  formData = {
    first_name: '',
    last_name: '',
    email: ''
  };


  constructor(private apiservice: ApiServiceService){}


  onSubmit() {
      console.log('Form submitted:', this.formData);
      this.apiservice.addUser(this.formData).subscribe();
  }

}
