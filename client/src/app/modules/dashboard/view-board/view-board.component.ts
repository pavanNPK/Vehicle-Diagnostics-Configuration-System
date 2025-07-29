import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {VehicleStore} from "../../vehicles/state/store/vehicle.store";

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  searchVehicleText: string = ''
  searchErrorText: string = ''
  searchFrom: string = ''
  searchTo: string = ''

  constructor(private store: VehicleStore) {
  }

  ngOnInit(): void {
  }

  searchVehicle(event: any, type: string) {
    console.log(type);
    switch (type) {
      case 'vehicleId':
        this.searchVehicleText = event.target.value;
        break;
      case 'errorCode':
        this.searchErrorText = event.target.value;
        break;
      case 'from':
        this.searchFrom = event.target.value;
        break;
      case 'to':
        this.searchTo = event.target.value;
        break;
    }
  }

  filterVehicle() {
    this.store.fetchLogs(this.searchVehicleText, this.searchErrorText, this.searchFrom, this.searchTo);
  }
  clearSearchFilters() {
    this.searchVehicleText = '';
    this.searchErrorText = '';
    this.searchFrom = '';
    this.searchTo = '';
    this.filterVehicle();
  }
}
