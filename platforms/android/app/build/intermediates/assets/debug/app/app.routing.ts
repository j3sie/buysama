import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./view/login/login.component";
import { SignupComponent } from "./view/signup/signup.component";
import { ProfilepageComponent } from "./view/profile-page/profile-page.component";
import { BottomtabviewComponent } from "./view/bottom-tabview/bottom-tabview.component";


const routes: Routes = [
    { path: "", redirectTo: "/profile-page", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "profile-page", component: ProfilepageComponent },
    { path: "bottom-tabview", component: BottomtabviewComponent },


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }