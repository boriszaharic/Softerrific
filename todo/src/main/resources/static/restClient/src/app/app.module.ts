import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListtaskComponent } from './components/listtask/listtask.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskService } from './shared-service/task.service';
import { OrderbyPipe } from './directives/orderby.pipe';


const appRoutes:Routes=[
    {path:'newtask', component:TaskFormComponent},
    {path:'tasks', component:ListtaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListtaskComponent,
    TaskFormComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
