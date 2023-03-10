import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MotorbikeComponent } from './motorbike.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [MotorbikeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MotorbikeComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MotorbikeModule {}
