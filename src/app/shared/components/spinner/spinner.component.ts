import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isVisible: boolean = false;
  private defaultMessage: string = "Loading...";
  private userDefinedMessage: string = "";

  constructor(private _spinner: SpinnerService) {
    _spinner.getObservable().subscribe(value=>{
      this.isVisible = value.isVisible;
      this.userDefinedMessage = value.message;
      //TODO: show random message from a list when user does not provide any message
    })    
   }

  ngOnInit() {
  }

}
