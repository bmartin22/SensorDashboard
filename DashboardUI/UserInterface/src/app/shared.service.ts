import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }
  
  //---------USER SERVICES---------//
  //return list of users
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/user/');
  }

  //update user 
  updateUserList(val:any){
    return this.http.put(this.APIUrl + '/user/', val);
  }
  
  //---------SENSOR SERVICES---------//
  //return list of sensors
  getSensorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/sensor/');
  }

  //update sensor
  updateSensorList(val:any){
    return this.http.put(this.APIUrl + '/sensor/', val)
  }

  //delete sensor
  deleteSensorList(val:any){
    return this.http.delete(this.APIUrl + '/sensor/'+val);
  }

  //add a new sensor
  addSensor(val:any){
    return this.http.post(this.APIUrl + '/sensor/', val);
  }

  //---------READING SERVICES---------//
  //return list of readings
  getReadingList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/reading/');
  }

  //delete reading
  deleteReading(val:any){
    return this.http.delete(this.APIUrl + '/delete/'+val);
  }

  //
}
