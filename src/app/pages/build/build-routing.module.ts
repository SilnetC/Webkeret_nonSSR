import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './build.component';

const routes: Routes = [
  { path: '', component: BuildComponent },
  { path: 'successful', loadChildren: () => import('./successful/successful.module').then(m => m.SuccessfulModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildRoutingModule { }
