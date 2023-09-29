import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BadriPageRoutingModule } from './badri-routing.module';

import { BadriPage } from './badri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePipe,
    BadriPageRoutingModule
  ],
  declarations: []
})
export class BadriPageModule {}
