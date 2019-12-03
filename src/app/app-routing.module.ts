import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCarComponent } from './navigation/select-car/select-car.component';

const routes: Routes = [
  { path: '', redirectTo: 'select-car', pathMatch: 'full' },
  { path: 'select-car', component: SelectCarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
