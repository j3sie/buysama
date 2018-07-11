import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import {RouterExtensions} from "nativescript-angular/router";
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from 'nativescript-bottom-navigation';
 
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);


@Component({
    selector: "home-cards",
    moduleId: module.id,
    templateUrl: "./home-cards.component.html",
    styleUrls: ["./home-cards.component.css"]
})
export class HomecardsComponent implements OnInit {


    

    
      constructor(page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;

    }

    ngOnInit(): void {}

    navigateSelectedcard(){
    		this.routerExtensions.navigate(["/card-selected"]);
    }

}



