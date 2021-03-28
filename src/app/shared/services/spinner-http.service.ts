import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerI } from '@shared/models/spinner';
@Injectable({
  providedIn: 'root'
})
export class SpinnerHttpService {

  subject = new Subject<SpinnerI>();

  constructor() { }
  /**
     * @description It is used to get the observable which sends the spinner object
     *
     * @returns
     * @memberof SpinnerHttpService
  */
  getObservable(){
    return this.subject.asObservable()
  }

  /**
   * @description it shows the spinner
   * 
   * @param {string} message the message to be shown while spinner is visible 
   * @memberof SpinnerHttpService
   */
  show(message?: string){
    this.subject.next({message: message, isVisible: true})
  }

  /**
   * @description it hides the spinner
   * 
   * @memberof SpinnerService
   */
  hide(message?: string){
    this.subject.next({isVisible:false})
  }
  
}
