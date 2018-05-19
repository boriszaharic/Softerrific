import { Component, OnInit } from '@angular/core';
import{ Task }  from '../../task';
import{ Router }  from '@angular/router';
import{ TaskService }  from '../../shared-service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  private task:Task;
  constructor(private _taskService:TaskService,private _rotuer:Router) { }

  ngOnInit() {

    this.task=this._taskService.getter();
    if(this.task.status==null){
      this.task.status="Panding";
    }
  }

  processForm(){
    if(this.task.id==undefined){
       this._taskService.createTask(this.task).subscribe((task)=>{
         console.log(task);
         this._rotuer.navigate(['/tasks']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._taskService.updateTask(this.task).subscribe((task)=>{
         console.log(task);
         this._rotuer.navigate(['/tasks']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
