import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircleComponent } from './circle/circle.component';


const routes: Routes = [
  { path: 'circles', component: CircleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
