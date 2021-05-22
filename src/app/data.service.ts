import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  // http get request
  getData():Observable<any>{
    // console.log("fetching data...");
    return this.hc.get('/getalldata')
  }

  // http post request
  createData(data:any):Observable<any>{
    // console.log("form data sending...",data);
    return this.hc.post('/create',data);
  }
}
