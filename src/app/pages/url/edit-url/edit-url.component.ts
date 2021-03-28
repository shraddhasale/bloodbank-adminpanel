import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { EndpointI } from '../models/endpoint.model';
import { UrlHttpsService } from '../services/url-https.service'
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
@Component({
  selector: 'app-edit-url',
  templateUrl: './edit-url.component.html',
  styleUrls: ['./edit-url.component.scss']
})
export class EditUrlComponent implements OnInit {

  urlWrapper: EndpointI;
  readonly pageTitle = "Edit URL"
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _spinner: SpinnerService,
    private _urltHttp: UrlHttpsService,
    private _toast: ToastService
   
  ) {}

  ngOnInit() {
    this.fetchEndpointById(this._activatedRoute.snapshot.params.id);
  }
  
  fetchEndpointById(endpointId: string) {
    this._spinner.show('Fetching Url Detail...');
    this.subscriptions.add(
      this._urltHttp.fetchEndpointById(endpointId).subscribe(
        (res) => {
          this.urlWrapper = res;
          this._spinner.hide();
        },
        (err) => {
          this._toast.error(
            err.error.message,
            'Failed to Fetch URL Details'
          );
          this._spinner.hide();
        }
      )
    );
  }

  onUrlSubmit() {
    let urlId = this.urlWrapper.id;
    if(this.urlWrapper.statusID === false){
      this.urlWrapper.statusID = 0
    }else if(this.urlWrapper.statusID === true){
      this.urlWrapper.statusID = 1;
    }
    delete  this.urlWrapper.id;
    delete this.urlWrapper.createdAt;
    delete this.urlWrapper.updatedAt;
    this._spinner.show('Updating URL ...');
    let updatedEndpointWrapper = { ...this.urlWrapper };
    this.subscriptions.add(
      this._urltHttp.updateUrl(updatedEndpointWrapper, urlId).subscribe(
        (res) => {
          this._toast.success(`Url ${updatedEndpointWrapper.name} updated successfully.`);
          this.redirectToEndpointListing();
          this._spinner.hide();
        },
        (err) => {
          this._toast.error(
            err.error.message,
            'URL Update Failed'
          );
        }
      )
    );
   }

  redirectToEndpointListing() {
    this._router.navigate(['/urls']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this._spinner.hide();
  }

}
