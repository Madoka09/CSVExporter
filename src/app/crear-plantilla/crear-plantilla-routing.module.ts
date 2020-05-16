import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPlantillaPage } from './crear-plantilla.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPlantillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPlantillaPageRoutingModule {}
