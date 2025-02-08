import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { EventService } from '../../services/EventService';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: false,

  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: Task[] = [];
  // tasks = [
  //   new Task('Task 1', false),
  //   new Task('Task 2', true),
  //   new Task('Task 3', false)
  // ];

  constructor(
    private events: EventService, private taskService: TaskService
  ) {
    // this.filter = (task: Task) => !task.done;
    events.listen('removeTask', (task: Task) => {
      // todo remove task from tasks
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    })
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        this.tasks = data;
      // console.log(data);
      },
      (error: any) => {
        alert(error.message);
      }
    )
  };
  // ngOnInit(): void {

  // }

  // ngOnInit(): void {
  //   fetch('src/assets/tasks.json').then(response => {
  //     response.json().then(data => {
  //       console.log(data);
  //     });
  //   });
  // }

  filter: any;

}
