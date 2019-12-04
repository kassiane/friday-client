import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/api/services';
import { of, throwError } from 'rxjs';

const vehicles = [
  { make: 'FORD', model: 'Fiesta', enginePowerPS: 60, enginePowerKW: 44, fuelType: 'Benzin', bodyType: 'Limousine', engineCapacity: 1299 },
  { make: 'FORD', model: 'Fiesta', enginePowerPS: 68, enginePowerKW: 50, fuelType: 'Diesel', bodyType: 'Limousine', engineCapacity: 1399 },
  { make: 'FORD', model: 'Fiesta', enginePowerPS: 75, enginePowerKW: 55, fuelType: 'Benzin', bodyType: 'Limousine', engineCapacity: 1242 }];

class ApiServiceMock {
  apiVehiclesGet() {
    return of(vehicles);
  }
}

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  const apiService: ApiServiceMock = new ApiServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesComponent],
      imports: [HttpClientModule],
      providers: [{ provide: ApiService, useValue: apiService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load vehicles according to make and model selected, set loading false, errorState false and errorMessage null', () => {
    spyOn(apiService, 'apiVehiclesGet').and.callThrough();

    component.make = 'FORD';
    component.model = 'Fiesta';
    component.ngOnInit();
    expect(apiService.apiVehiclesGet).toHaveBeenCalled();
    expect(component.vehicles).toEqual(vehicles);
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeFalsy();
    expect(component.errorMessage).toBeNull();
  });

  it('should not load vehicles, set loading false, errorState true and errorMessage "error"', () => {
    spyOn(apiService, 'apiVehiclesGet').and.returnValue(throwError({ message: 'error'} ));

    component.ngOnInit();
    expect(apiService.apiVehiclesGet).toHaveBeenCalled();
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeTruthy();
    expect(component.errorMessage).toEqual('error');
  });
});
