import { Component, OnInit, Input, EventEmitter, OnChanges, Output } from '@angular/core';
import { ApiService } from 'src/app/api/services';
import { Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit, OnChanges {
  @Input() make: string;
  @Output() selectedModel = new EventEmitter<string>();

  loading: boolean;
  expanded: boolean;
  models: Array<string>;
  selected: string;
  isSelected: boolean;
  errorState: boolean;
  errorMessage: string;
  modelsSubscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadModels();
  }

  loadModels() {
    this.loading = true;
    this.expanded = true;
    this.isSelected = false;
    this.selected = '';
    this.errorState = false;
    this.errorMessage = null;

    this.modelsSubscription = this.apiService.apiModelsGet({ make: this.make }).pipe(retry(3)).subscribe(response => {
      this.loading = false;
      this.models = response.sort();
    }, error => {
      this.loading = false;
      this.errorState = true;
      this.errorMessage = error.message;
    });
  }

  ngOnChanges() {
    this.loadModels();
  }

  selectModel(selectedModel: string) {
    this.isSelected = true;
    this.selected = selectedModel;
    this.expanded = false;
    this.selectedModel.emit(selectedModel);
  }
}
