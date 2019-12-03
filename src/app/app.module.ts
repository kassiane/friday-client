import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakesComponent } from './components/makes/makes.component';
import { ModelsComponent } from './components/models/models.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    MakesComponent,
    ModelsComponent,
    VehiclesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
