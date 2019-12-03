import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCarComponent } from './select-car.component';
import { MakesComponent } from 'src/app/components/makes/makes.component';
import { HttpClientModule } from '@angular/common/http';

describe('SelectCarComponent', () => {
  let component: SelectCarComponent;
  let fixture: ComponentFixture<SelectCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCarComponent, MakesComponent],
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
