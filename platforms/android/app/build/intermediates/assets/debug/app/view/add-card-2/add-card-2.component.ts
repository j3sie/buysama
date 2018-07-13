import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";


@Component({
    selector: "add-card-2",
    moduleId: module.id,
    templateUrl: "./add-card-2.component.html",
    styleUrls: ["./add-card-2.component.css"]
})
export class Addcard2Component implements OnInit {


    
      constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;

    }
    navigateAddcard(){
        this.routerExtensions.navigate(["/add-card-2"]);
    }

    ngOnInit(): void {}

   
}
