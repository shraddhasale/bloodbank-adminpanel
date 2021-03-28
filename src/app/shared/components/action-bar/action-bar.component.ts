import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import get from 'lodash.get';

import { StatusEnum } from '@const/api.constant';


interface StatusListI {
  id: StatusEnum ;
  name: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  // object which we need to bind the controls with
  @Input() item: object;

  @Input() showStatus = true; // Show/Hide Status Dropdown
  /**
   * Show/Hide All Buttons ( Clone, Edit, Delete)
   * Note: If showButtons is false, it will hide all buttons irrespective of their state value
   */
  @Input() showButtons: boolean = true;
  @Input() showEdit: boolean = true; // Show/Hide Edit Button
  @Input() showDelete: boolean = true; // Show/Hide Delete Button
  @Input() showClone: boolean = true; // Show/Hide Clone Button
  @Input() showExport: boolean = false; // Show/Hide Export Button
  @Input() showInvoice: boolean = false; // Show/Hide View Invoice Button
  @Input() showParty: boolean = false; // Show/Hide Party Button

  @Input() showPageStatus: boolean = false; // Note: It is used to show the status for page comoponent
  @Input() showWidgetStatus: boolean = false; // Note: It is used to show the status for page comoponent
  @Input() showScheduleStatus; // Note: It is used to show the status for page comoponent
  @Input() isEditable: boolean = true; // Note: It is used show POPxo page Status for page component
  @Input() showPageCategoryStatus: boolean = false; //Note: It is used tp show Popxo status for pageCategory component
  /**
   * Note:
   * url to redirect to on click of edit button
   * default: edit/:id
   * eg: edit/5da6ab15c2fc2292f530361d
   */
  @Input() editPageUrl?: string | string[];
  @Input() itemName?: string;

  @Output() onItemUpdate: EventEmitter<object> = new EventEmitter<object>();
  @Output() onStatusChange: EventEmitter<StatusEnum> = new EventEmitter<
    StatusEnum
  >();
  
  

  statusList: StatusListI[] = [
    { id: StatusEnum.ACTIVE, name: 'Active' },
    { id: StatusEnum.INACTIVE, name: 'Inactive' }
  ];

  readonly StatusEnum = StatusEnum;

  constructor() {}

  ngOnInit() {
    
    

    // Note: Set default edit page url if not provided
    if (!this.editPageUrl && this.item) {
      this.editPageUrl = `edit/${this.item['id']}`;
    }
    //Note: This codition used to handle popxo pagecategory status 
    if (this.showPageCategoryStatus) {
      this.statusList = [
        { id: StatusEnum.ACTIVE, name: 'Active', disabled: false },
        { id: StatusEnum.INACTIVE, name: 'Inactive', disabled: false },
      ];
      
    }
  }

  /**
   * @description trigger event to update item status
   * this method will emit 2 events
   * 1. Emit new statusId only
   * 2. Emit item with updated statusId
   *
   * @param {object} item
   * @param {StatusEnum} statusId
   *
   * @memberof ActionBarComponent
   */
  async onUpdateStatus(item: { [key: string]: any }, statusID: StatusEnum) {
    let displayLabel;
    if (item.cms && item.cms[0].content.name) {
      displayLabel = 'cms[0].content.name';
    } else if (item.firstName) {
      displayLabel = 'firstName';
    } else {
      displayLabel = 'label';
    }
    
    // NOTE: Updating status
    let updatedItem = { ...item, statusID: statusID };
    // Emit new statusId only
    this.onStatusChange.emit(statusID);

    // Emit item with updated statusId
    this.onItemUpdate.emit(updatedItem);
  }

  

  


}
