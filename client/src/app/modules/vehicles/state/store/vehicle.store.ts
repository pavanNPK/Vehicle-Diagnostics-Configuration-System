import { computed, signal } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { VehicleService } from '../../../../services/vehicle.service';
@Injectable({ providedIn: 'root' })
export class VehicleStore {
  private vehicleService = inject(VehicleService);

  // Signals
  private _logs = signal<any[]>([]);
  private _loading = signal(false);

  // Computed signals (readonly)
  logs = computed(() => this._logs());
  loading = computed(() => this._loading());

  // Fetch logs
  fetchLogs(vehicle: any, code: any, from: any, to: any) {
    console.log('Search parameters:', { vehicle, code, from, to });
    let fromDate = from ? new Date(from).toISOString() : null;
    let toDate = to ? new Date(to).toISOString() : null;
    this._loading.set(true);

    this.vehicleService.getVehiclesData(vehicle, code, fromDate, toDate).subscribe({
      next: (data: any) => {
        console.log('API Response:', data);
        this._logs.set(data);
        this._loading.set(false);
      },
      error: (err: any) => {
        console.error('API Error:', err);
        this._loading.set(false);
      }
    });
  }
}
