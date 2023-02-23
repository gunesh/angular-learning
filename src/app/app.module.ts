import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DrawerComponent } from './drawer.component';
import { MaterialTableComponent } from './mtable.component';

import { ReactSearchComponent } from './search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent,DrawerComponent,ReactSearchComponent,MaterialTableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
