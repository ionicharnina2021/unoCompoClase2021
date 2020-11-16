import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuacionPage } from './continuacion.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuacionPageRoutingModule {}
