"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var AddcardComponent = /** @class */ (function () {
    function AddcardComponent(page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        page.actionBarHidden = true;
    }
    AddcardComponent.prototype.navigateAddcard = function () {
        this.routerExtensions.navigate(["/add-card-2"]);
    };
    AddcardComponent.prototype.ngOnInit = function () { };
    AddcardComponent = __decorate([
        core_1.Component({
            selector: "add-card",
            moduleId: module.id,
            templateUrl: "./add-card.component.html",
            styleUrls: ["./add-card.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], AddcardComponent);
    return AddcardComponent;
}());
exports.AddcardComponent = AddcardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QixzREFBNkQ7QUFTN0Q7SUFJTSwwQkFBWSxJQUFVLEVBQVUsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDaEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFaEMsQ0FBQztJQUNELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsbUNBQVEsR0FBUixjQUFrQixDQUFDO0lBWlYsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQUtzQixXQUFJLEVBQTRCLHlCQUFnQjtPQUozRCxnQkFBZ0IsQ0FlNUI7SUFBRCx1QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFkZC1jYXJkXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtY2FyZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2FkZC1jYXJkLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZGNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgICBcclxuICAgICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIG5hdmlnYXRlQWRkY2FyZCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FkZC1jYXJkLTJcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgIFxyXG59XHJcbiJdfQ==