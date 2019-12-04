import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsComponent } from './models.component';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/api/services';
import { ErrorComponent } from 'src/app/component/error/error.component';

const modelsBMW: Array<string> = ['X1', 'X3', 'X4'];
const modelsFord: Array<string> = ['ECOSPORT', 'Explorer', 'Fiesta'];

class ApiServiceMock {
  apiModelsGet(params: { make: string }) {
    if (params.make === 'BMW') {
      return of(modelsBMW);
    }

    if (params.make === 'FORD') {
      return of(modelsFord);
    }

    return of([]);
  }
}

describe('ModelsComponent', () => {
  let component: ModelsComponent;
  let fixture: ComponentFixture<ModelsComponent>;
  const apiService: ApiServiceMock = new ApiServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsComponent, ErrorComponent ],
      imports: [ HttpClientModule ],
      providers: [{provide: ApiService, useValue: apiService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load BMW models, set loading false, errorState false and errorMessage null', () => {
    spyOn(apiService, 'apiModelsGet').and.callThrough();

    component.make = 'BMW';
    component.ngOnInit();
    expect(apiService.apiModelsGet).toHaveBeenCalled();
    expect(component.models).toEqual(modelsBMW);
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeFalsy();
    expect(component.errorMessage).toBeNull();
  });

  it('should load FORD models according to make, set loading false, errorState false and errorMessage null', () => {
    spyOn(apiService, 'apiModelsGet').and.callThrough();

    component.make = 'FORD';
    component.ngOnInit();
    expect(apiService.apiModelsGet).toHaveBeenCalled();
    expect(component.models).toEqual(modelsFord);
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeFalsy();
    expect(component.errorMessage).toBeNull();
  });

  it('should not load models, set loading false, errorState true and errorMessage "error"', () => {
    spyOn(apiService, 'apiModelsGet').and.returnValue(throwError({ message: 'error'} ));

    component.ngOnInit();
    expect(apiService.apiModelsGet).toHaveBeenCalled();
    expect(component.loading).toBeFalsy();
    expect(component.errorState).toBeTruthy();
    expect(component.errorMessage).toEqual('error');
  });

  it('should emit an event when model is selected', () => {
    spyOn(component.selectedModel, 'emit').and.callThrough();
    component.ngOnInit();
    component.selectModel('model');

    expect(component.selectedModel.emit).toHaveBeenCalledWith('model');
  });
});
