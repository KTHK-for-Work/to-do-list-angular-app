import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskComponent } from './task.component';
import { Task } from '../../models/task.model';
@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskFormComponent,
    TaskFilterComponent,
    TaskListItemComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    TaskComponent
  ],
})
export class TaskModule { }
