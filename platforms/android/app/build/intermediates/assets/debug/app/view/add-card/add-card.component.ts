import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";


@Component({
    selector: "add-card",
    moduleId: module.id,
    templateUrl: "./add-card.component.html",
    styleUrls: ["./add-card.component.css"]
})
export class AddcardComponent implements OnInit {


    
      constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;

    }
    navigateAddcard(){
        this.routerExtensions.navigate(["/add-card-2"]);
    }

    ngOnInit(): void {}

   
}
