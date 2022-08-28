import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private chartDataSource = new BehaviorSubject<any>([]);
  private sensorDataSource = new BehaviorSubject<any>([]);

  currentChartData = this.chartDataSource.asObservable();
  currentSensorData = this.sensorDataSource.asObservable();

  constructor() { }

  changeChartData(newChartData: any){
    this.chartDataSource.next(newChartData)
  }

  changeSensorData(newSensorData: any){
    this.sensorDataSource.next(newSensorData)
  }
}
