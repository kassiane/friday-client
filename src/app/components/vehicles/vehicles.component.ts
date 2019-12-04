import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api/services';
import { Subscription } from 'rxjs';
import { Vehicle } from 'src/app/api/models';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy, OnChanges {
  @Input() make: string;
  @Input() model: string;

  loading: boolean;
  expanded: boolean;
  errorState: boolean;
  errorMessage: string;
  vehicleSubscription: Subscription;
  vehicles: Array<Vehicle>;
  isSelected: boolean;
  selected: Vehicle;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadVehicle();
  }

  ngOnChanges() {
    this.loadVehicle();
  }

  ngOnDestroy() {
    if (this.vehicleSubscription) {
      this.vehicleSubscription.unsubscribe();
    }
  }

  loadVehicle() {
    this.loading = true;
    this.expanded = true;
    this.selected = null;
    this.isSelected = false;
    this.errorState = false;
    this.errorMessage = null;

    this.vehicleSubscription = this.apiService.apiVehiclesGet( {make: this.make, model: this.model}).pipe(retry(3)).subscribe(response => {
      this.loading = false;
      this.vehicles = response;
    }, error => {
      this.loading = false;
      this.errorState = true;
      this.errorMessage = error.message;
    });
  }

  selectVehicle(selectedVehicle: Vehicle) {
    this.isSelected = true;
    this.selected = selectedVehicle;
  }
}
