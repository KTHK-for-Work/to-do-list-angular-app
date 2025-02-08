import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'add-task-form',
  standalone: false,

  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  newTaskName: string = '';
  /**
   * Adds a new task to the list of tasks.
   *
   * This method creates a new instance of the `Task` class using the current value of `newTaskName`,
   * adds it to the `tasks` array, and then resets `newTaskName` to an empty string.
   */
  @Output() addTask = new EventEmitter<Task>();
  addNewTask(): void {
    // this.tasks.push(new Task(this.newTaskName));
    this.addTask.emit(new Task(this.newTaskName));
    this.newTaskName = '';
  }
}
