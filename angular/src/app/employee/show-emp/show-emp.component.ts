import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import {SharedService} from 'src/app/shared.service';


import { SocialAuthService } from 'angularx-social-login';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService, private authService : SocialAuthService) { }

  EmployeeList:any=[];
  user! : SocialUser;
  
  ModalTitle!:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any; 
  searchText!:string;
  admin! : Boolean;


  ngOnInit(): void {
    
    if(localStorage.getItem("userType") === "admin"){
      this.admin = true;
    }
    else{
      this.admin = false;
    }

    this.refreshEmpList();
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
    })
  }

  signOut() : any {
    this.authService.signOut();
  }

  addClick(){
    this.emp = {
      EmployeeId : 0,
      EmployeeUsername : "",
      EmployeeTask: "",
      BugId: "",
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
