import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RemoveComponent} from './remove.component';
import {NgxErrorModule} from '../../../ngx-error/src/lib/ngx-error.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxErrorModule
  ],
  declarations: [
    AppComponent,
    RemoveComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
