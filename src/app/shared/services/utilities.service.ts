import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any', // here any is implemented because we are using DatePipe here and it is causing cyclic dependency and injection issue.
})
export class UtilitiesService {
  // private pageNumber:any = undefined;
  private pageNumber = new BehaviorSubject(1)
  currentData = this.pageNumber.asObservable();
  constructor() {}


  /**
   * @description it is used for set pagination number
   * 
   */
  setPageNumber(data: number){
     this.pageNumber.next(data);
  }
  
}
