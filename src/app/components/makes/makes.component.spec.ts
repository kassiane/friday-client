import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesComponent } from './makes.component';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { ApiService } from 'src/app/api/services';

const makes: Array<string> = ['AUDI', 'BMW', 'CHEVROLET'];

class ApiServiceMock {
  apiMakesGet() {
    return of(makes);
  }
}

describe('MakesComponent', () => {
  let component: MakesComponent;
  let fixture: ComponentFixture<MakesComponent>;
  const apiService: ApiServiceMock = new ApiServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakesComponent ],
      imports: [ HttpClientModule ],
      providers: [{provide: ApiService, useValue: apiService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load makes, set loading false, errorState false and errorMessage null', () => {
    spyOn(apiService, 'apiMakesGet').and.callThrough();

    component.ngOnInit();
    expect(apiService.apiMakesGet).toHaveBeenCalled();
    expect(component.makes).toEqual(makes);
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeFalsy();
    expect(component.errorMessage).toBeNull();
  });

  it('should not load makes, set loading false, errorState true and errorMessage "error"', () => {
    spyOn(apiService, 'apiMakesGet').and.returnValue(throwError({ message: 'error'} ));

    component.ngOnInit();
    expect(apiService.apiMakesGet).toHaveBeenCalled();
    expect(component.makes).toEqual(makes);
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeTruthy();
    expect(component.errorMessage).toEqual('error');
  });

  it('should emit an event when make is selected', () => {
    spyOn(component.selectedMake, 'emit').and.callThrough();
    component.ngOnInit();
    component.selectMake('make');

    expect(component.selectedMake.emit).toHaveBeenCalledWith('make');
  });
});
