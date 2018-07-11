import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";


@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.css"]
})
export class LoginComponent implements OnInit {
    
      constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;

    }

    ngOnInit(): void {}

    signup(){
    	 this.routerExtensions.navigate(["/signup"], { clearHistory: true });
    }
    navigateHomecards(){
         this.routerExtensions.navigate(["/home-cards"], { clearHistory: true });
    }
}
