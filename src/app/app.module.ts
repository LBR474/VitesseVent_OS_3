import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneStepDownComponent } from './one-step-down/one-step-down.component';
import { extend, NgtArgs, NgtCanvas, NgtPush } from 'angular-three';
import { NgtCommonDirective } from 'angular-three/lib/directives/common';
//import { TwoStepsDownComponent } from './two-steps-down/two-steps-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatSlideToggle,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, OneStepDownComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    NgtArgs,
    NgtCanvas,
    NgtPush,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
