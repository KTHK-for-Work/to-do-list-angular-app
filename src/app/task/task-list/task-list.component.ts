import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];


}
