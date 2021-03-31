import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { SidebarMenuI } from '../menubar/models/menubar.model';

import { sidebarMenu } from 'src/app/constants/sidebarMenu.constant';
import { LOCAL_STORAGE_KEY } from '@const/storage-key.constant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  menuItems = sidebarMenu;
  subMenuSelected: string;

  subscriptions: Subscription = new Subscription();

  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor(
    public router: Router,
    private _route: ActivatedRoute
  ) {
    this.subscriptions.add(this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setLocalAsUrl(val.urlAfterRedirects);
      }
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    })
    );
  }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.pushRightClass = 'push-right';
    this.getDataFromLocalStorage();
  }
  
  /**
   *@description calls for getting selectedMenu and subMenu from localStorage
   *
   * @memberof SidebarComponent
   */
   getDataFromLocalStorage() {
    if (localStorage.getItem(LOCAL_STORAGE_KEY.navigation.menuSelected)) {
      this.showMenu = localStorage.getItem(
        LOCAL_STORAGE_KEY.navigation.menuSelected
      );
    } else {
      let redirectUrl =
        '/' + this._route.snapshot['_routerState'].url.split('/')[1];
      this.setLocalAsUrl(redirectUrl);
    }
    if (localStorage.getItem(LOCAL_STORAGE_KEY.navigation.subMenuSelected)) {
      this.subMenuSelected = localStorage.getItem(
        LOCAL_STORAGE_KEY.navigation.subMenuSelected
      );
    }
  }
  /**
   *@description it sets localStorage if any redirection of Url occurs
   *
   * @memberof SidebarComponent
   */
  setLocalAsUrl(val:string) {
    this.menuItems.forEach((menu:SidebarMenuI) => {
      if (val == menu.routerLink) {
        this.showMenu = menu.name;
        this.setLocalStorageForMenu();
        this.subMenuSelected = '0';
      } 
    });
  }
  
  /**
   * @description calls in order to set menu in localStorage
   *
   * @memberof MenubarComponent
   */
  setLocalStorageForMenu() {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.navigation.menuSelected,
      this.showMenu
    );
  }
  
  /**
   *@description calls when non-nested menu is clicked
   *
   * @param {*} menu
   * @memberof MenubarComponent
   */
  menuClick(menu: any) {
    this.showMenu = menu.name;
    this.setLocalStorageForMenu();
    this.router.navigate([menu.routerLink]);
    this.subMenuSelected = '0';
  }
  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }
  /**
   * @description calls when nested menu is clicked
   *
   * @param {*} element
   * @memberof SidebarComponent
   */
   addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
    this.setLocalStorageForMenu();
    this.subMenuSelected = '0';
  }
}
