import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {VehicleService} from "../../../services/vehicle.service";
import {Router} from "@angular/router";
import {NbButtonModule, NbDatepickerModule, NbIconModule, NbInputModule, NbToastrService} from "@nebular/theme";
import {NgClass, NgIf} from "@angular/common";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NbInputModule,
    NgClass,
    NbDatepickerModule,
    NbButtonModule,
    NbIconModule,
    NgIf
  ],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent implements OnInit {
  vehicleForm?: FormGroup | any;
  loading: boolean = false
  submitted: boolean = false;

  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder,
              private vehicleService: VehicleService,
              private location: Location,
              private router: Router,
              private toastService: NbToastrService,) {
    this.maxDate = new Date(Date.now());
    this.minDate = new Date(Date.now() - 86400000);
  }

  get f() {
    return this.vehicleForm.controls;
  }

  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      vehicleId: ['', Validators.required],
      errorCode: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    })
    this.loading = true;
  }

  addVehicle() {
    this.submitted = true;
    if (this.vehicleForm.invalid) {
      return;
    }

    this.vehicleService.addVehicleData(this.vehicleForm.value).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.submitted = false;
        this.toastService.success('Successfully added new vehicle', 'Vehicle', {duration: 2000});
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        this.loading = false;

        const errorMessage =
          error?.error?.message || 'Failed to add new vehicle';

        this.toastService.danger(errorMessage, 'Vehicle', {duration: 3000});
        console.error(error);
      }
    });
  }


  goBack() {
    this.location.back();
  }

  setMinDate(event: any) {
    console.log(event);
    this.vehicleForm.get('to').setValue('');
    this.minDate = event;
  }

}
