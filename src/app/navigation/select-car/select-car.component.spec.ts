import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCarComponent } from './select-car.component';
import { MakesComponent } from 'src/app/components/makes/makes.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelsComponent } from 'src/app/components/models/models.component';
import { VehiclesComponent } from 'src/app/components/vehicles/vehicles.component';
import { ErrorComponent } from 'src/app/component/error/error.component';

describe('SelectCarComponent', () => {
  let component: SelectCarComponent;
  let fixture: ComponentFixture<SelectCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCarComponent, MakesComponent, ModelsComponent, VehiclesComponent, ErrorComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
