import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp:any;
  EmployeeId! : string;
  EmployeeUsername! : string;
  EmployeeTask! : string;
  TaskDate! : string;

  ngOnInit(): void {
    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeUsername = this.emp.EmployeeUsername;
    this.EmployeeTask = this.emp.EmployeeTask;
    this.TaskDate = this.emp.TaskDate;

  }

  addEmployee(){
    var val = 
    {
      EmployeeId:this.EmployeeId,
      EmployeeUsername: this.EmployeeUsername,
      EmployeeTask : this.EmployeeTask,
      TaskDate : this.TaskDate

    }
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateEmployee(){
    var val = 
    {
      EmployeeId:this.EmployeeId,
      EmployeeUsername: this.EmployeeUsername,
      EmployeeTask : this.EmployeeTask,
      TaskDate : this.TaskDate

    }
    this.service.updateEmployee(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  


}
