import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SummaryEvent } from '../../models/summary-event/summary-event';


@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private summaryEvents: BehaviorSubject<SummaryEvent<any>> = new BehaviorSubject(undefined);
  private summaryEvents$: Observable<SummaryEvent<any>>;

  constructor() {
    this.summaryEvents$ = this.summaryEvents.asObservable();
  }

  private dispatch(evt: SummaryEvent<any>) {
    console.log(`Dispatching EVT ::: `, evt);
    this.summaryEvents.next(evt);
  }

  summaryDispatch<T>(summaryId: string, target: T) {
    this.dispatch(new SummaryEvent(summaryId, 'summary', target));
  }

  listDispatch<T>(summaryId: string, target: T) {
    this.dispatch(new SummaryEvent(summaryId, 'list', target));
  }

  observeSummary(summaryId: string, source: 'summary' | 'list' | 'all' = 'all') {
    return this.summaryEvents$.pipe(
      filter(evt => evt.summaryId === summaryId),
      filter(evt => source === 'all' || source === evt.source),
      map(evt => evt.target),
    );
  }

}
