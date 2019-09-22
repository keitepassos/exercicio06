import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardDetailsFilmsPage } from './card-details-films.page';

const routes: Routes = [
  {
    path: '',
    component: CardDetailsFilmsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardDetailsFilmsPage]
})
export class CardDetailsFilmsPageModule {}
