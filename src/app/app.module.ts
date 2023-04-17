import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneStepDownComponent } from './one-step-down/one-step-down.component';
import { extend, NgtArgs, NgtCanvas, NgtPush } from 'angular-three';
import { NgtCommonDirective } from 'angular-three/lib/directives/common';
import { TwoStepsDownComponent } from './two-steps-down/two-steps-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppComponent, OneStepDownComponent, TwoStepsDownComponent],
  imports: [BrowserModule, NgtArgs, NgtCanvas, 
     NgtPush, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
