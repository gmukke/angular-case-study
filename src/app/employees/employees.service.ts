import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(`${environment.baseURL}/employees`);
  }

  deleteEmployee(record){
    return this.http.delete(`${environment.baseURL}/employees/${record.id}`);
  }

  newEmployee(payload){
    return this.http.post(`${environment.baseURL}/employees`, payload);
  }

  updateEmployee(record, payload){
    return this.http.put(`${environment.baseURL}/employees/${record.id}`, payload);
  }
}
