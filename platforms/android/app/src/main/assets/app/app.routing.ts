import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./view/login/login.component";
import { SignupComponent } from "./view/signup/signup.component";
import { ProfilepageComponent } from "./view/profile-page/profile-page.component";
import { BottomtabviewComponent } from "./view/bottom-tabview/bottom-tabview.component";
import{ HomecardsComponent } from "./view/home-cards/home-cards.component";
import { CardselectedComponent } from "./view/card-selected/card-selected.component";
import { AddcardComponent } from "./view/add-card/add-card.component";
import { Addcard2Component } from "./view/add-card-2/add-card-2.component";
import { Try1Component } from "./view/try1/try1.component";
import { Try2Component } from "./view/try2/try2.component";
import { ModalComponent } from "./view/modal/modal.component";






const routes: Routes = [
    { path: "", redirectTo: "/card-selected", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "profile-page", component: ProfilepageComponent },
    { path: "bottom-tabview", component: BottomtabviewComponent },
    { path: "home-cards", component: HomecardsComponent },
    { path: "card-selected", component: CardselectedComponent },
    { path: "add-card", component: AddcardComponent },
    { path: "add-card-2", component: Addcard2Component },
    { path: "try1", component: Try1Component },
    { path: "try2", component: Try2Component },
    { path: "modal", component: ModalComponent },


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }