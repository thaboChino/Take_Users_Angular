import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CountUsersComponent } from './count-users/count-users.component';
import { VeiwUsersComponent } from './veiw-users/veiw-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    CountUsersComponent,
    VeiwUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
