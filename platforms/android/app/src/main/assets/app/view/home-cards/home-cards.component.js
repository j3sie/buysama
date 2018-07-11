"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Carousel", function () { return require("nativescript-carousel").Carousel; });
element_registry_1.registerElement("CarouselItem", function () { return require("nativescript-carousel").CarouselItem; });
var HomecardsComponent = /** @class */ (function () {
    function HomecardsComponent(page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        page.actionBarHidden = true;
    }
    HomecardsComponent.prototype.ngOnInit = function () { };
    HomecardsComponent.prototype.navigateSelectedcard = function () {
        this.routerExtensions.navigate(["/card-selected"]);
    };
    HomecardsComponent = __decorate([
        core_1.Component({
            selector: "home-cards",
            moduleId: module.id,
            templateUrl: "./home-cards.component.html",
            styleUrls: ["./home-cards.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], HomecardsComponent);
    return HomecardsComponent;
}());
exports.HomecardsComponent = HomecardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1jYXJkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLWNhcmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBNkI7QUFDN0Isc0RBQTZEO0FBRzdELDBFQUF3RTtBQUN4RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBU3JGO0lBTU0sNEJBQVksSUFBVSxFQUFVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRWhDLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFFbkIsaURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBZlEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQU9zQixXQUFJLEVBQTRCLHlCQUFnQjtPQU4zRCxrQkFBa0IsQ0FpQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJvdHRvbU5hdmlnYXRpb24sIEJvdHRvbU5hdmlnYXRpb25UYWIsIE9uVGFiU2VsZWN0ZWRFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tLW5hdmlnYXRpb24nO1xyXG4gXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcm91c2VsXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2Fyb3VzZWxcIikuQ2Fyb3VzZWwpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJvdXNlbEl0ZW1cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJvdXNlbFwiKS5DYXJvdXNlbEl0ZW0pO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaG9tZS1jYXJkc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS1jYXJkcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUtY2FyZHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZWNhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAgIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICAgIG5hdmlnYXRlU2VsZWN0ZWRjYXJkKCl7XHJcbiAgICBcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJkLXNlbGVjdGVkXCJdKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19