import { Component, OnInit } from '@angular/core';
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
  showMenu: any;
  menuItems = sidebarMenu;
  subMenuSelected: string = '';
  subscriptions: Subscription = new Subscription();
  constructor(
    public readonly router: Router,
    private readonly _route: ActivatedRoute
  ) { 
    this.subscriptions.add(this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setLocalAsUrl(val.urlAfterRedirects);
      }
    })
    );
  }

  ngOnInit(): void {
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
}
