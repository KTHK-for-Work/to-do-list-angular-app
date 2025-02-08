import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable()
export class EventService {
  private subject = new Subject<any>();

  emit(eventName: string, payload: any){
    this.subject.next({eventName, payload});

  }
  listen(eventName: string, callback: (event:any) => void): void {
    this.subject.asObservable().subscribe(
      (nextObj : any) => {
        if(eventName === nextObj.eventName){
          callback(nextObj.payload);
        }
      }
    );
  }
  // publish(eventName: string, data: any) {
  //   this.subject.next({ eventName, data });
  // }

  // on(eventName: string): Observable<any> {
  //   return this.subject.asObservable().pipe(
  //     filter((event) => event.eventName === eventName),
  //     map((event) => event.data)
  //   );
  // }
}

// export const events = new EventService();
