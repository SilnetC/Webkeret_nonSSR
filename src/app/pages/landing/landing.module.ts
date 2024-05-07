import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class LandingModule { }
