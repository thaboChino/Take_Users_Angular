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
      if(this.formData.first_name != '' || this.formData.last_name != '' || this.formData.email != ''){
            this.apiservice.addUser(this.formData).subscribe();
            this.apiservice.onUserAdded().subscribe((newUser: any) => {
              // Handle the event, update your component, etc.
              console.log('User added event received:', newUser);
            });
            this.resetForm();
      }
  }

  resetForm() {
    // Reset the form and clear the form data
    this.formData = {
      first_name: '',
      last_name: '',
      email: ''
    };
  }

}
