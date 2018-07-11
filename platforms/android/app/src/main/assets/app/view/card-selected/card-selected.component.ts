import { Component, OnInit } from "@angular/core";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Image } from 'tns-core-modules/ui/image';
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "tns-core-modules/ui/page";
import { screen } from 'tns-core-modules/platform';

@Component({
    selector: "card-selected",
    moduleId: module.id,
    templateUrl: "./card-selected.component.html",
    styleUrls: ["./card-selected.component.css"]
})
export class CardselectedComponent implements OnInit {

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

     ngOnInit(): void {}
}


