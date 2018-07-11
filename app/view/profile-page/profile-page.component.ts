import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";


@Component({
    selector: "profile-page",
    moduleId: module.id,
    templateUrl: "./profile-page.component.html",
    styleUrls: ["./profile-page.component.css"]
})
export class ProfilepageComponent implements OnInit {

      constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {}

  navigateBack(){
     	this.routerExtensions.navigate(["/login"], { clearHistory: true });
    
     }
      navigateLogin(){
     	this.routerExtensions.navigate(["/login"], { clearHistory: true });
    
     }
 
 
}


