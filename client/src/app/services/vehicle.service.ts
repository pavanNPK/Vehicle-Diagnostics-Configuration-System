import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseWithError} from "../model/commonDTO";
import {VehicleDTO} from "../model/vehicleDTO";
import {DOMAIN_URL, LOGS} from "../constants/API-DTO";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private  http: HttpClient) { }

  getVehiclesData( vehicleId:any, errorCode: any, from: any, to: any ): Observable<ResponseWithError<VehicleDTO[]>>{
    let params = new HttpParams();
    if (vehicleId) params = params.set('vehicle', vehicleId);
    if (errorCode) params = params.set('code', errorCode);
    if (from) params = params.set('from', new Date(from).toISOString());
    if (to) params = params.set('to', new Date(to).toISOString());

    console.log(params, '....params')
    return this.http.get<ResponseWithError<VehicleDTO[]>>(`${DOMAIN_URL}${LOGS}`, { params });
  }


  addVehicleData(data:any): Observable<ResponseWithError<VehicleDTO>>{
    return this.http.post<ResponseWithError<VehicleDTO>>(`${DOMAIN_URL}${LOGS}`, data).pipe(res => res)
  }
}
