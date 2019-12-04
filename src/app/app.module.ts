import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakesComponent } from './components/makes/makes.component';
import { ModelsComponent } from './components/models/models.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SelectCarComponent } from './navigation/select-car/select-car.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { ErrorComponent } from './component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MakesComponent,
    ModelsComponent,
    VehiclesComponent,
    SelectCarComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'http://localhost:8080' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
