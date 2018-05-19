import { Component, OnInit } from '@angular/core';
import{ TaskService }  from '../../shared-service/task.service';
import{ Task }  from '../../task';
import{ Router }  from '@angular/router';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {
  private tasks:Task[];
  private allTasks: Task[];
  private checkBoxChecked = false;

  constructor(private _taskService:TaskService, private _router:Router) { }

  ngOnInit() {
      this._taskService.getTasks().subscribe((tasks)=>{
        console.log(tasks);
        this.tasks=tasks;
        this.allTasks = this.tasks.slice();
      },(error)=>{
        console.log(error);
      });
  }

  deleteTask(task){
    this._taskService.deleteTask(task.id).subscribe((data)=>{
        this.tasks.splice(this.tasks.indexOf(task),1);
    },(error)=>{
      console.log(error);
    });
  }

  completeTask(task){
    task.status="Completed";
    this._taskService.setter(task);
    this._router.navigate(['/tasks']);
  }

   updateTask(task){
     this._taskService.setter(task);
     this._router.navigate(['/newtask']);

   }

   newTask(){
   let task = new Task();
    this._taskService.setter(task);
     this._router.navigate(['/newtask']);

   }

   showCompletedTasks(checked){
     this.checkBoxChecked = !checked;
     if(this.checkBoxChecked){
       for( var i = 0 ; i < this.tasks.length; i++){
         if(this.tasks[i].status == 'Completed'){
           this.tasks.splice(i,1);
         }
       }
     }else{
       this.tasks = this.allTasks.slice();
     }
     this._router.navigate(['/tasks']);
   }

   statusChange(task){
     //task.status=$('.status').val();
     task.status="In progress";
     this._taskService.setter(task);
     this._router.navigate(['/tasks']);
   }

 }
