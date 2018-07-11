"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var nativescript_bottom_navigation_1 = require("nativescript-bottom-navigation");
var BottomtabviewComponent = /** @class */ (function () {
    function BottomtabviewComponent(page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.tabs = [
            new nativescript_bottom_navigation_1.BottomNavigationTab('', 'home'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('', 'star'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('', 'card_icon'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('', 'inbox'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('', 'account')
        ];
        page.actionBarHidden = true;
    }
    BottomtabviewComponent.prototype.ngOnInit = function () { };
    BottomtabviewComponent.prototype.onBottomNavigationTabSelected = function (args) {
        this.selectedTab = args.newIndex;
        if (this.selectedTab === 0) {
            this.routerExtensions.navigate(["/try"]);
        }
        else if (this.selectedTab === 1) {
            this.routerExtensions.navigate(["/home-cards"]);
        }
        else if (this.selectedTab === 2) {
            this.routerExtensions.navigate(["/home-cards"]);
        }
        else if (this.selectedTab === 3) {
            this.routerExtensions.navigate(["/profile-page"]);
        }
        else if (this.selectedTab === 4) {
            this.routerExtensions.navigate(["/profile-page"]);
        }
        console.log("Tab selected:  " + args.oldIndex);
    };
    BottomtabviewComponent = __decorate([
        core_1.Component({
            selector: "bottom-tabview",
            moduleId: module.id,
            templateUrl: "./bottom-tabview.component.html",
            styleUrls: ["./bottom-tabview.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], BottomtabviewComponent);
    return BottomtabviewComponent;
}());
exports.BottomtabviewComponent = BottomtabviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXRhYnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90dG9tLXRhYnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUE2QjtBQUM3QixzREFBNkQ7QUFDN0QsaUZBQStHO0FBUy9HO0lBV0ksZ0NBQVksSUFBVSxFQUFVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUjNELFNBQUksR0FBMEI7WUFDbkMsSUFBSSxvREFBbUIsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFHO1lBQ3JDLElBQUksb0RBQW1CLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQztZQUNuQyxJQUFJLG9EQUFtQixDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUM7WUFDeEMsSUFBSSxvREFBbUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO1lBQ3BDLElBQUksb0RBQW1CLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQztTQUN2QyxDQUFDO1FBR0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFaEMsQ0FBQztJQUVELHlDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUdyQiw4REFBNkIsR0FBN0IsVUFBOEIsSUFBNEI7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQ2hDLENBQUM7WUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQ2hDLENBQUM7WUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQ2hDLENBQUM7WUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQ2hDLENBQUM7WUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUF6Q1Usc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQ2hELENBQUM7eUNBWW9CLFdBQUksRUFBNEIseUJBQWdCO09BWHpELHNCQUFzQixDQTJDbEM7SUFBRCw2QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQm90dG9tTmF2aWdhdGlvbiwgQm90dG9tTmF2aWdhdGlvblRhYiwgT25UYWJTZWxlY3RlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYm90dG9tLW5hdmlnYXRpb25cIjtcclxuIFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJib3R0b20tdGFidmlld1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYm90dG9tLXRhYnZpZXcuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ib3R0b20tdGFidmlldy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3R0b210YWJ2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFRhYjtcclxuICAgIFxyXG4gICAgcHVibGljIHRhYnM6IEJvdHRvbU5hdmlnYXRpb25UYWJbXSA9IFtcclxuICAgICAgbmV3IEJvdHRvbU5hdmlnYXRpb25UYWIoJycsICdob21lJywgKSxcclxuICAgICAgbmV3IEJvdHRvbU5hdmlnYXRpb25UYWIoJycsICdzdGFyJyksXHJcbiAgICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCcnLCAnY2FyZF9pY29uJyksXHJcbiAgICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCcnLCAnaW5ib3gnKSxcclxuICAgICAgbmV3IEJvdHRvbU5hdmlnYXRpb25UYWIoJycsICdhY2NvdW50JylcclxuICAgIF07XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG4gICAgXHJcbiBcclxuICBvbkJvdHRvbU5hdmlnYXRpb25UYWJTZWxlY3RlZChhcmdzOiBPblRhYlNlbGVjdGVkRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IGFyZ3MubmV3SW5kZXg7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gMCApIHtcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi90cnlcIl0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gMSlcclxuICAgIHtcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lLWNhcmRzXCJdKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IDIpXHJcbiAgICB7XHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZS1jYXJkc1wiXSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAzKVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2ZpbGUtcGFnZVwiXSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSA0KVxyXG4gICAge1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3Byb2ZpbGUtcGFnZVwiXSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhgVGFiIHNlbGVjdGVkOiAgJHthcmdzLm9sZEluZGV4fWApO1xyXG4gIH1cclxuIFxyXG59XHJcbiJdfQ==