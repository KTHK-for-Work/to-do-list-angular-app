import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Task } from '../../models/task.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
    // this.getTasks().subscribe(data => {
    //   console.log(data);
    // });
  }
  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getTasks(): Observable<any> {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {format: 'json'}
    });
    return this.http.get<any>('assets/tasks.json', options).pipe( catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    }
    else {
      console.error('Server-side error: ', error.status, 'body was: ', error.error);
    }
    return throwError(() => Error('Cannot fetch. Please try again.'));
  }
  private addTask(task: Task) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    return this.http.post<any>('assets/tasks.json', task, options);
  }
}
