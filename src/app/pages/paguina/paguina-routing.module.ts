import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaguinaPage } from './paguina.page';

const routes: Routes = [
  {
    path: '',
    component: PaguinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaguinaPageRoutingModule {}
