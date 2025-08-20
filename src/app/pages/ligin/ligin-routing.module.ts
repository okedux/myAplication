import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiginPage } from './ligin.page';

const routes: Routes = [
  {
    path: '',
    component: LiginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiginPageRoutingModule {}
