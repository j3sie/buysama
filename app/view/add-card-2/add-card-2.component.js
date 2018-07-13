"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var Addcard2Component = /** @class */ (function () {
    function Addcard2Component(page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        page.actionBarHidden = true;
    }
    Addcard2Component.prototype.navigateAddcard = function () {
        this.routerExtensions.navigate(["/add-card-2"]);
    };
    Addcard2Component.prototype.ngOnInit = function () { };
    Addcard2Component = __decorate([
        core_1.Component({
            selector: "add-card-2",
            moduleId: module.id,
            templateUrl: "./add-card-2.component.html",
            styleUrls: ["./add-card-2.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], Addcard2Component);
    return Addcard2Component;
}());
exports.Addcard2Component = Addcard2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNhcmQtMi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtY2FyZC0yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBNkI7QUFDN0Isc0RBQTZEO0FBUzdEO0lBSU0sMkJBQVksSUFBVSxFQUFVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRWhDLENBQUM7SUFDRCwyQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBa0IsQ0FBQztJQVpWLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FLc0IsV0FBSSxFQUE0Qix5QkFBZ0I7T0FKM0QsaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhZGQtY2FyZC0yXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hZGQtY2FyZC0yLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYWRkLWNhcmQtMi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRjYXJkMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIFxyXG4gICAgICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgbmF2aWdhdGVBZGRjYXJkKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hZGQtY2FyZC0yXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gICBcclxufVxyXG4iXX0=