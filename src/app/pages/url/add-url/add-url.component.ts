import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';
import { EndpointI} from '../models/endpoint.model';
import { UrlHttpsService } from '../services/url-https.service'
import { StatusEnum } from '@const/api.constant';
import { SpinnerService } from '@shared/services/spinner.service';
import { ToastService } from '@shared/services/toast.service';
import { BreadcrumbI } from '@shared/models/titlebar.model';
import { URL_BREADCRUMSLIST } from '@const/breadcrumb.constant';
@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrls: ['./add-url.component.scss']
})
export class AddUrlComponent implements OnInit {
  readonly breadcrumbList: BreadcrumbI[] = URL_BREADCRUMSLIST.add;
  readonly pageTitle = 'Add New  User';
  urlWrapper: EndpointI;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _urlHttp: UrlHttpsService,
    private _toast: ToastService,
    private _spinner: SpinnerService,
  ) {}

  ngOnInit() {
    this.initiateUrlForm();
  }

  initiateUrlForm() {
    this.urlWrapper = {
      name: '',
      endPoint: '',
      verb:'',
      roleID: [],
      statusID: StatusEnum.ACTIVE
    };
  }

  onUrlSubmit() {
    this._spinner.show(`Saving url ${this.urlWrapper.name}...`);
    if(this.urlWrapper.statusID === false){
      this.urlWrapper.statusID = 0
    }else if(this.urlWrapper.statusID === true){
      this.urlWrapper.statusID = 1;
    }
    this.subscriptions.add(
      this._urlHttp.createEndpoint(this.urlWrapper).subscribe(
        (res) => {
          this.redirectToEndpointListing();
          this._toast.success(`${this.urlWrapper.name} Added Sucessfully`)
        },
        (err) => {
          this._toast.error(err.error.message)
        }
      )
    );
  //   // this._spinner.hide();
  }

  redirectToEndpointListing() {
    this._router.navigate(['/urls']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    // this._spinner.hide();
  }

}
