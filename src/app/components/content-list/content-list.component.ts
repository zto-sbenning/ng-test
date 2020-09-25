import { Component, OnInit, Input, OnChanges, TemplateRef } from '@angular/core';
import { SummaryService } from '../../services/summary/summary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit, OnChanges {

  @Input() summaryId: string;
  @Input() containerClasses: string[] = [];
  @Input() itemClasses: string[] = [];
  @Input() items: any[] = [];
  @Input() itemTemplateRef: TemplateRef<any>;

  containerClassesStr: string = '';
  itemClassesStr: string = '';

  events$: Observable<any>;

  _dispatch = (target: any) => this.dispatch(target);

  constructor(
    public summary: SummaryService
  ) { }

  ngOnInit() {
    this.events$ = this.summary.observeSummary(this.summaryId, 'summary');
  }

  ngOnChanges() {
    this.containerClassesStr = this.containerClasses.join(' ');
    this.itemClassesStr = this.itemClasses.join(' ');
  }

  dispatch(target: any) {
    this.summary.listDispatch(this.summaryId, target);
  }

}
