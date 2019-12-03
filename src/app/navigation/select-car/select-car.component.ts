import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss']
})
export class SelectCarComponent implements OnInit {
  isMakeSelected: boolean;
  selectedMake: string;
  isModelSelected: boolean;

  constructor() { }

  ngOnInit() {
    this.isMakeSelected = false;
    this.isModelSelected = false;
  }

  loadModels(make: string) {
    this.isMakeSelected = true;
    this.selectedMake = make;
    console.log('load models now');
  }
}
