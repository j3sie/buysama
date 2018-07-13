import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from "nativescript-bottom-navigation";
 

@Component({
    selector: "bottom-tabview",
    moduleId: module.id,
    templateUrl: "./bottom-tabview.component.html",
    styleUrls: ["./bottom-tabview.component.css"]
})
export class BottomtabviewComponent implements OnInit {
    public selectedTab;
    
    public tabs: BottomNavigationTab[] = [
      new BottomNavigationTab('', 'home', ),
      new BottomNavigationTab('', 'star'),
      new BottomNavigationTab('', 'card_icon'),
      new BottomNavigationTab('', 'inbox'),
      new BottomNavigationTab('', 'account')
    ];
    
    constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;

    }

    ngOnInit(): void {}
    
 
  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
        this.selectedTab = args.newIndex;
    if (this.selectedTab === 0 ) {
      this.routerExtensions.navigate(["/try"]);
    }
    else if (this.selectedTab === 1)
    {
      this.routerExtensions.navigate(["/home-cards"]);
    }
    else if (this.selectedTab === 2)
    {
      this.routerExtensions.navigate(["/add-card"]);
    }
    else if (this.selectedTab === 3)
    {
      this.routerExtensions.navigate(["/profile-page"]);
    }
    else if (this.selectedTab === 4)
    {
      this.routerExtensions.navigate(["/profile-page"]);
    }
    console.log(`Tab selected:  ${args.oldIndex}`);
  }
 
}
