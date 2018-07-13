
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Image } from 'tns-core-modules/ui/image';
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import { screen } from 'tns-core-modules/platform';


import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";

import { ModalComponent } from "../modal";
@Component({
    selector: "card-selected",
    moduleId: module.id,
    templateUrl: "./card-selected.component.html",
    styleUrls: ["./card-selected.component.css"]
})
export class CardselectedComponent implements OnInit {


    data = [];

      @ViewChild(ModalComponent) modal: ModalComponent;
    constructor(private _page: Page) {

        this._page.actionBarHidden = true;
    }

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View ) {

        if (scrollView.verticalOffset < 250) {
            const offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect. 
                topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
            } else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    }





    navigateRedeemtab( ){
    	 console.log('hello');
    }

     ngOnInit(): void {

        this.data.push({ text: "Christmas Teddy Bear", points:"500", qty:"Qty 1", location:"Robinsons Mall", src: "~/assets/item3.jpg" });
        this.data.push({ text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" });
        this.data.push({ text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" });
        // this.data.push({ text: "Venusaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" });
        // this.data.push({ text: "Charmander", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" });
  
   
     }


       onTap() {
        alert("clicked an item");
    }
    
    openModal() {
        this.modal.show();
    }

    closeModal() {
        this.modal.hide();
    }
    
    onOpenModal() {
        console.log("opened modal");
    }

    onCloseModal() {
        console.log("closed modal");
    }

}


