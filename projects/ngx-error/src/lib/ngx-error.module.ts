import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './component/error-page.component';
import {CommonModule} from '@angular/common';
import {ErrorPageDirective} from './directive/error-page.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorPageComponent,
    ErrorPageDirective
  ],
  exports: [
    ErrorPageComponent,
    ErrorPageDirective
  ]
})
export class NgxErrorModule {
}
