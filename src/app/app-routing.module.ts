import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'search', component: ExampleComponent },
  { path: 'classification', component: TestComponent },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}