import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: "try1",
    moduleId: module.id,
    templateUrl: "./try2.component.html"
})
export class Try2Component implements OnInit {
    selected = {};

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.selected = JSON.parse(params["selected"]);
        });
    }

    ngOnInit(): void {}





}

export function onTap(args) {
    const page = <Page>args.object.page;
    const label = page.getViewById<Label>("label");
    var fullscreen = (<any>args.object).text.indexOf("(full-screen)") !== -1;
    page.showModal("app/view/try2/try2", "context", function (username: string, password: string) {
        console.log(username + "/" + password);
        label.text = username + "/" + password;
    }, fullscreen);
}

export function onTapStretched(args) {
    const page = <Page>args.object.page;
    const label = page.getViewById<Label>("label");
    var fullscreen = false;
    var stretched = true;
    
    page.showModal("app/view/try2/try2", "context", function (username: string, password: string) {
        console.log(username + "/" + password);
        label.text = username + "/" + password;
    }, fullscreen, false, stretched);
}