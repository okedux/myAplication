import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiginPageRoutingModule } from './ligin-routing.module';

import { LiginPage } from './ligin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiginPageRoutingModule
  ],
  declarations: [LiginPage]
})
export class LiginPageModule {}
