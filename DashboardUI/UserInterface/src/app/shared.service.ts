import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

// common shared service implementation adapted from https://github.com/ArtOfEngineer/PythonDjangoAngular10/blob/master/ui/angular10/src/app/shared.service.ts

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
  getSensorList(val:any){
    return this.http.get<any[]>(this.APIUrl + '/sensor/'+ val);
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
  getReadingList(val:any){
    return this.http.get<any[]>(this.APIUrl + '/reading/', val);
  }

  //delete reading
  deleteReading(val:any){
    return this.http.delete(this.APIUrl + '/delete/'+val);
  }

   //---------READING SERVICES---------//
   //return list of alert profiles
   getAlertProfileList(val:any){
    return this.http.get<any[]>(this.APIUrl + '/alert_profile/', val);
   }

   //add alert profile
   addAlertProfile(val:any){
    return this.http.post(this.APIUrl + '/alert_profile/', val);
   }

   //update alert profile
   updateAlertProfile(val:any){
    return this.http.put(this.APIUrl + '/alert_profile/', val);
   }
   
   //delete alert profile
   deleteAlertProfile(val:any){
    return this.http.delete(this.APIUrl + '/alert_profile/'+val);
   }

}
