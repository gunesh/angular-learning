import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'search', component: ReactSearchComponent },
  { path: 'classification', component: TestComponent },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
