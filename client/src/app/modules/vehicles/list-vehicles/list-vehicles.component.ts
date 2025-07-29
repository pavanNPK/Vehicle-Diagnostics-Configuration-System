import {Component, effect, Input, OnInit} from '@angular/core';
import {NoDataComponent} from "../../core/components/no-data/no-data.component";
import {VehicleStore} from "../state/store/vehicle.store";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-list-vehicles',
  standalone: true,
  imports: [
    NoDataComponent,
    DatePipe
  ],
  templateUrl: './list-vehicles.component.html',
  styleUrl: './list-vehicles.component.scss'
})
export class ListVehiclesComponent implements OnInit {
  vehicleId: string = '';
  errorCode: string = '';
  from: string = '';
  to: string = '';
  vehiclesStoreData: any;

  constructor(public store: VehicleStore) {
    effect(() => {
      this.vehiclesStoreData = this.store.logs();
      console.log('Vehicles updated:', this.vehiclesStoreData);
    });
  }

  ngOnInit(): void {
    // Pass null for empty values to get all records by default
    this.store.fetchLogs(
      this.vehicleId || null,
      this.errorCode || null,
      this.from || null,
      this.to || null
    );
  }

  // Method to search with current form values
  onSearch(): void {
    this.store.fetchLogs(
      this.vehicleId || null,
      this.errorCode || null,
      this.from || null,
      this.to || null
    );
  }

  get isLoading() {
    return this.store.loading();
  }

  get hasVehicles() {
    return this.vehiclesStoreData && this.vehiclesStoreData.data?.length > 0;
  }
}
