import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuacionPageRoutingModule } from './continuacion-routing.module';

import { ContinuacionPage } from './continuacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuacionPageRoutingModule
  ],
  declarations: [ContinuacionPage]
})
export class ContinuacionPageModule {}
