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
  selectedModel: string;

  constructor() { }

  ngOnInit() {
    this.isMakeSelected = false;
    this.isModelSelected = false;
  }

  setMaker(make: string) {
    this.isMakeSelected = true;
    this.selectedMake = make;
    this.isModelSelected = false;
    this.selectedModel = null;
  }

  setModel(model: string) {
    this.isModelSelected = true;
    this.selectedModel = model;
  }
}
