import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuButtonComponent } from './eu-button/eu-button.component';
import { EuInputComponent } from './eu-input/eu-input.component';


@NgModule({
  declarations: [EuButtonComponent, EuInputComponent],
  imports: [
    CommonModule
  ],
  exports: [EuButtonComponent, EuInputComponent]
})
export class EuElementsModule { }
