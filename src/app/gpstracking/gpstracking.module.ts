import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GPSTrackingPage } from './gpstracking.page';

const routes: Routes = [
  {
    path: '',
    component: GPSTrackingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GPSTrackingPage]
})
export class GPSTrackingPageModule {}
