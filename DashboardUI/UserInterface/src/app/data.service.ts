import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private chartDataSource = new BehaviorSubject<any>([]);
  currentChartData = this.chartDataSource.asObservable();

  constructor() { }

  changeChartData(newChartData: any){
    this.chartDataSource.next(newChartData)
  }
}
