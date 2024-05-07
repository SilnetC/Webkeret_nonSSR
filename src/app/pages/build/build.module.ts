import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildRoutingModule } from './build-routing.module';
import { BuildComponent } from './build.component';
import { FormsModule } from '@angular/forms';
import { FormatSaveDatePipe } from '../../common/pipes/format-save-date.pipe';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    BuildComponent,
    FormatSaveDatePipe
  ],
  imports: [
    CommonModule,
    BuildRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ]
})
export class BuildModule { }
