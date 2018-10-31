import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { Routes, RouterModule } from '@angular/router';
import { CircleInfoComponent } from './circle-info/circle-info.component';
import { Page2Component } from './page2/page2.component';
import { ViewTowerComponent } from './component/view-tower/view-tower.component';

const routes: Routes = [
  { path: 'circles', component: CircleComponent },
  { path: 'circle-info/:circle', component: CircleInfoComponent },
  { path: 'csa-info/:id', component: CircleInfoComponent },
  { path: 'page2', component: Page2Component },
  { path: 'viewTower/:id', component:ViewTowerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    CircleInfoComponent,
    Page2Component,
    ViewTowerComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
