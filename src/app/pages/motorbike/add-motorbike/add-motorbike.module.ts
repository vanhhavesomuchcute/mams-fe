import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddMotorbikeComponent } from './add-motorbike.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [AddMotorbikeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddMotorbikeComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule 
  ],
})
export class AddMotorbikeModule {}
