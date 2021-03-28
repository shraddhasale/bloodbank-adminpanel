import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { API_CONFIG } from '@const/api.constant';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() total:number;
  @Input() currentPage:number  = 1;
  @Input() pageSize:number  = API_CONFIG.pageSize;
  @Input() maxSize = 5;
  @Output() pageChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description it emits an event containing Page Number when user changes page number
   *
   * @param {*} event
   * @memberof PaginationComponent
   */
  changePage(event: number){
    this.pageChange.emit(event)
  }
}
