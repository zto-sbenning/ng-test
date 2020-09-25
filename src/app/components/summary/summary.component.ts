import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SummaryService } from '../../services/summary/summary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges {
  
  @Input() summaryId: string;
  @Input() containerClasses: string[] = [];
  @Input() itemClasses: string[] = [];
  @Input() items: string[] = [];

  containerClassesStr: string = '';
  itemClassesStr: string = '';
  
  events$: Observable<any>;

  constructor(
    public summary: SummaryService
  ) { }

  ngOnInit() {
    this.events$ = this.summary.observeSummary(this.summaryId, 'list');
  }

  ngOnChanges() {
    this.containerClassesStr = this.containerClasses.join(' ');
    this.itemClassesStr = this.itemClasses.join(' ');
  }

  dispatch(target: any) {
    this.summary.summaryDispatch(this.summaryId, target);
  }

}
