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
var checkout_component_1 = require("./view/checkout/checkout.component");
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
                checkout_component_1.CheckoutComponent,
                modal_component_1.ModalComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsZ0VBQThEO0FBQzlELG1FQUFpRTtBQUNqRSxxRkFBa0Y7QUFDbEYsMkZBQXdGO0FBQ3hGLCtFQUE0RTtBQUM1RSx3RkFBcUY7QUFDckYseUVBQXNFO0FBQ3RFLCtFQUEyRTtBQUMzRSx5RUFBdUU7QUFHdkUsZ0VBQThEO0FBRzlELGtFQUEyRjtBQUUzRixvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUVuRSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFzQ3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBRWY7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2YsNENBQWtDO2FBQ3RDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsZ0NBQWM7Z0JBQ2Qsa0NBQWU7Z0JBQ2YsNkNBQW9CO2dCQUNwQixpREFBc0I7Z0JBQ3RCLHlDQUFrQjtnQkFDbEIsK0NBQXFCO2dCQUNyQixxQ0FBZ0I7Z0JBQ2hCLHdDQUFpQjtnQkFDakIsc0NBQWlCO2dCQUNqQixnQ0FBYzthQUVqQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2ZpbGVwYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm90dG9tdGFidmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvYm90dG9tLXRhYnZpZXcvYm90dG9tLXRhYnZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lY2FyZHNDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2hvbWUtY2FyZHMvaG9tZS1jYXJkcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRzZWxlY3RlZENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvY2FyZC1zZWxlY3RlZC9jYXJkLXNlbGVjdGVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkY2FyZENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvYWRkLWNhcmQvYWRkLWNhcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBZGRjYXJkMkNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvYWRkLWNhcmQtMi9hZGQtY2FyZC0yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudFwiO1xuXG5cbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9tb2RhbC9tb2RhbC5jb21wb25lbnRcIjtcblxuXG5pbXBvcnQgeyBOYXRpdmVzY3JpcHRCb3R0b21OYXZpZ2F0aW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJvdHRvbS1uYXZpZ2F0aW9uL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG5cbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICAgTmF0aXZlc2NyaXB0Qm90dG9tTmF2aWdhdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBTaWdudXBDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVwYWdlQ29tcG9uZW50LFxuICAgICAgICBCb3R0b210YWJ2aWV3Q29tcG9uZW50LFxuICAgICAgICBIb21lY2FyZHNDb21wb25lbnQsXG4gICAgICAgIENhcmRzZWxlY3RlZENvbXBvbmVudCxcbiAgICAgICAgQWRkY2FyZENvbXBvbmVudCxcbiAgICAgICAgQWRkY2FyZDJDb21wb25lbnQsXG4gICAgICAgIENoZWNrb3V0Q29tcG9uZW50LFxuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=