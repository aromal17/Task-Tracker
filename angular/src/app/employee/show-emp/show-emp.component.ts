import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  
  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any; 

  ngOnInit(): void {
    this.refreshEmpList();
  }

 

  addClick(){
    this.emp = {
      EmployeeId : 0,
      EmployeeUsername : "",
      EmployeeTask: "",
      TaskDate: ""
    }

    this.ModalTitle = "Add a new Task";
    this.ActivateAddEditEmpComp = true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList(); 
  }

  editClick(item: any){
    this.emp = item;
    this.ModalTitle = "Edit Task Details";
    this.ActivateAddEditEmpComp = true;
  }
  
  deleteClick(item: { EmployeeId: any; }){
    if(confirm("Are you sure ?")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data =>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  refreshEmpList(){ 
    this.service.getEmpList().subscribe(data => {
      this.EmployeeList = data;
    });
  }
}
