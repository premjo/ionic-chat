import { Component } from '@angular/core';

import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = 'LandingPage';
  tab2Root: any = 'HomePage';
  tab3Root: any = 'CategoryListPage';

  constructor() {

  }
}
