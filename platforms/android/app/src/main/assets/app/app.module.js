"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./view/login/login.component");
var signup_component_1 = require("./view/signup/signup.component");
var profile_page_component_1 = require("./view/profile-page/profile-page.component");
var bottom_tabview_component_1 = require("./view/bottom-tabview/bottom-tabview.component");
var home_cards_component_1 = require("./view/home-cards/home-cards.component");
var card_selected_component_1 = require("./view/card-selected/card-selected.component");
var add_card_component_1 = require("./view/add-card/add-card.component");
var add_card_2_component_1 = require("./view/add-card-2/add-card-2.component");
var try1_component_1 = require("./view/try1/try1.component");
var try2_component_1 = require("./view/try2/try2.component");
var modal_component_1 = require("./view/modal/modal.component");
var angular_1 = require("nativescript-bottom-navigation/angular");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativescriptBottomNavigationModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                profile_page_component_1.ProfilepageComponent,
                bottom_tabview_component_1.BottomtabviewComponent,
                home_cards_component_1.HomecardsComponent,
                card_selected_component_1.CardselectedComponent,
                add_card_component_1.AddcardComponent,
                add_card_2_component_1.Addcard2Component,
                try1_component_1.Try1Component,
                try2_component_1.Try2Component,
                modal_component_1.ModalComponent
            ],
            providers: [
                item_service_1.ItemService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsZ0VBQThEO0FBQzlELG1FQUFpRTtBQUNqRSxxRkFBa0Y7QUFDbEYsMkZBQXdGO0FBQ3hGLCtFQUE0RTtBQUM1RSx3RkFBcUY7QUFDckYseUVBQXNFO0FBQ3RFLCtFQUEyRTtBQUMzRSw2REFBMkQ7QUFDM0QsNkRBQTJEO0FBQzNELGdFQUE4RDtBQUs5RCxrRUFBMkY7QUFFM0Ysb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFFbkUsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBdUN0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFyQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUVmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNmLDRDQUFrQzthQUN0QztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLGdDQUFjO2dCQUNkLGtDQUFlO2dCQUNmLDZDQUFvQjtnQkFDcEIsaURBQXNCO2dCQUN0Qix5Q0FBa0I7Z0JBQ2xCLCtDQUFxQjtnQkFDckIscUNBQWdCO2dCQUNoQix3Q0FBaUI7Z0JBQ2pCLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLGdDQUFjO2FBRWpCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZXBhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCb3R0b210YWJ2aWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9ib3R0b20tdGFidmlldy9ib3R0b20tdGFidmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVjYXJkc0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvaG9tZS1jYXJkcy9ob21lLWNhcmRzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZHNlbGVjdGVkQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9jYXJkLXNlbGVjdGVkL2NhcmQtc2VsZWN0ZWQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRjYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9hZGQtY2FyZC9hZGQtY2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZGNhcmQyQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9hZGQtY2FyZC0yL2FkZC1jYXJkLTIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUcnkxQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy90cnkxL3RyeTEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUcnkyQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy90cnkyL3RyeTIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvbW9kYWwvbW9kYWwuY29tcG9uZW50XCI7XG5cblxuXG5cbmltcG9ydCB7IE5hdGl2ZXNjcmlwdEJvdHRvbU5hdmlnYXRpb25Nb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYm90dG9tLW5hdmlnYXRpb24vYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcblxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgICBOYXRpdmVzY3JpcHRCb3R0b21OYXZpZ2F0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFNpZ251cENvbXBvbmVudCxcbiAgICAgICAgUHJvZmlsZXBhZ2VDb21wb25lbnQsXG4gICAgICAgIEJvdHRvbXRhYnZpZXdDb21wb25lbnQsXG4gICAgICAgIEhvbWVjYXJkc0NvbXBvbmVudCxcbiAgICAgICAgQ2FyZHNlbGVjdGVkQ29tcG9uZW50LFxuICAgICAgICBBZGRjYXJkQ29tcG9uZW50LFxuICAgICAgICBBZGRjYXJkMkNvbXBvbmVudCxcbiAgICAgICAgVHJ5MUNvbXBvbmVudCxcbiAgICAgICAgVHJ5MkNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxDb21wb25lbnRcbiAgXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=