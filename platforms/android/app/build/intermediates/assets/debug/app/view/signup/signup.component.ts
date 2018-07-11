import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
    
      constructor(page: Page, private  routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {}

    login(){
    	 this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
     navigateBack(){
     	this.routerExtensions.navigate(["/login"], { clearHistory: true });
    
     }
 
}
