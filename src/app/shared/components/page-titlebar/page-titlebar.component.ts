import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { ButtonOptionsI, BreadcrumbI } from '@shared/models/titlebar.model';

@Component({
  selector: 'app-page-titlebar',
  templateUrl: './page-titlebar.component.html',
  styleUrls: ['./page-titlebar.component.scss']
})
export class PageTitlebarComponent implements OnInit {
  
  @Input() breadcrumbList: BreadcrumbI[];
  @Input() pageTitle: string;
  @Input() itemCount?: number;
  @Input() button: ButtonOptionsI = {
    label: '',
    routerLink: []
  };

  // note: Accepts template from the parent component to display
  @ContentChild(TemplateRef) extraButton: TemplateRef<any>

  constructor() {}

  ngOnInit() {
  }
}
