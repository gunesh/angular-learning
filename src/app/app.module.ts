import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MaterialTableComponent } from './mtable/mtable.component';
import { ReactSearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DrawerComponent,
    ReactSearchComponent,
    MaterialTableComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
