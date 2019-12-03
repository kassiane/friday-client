import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCarComponent } from './navigation/select-car/select-car.component';

const routes: Routes = [{ path: '', component: SelectCarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
