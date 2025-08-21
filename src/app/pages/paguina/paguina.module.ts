import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaguinaPageRoutingModule } from './paguina-routing.module';

import { PaguinaPage } from './paguina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaguinaPageRoutingModule
  ],
  declarations: [PaguinaPage]
})
export class PaguinaPageModule {}
