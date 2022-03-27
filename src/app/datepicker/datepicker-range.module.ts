import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerRange } from "./NgbdDatepickerRange";

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdDatepickerRange],
  exports: [NgbdDatepickerRange],
  bootstrap: [NgbdDatepickerRange]
})
export class NgbdDatepickerRangeModule {}
