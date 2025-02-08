import { Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import { Task } from '../../../models/task.model';

const filters = [
  (task: Task) => true, // all tasks
  (task: Task) => !task.done, // active tasks
  (task: Task) => task.done // completed
]


@Component({
  selector: 'task-filter',
  standalone: false,

  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter: string = '0';

  ngOnInit(): void {
    this.updateFilter(0);
  }
  updateFilter(value: any) {
    this.filter = filters[Number(value)];
    this.filterChange.emit(this.filter);
  }

}
