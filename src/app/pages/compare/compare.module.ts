import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareComponent } from './compare.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    CompareComponent
  ],
  imports: [
    CommonModule,
    CompareRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule
  ]
})
export class CompareModule { }
