import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./view/login/login.component";
import { SignupComponent } from "./view/signup/signup.component";
import { ProfilepageComponent } from "./view/profile-page/profile-page.component";
import { BottomtabviewComponent } from "./view/bottom-tabview/bottom-tabview.component";
import { HomecardsComponent } from "./view/home-cards/home-cards.component";
// import { CardselectedComponent } from "./view/card-selected/card-selected.component";
import { AddcardComponent } from "./view/add-card/add-card.component";
import { Addcard2Component } from "./view/add-card-2/add-card-2.component";




import { NativescriptBottomNavigationModule} from "nativescript-bottom-navigation/angular";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent,

    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
         NativescriptBottomNavigationModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        SignupComponent,
        ProfilepageComponent,
        BottomtabviewComponent,
        HomecardsComponent,
        // CardselectedComponent,
        AddcardComponent,
        Addcard2Component,
        ModalComponent,
  
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
