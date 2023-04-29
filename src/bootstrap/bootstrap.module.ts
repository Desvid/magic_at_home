import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    BootstrapRoutingModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent]
})
export class BootstrapModule { }
