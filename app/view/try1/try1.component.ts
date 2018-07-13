// import { Component, OnInit } from "@angular/core";



import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";

import { ModalComponent } from "../modal";

@Component({
    selector: "try1",
    moduleId: module.id,
    templateUrl: "./try1.component.html",
    styleUrls: ["./try1.component.css"]
})
export class Try1Component implements OnInit {
  @ViewChild(ModalComponent) modal: ModalComponent;
    constructor() {

    }


    ngOnInit(): void {
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




