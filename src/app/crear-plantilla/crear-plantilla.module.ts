import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { CrearPlantillaPageRoutingModule } from './crear-plantilla-routing.module';

import { CrearPlantillaPage } from './crear-plantilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPlantillaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearPlantillaPage]
})
export class CrearPlantillaPageModule {}
