import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'city', 'zipcode', 'actions'];
  dataSource: any[];
  isEmpForm = false;
  empForm: FormGroup;
  editIndicator;
  selectedRecord;

  constructor(private fb: FormBuilder, private empService: EmployeesService) { }

  ngOnInit() {
    this.empForm=this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      address: this.fb.group({
        city:[null, Validators.required],
        zipcode:[null, Validators.required]
      })
    })
    this.getDataSource();
  }

  getDataSource(){
    const sub = this.empService.getEmployees().subscribe((res:any) => {
      this.dataSource = res;
      sub.unsubscribe();
    });
  }

  addEmployee(){
    this.isEmpForm=true;
    this.editIndicator="Create";
    this.empForm.setValue({
      name: null,
      email: null,
      phone: null,
      address: {
        city: null,
        zipcode: null
      }
    });
  }

  deleteEmployee(record){
    const sub = this.empService.deleteEmployee(record).subscribe((res:any) => {
      this.getDataSource();
      sub.unsubscribe();
    });
  }

  saveEmployee(){
    if (this.empForm.status === "INVALID") {
      return;
    }

    if (this.editIndicator==='Update'){
      const sub = this.empService.updateEmployee(this.selectedRecord, {
        ...this.selectedRecord, ...this.empForm.value
      }).subscribe((res:any) => {
        this.getDataSource();
        this.isEmpForm=false;
        sub.unsubscribe();
      });
    } else {
      const id = this.dataSource.length === 0
        ? 1
        : Math.max(...this.dataSource.map(user => user.id));

      const sub = this.empService.newEmployee({
        ...this.empForm.value,
        id: id+1
      }).subscribe((res:any) => {
        this.getDataSource();
        this.isEmpForm=false;
        sub.unsubscribe();
      });
    }
  }

  updateEmployee(record){
    this.isEmpForm=true;
    this.editIndicator="Update";
    this.selectedRecord=record;
    this.empForm.patchValue(record);
  }

  cancelUpdate(){
    this.isEmpForm=false;
  }
}
