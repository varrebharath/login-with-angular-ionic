import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadriPage } from './badri.page';

const routes: Routes = [
  {
    path: '',
    component: BadriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadriPageRoutingModule {}
