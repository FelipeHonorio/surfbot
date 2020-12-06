import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CorePage } from './page/core.page';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CorePage
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  bootstrap: [CorePage]
})
export class CoreModule { }
