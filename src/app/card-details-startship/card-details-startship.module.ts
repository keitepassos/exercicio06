import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardDetailsStartshipPage } from './card-details-startship.page';

const routes: Routes = [
  {
    path: '',
    component: CardDetailsStartshipPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardDetailsStartshipPage]
})
export class CardDetailsStartshipPageModule {}
