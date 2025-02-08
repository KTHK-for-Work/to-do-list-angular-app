import { EventService } from '../../../services/EventService';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'task-list-item',
  standalone: false,

  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  // @Input() taskName! : string;
  // @Input() taskDone!: boolean;
  @Input() task!: Task;
  @Output() taskDoneChange  = new EventEmitter<boolean>();


  get cssClasses(): any {
    // return this.taskDone ? 'strikeout text-muted' : '';
    // return this.taskDone ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.task.done};
  }
  toggleTaskDone(): void {
    this.task.done = !this.task.done;
    // this.taskDoneChange.emit(this.taskDone);

  }
  constructor(
    private events: EventService
  ) {
  }
  removeTask() {
    this.events.emit('removeTask', this.task);
  }
  // removeTask(): void {
  //   // this.tasks = this.tasks.filter(task => task !== taskToRemove);
  //   EventSource.emit('removeTask', this.taskName);
  // }
}
