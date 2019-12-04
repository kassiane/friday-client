import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.scss']
})
export class MakesComponent implements OnInit, OnDestroy {
  @Output() selectedMake = new EventEmitter<string>();

  loading: boolean;
  expanded: boolean;
  makes: Array<string>;
  selected: string;
  isSelected: boolean;
  makesSubscription: Subscription;
  errorState: boolean;
  errorMessage: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadMakes();
  }

  loadMakes() {
    this.expanded = true;
    this.isSelected = false;
    this.selected = '';
    this.loading = true;
    this.errorState = false;
    this.errorMessage = null;

    this.makesSubscription = this.apiService.apiMakesGet().subscribe(response => {
      this.loading = false;
      this.makes = response.sort();
    }, error => {
      this.loading = false;
      this.errorState = true;
      this.errorMessage = error.message;
    });
  }

  ngOnDestroy() {
    if (this.makesSubscription) {
      this.makesSubscription.unsubscribe();
    }
  }

  selectMake(selectedMake: string) {
    this.isSelected = true;
    this.selected = selectedMake;
    this.expanded = false;
    this.selectedMake.emit(selectedMake);
  }
}
