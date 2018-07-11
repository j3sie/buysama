"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var CardselectedComponent = /** @class */ (function () {
    function CardselectedComponent(_page) {
        this._page = _page;
        this._page.actionBarHidden = true;
    }
    CardselectedComponent.prototype.onScroll = function (event, scrollView, topView) {
        if (scrollView.verticalOffset < 250) {
            var offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect. 
                topView.animate({ translate: { x: 0, y: offset } }).then(function () { }, function () { });
            }
            else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    };
    CardselectedComponent.prototype.navigateRedeemtab = function () {
        console.log('hello');
    };
    CardselectedComponent.prototype.ngOnInit = function () { };
    CardselectedComponent = __decorate([
        core_1.Component({
            selector: "card-selected",
            moduleId: module.id,
            templateUrl: "./card-selected.component.html",
            styleUrls: ["./card-selected.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CardselectedComponent);
    return CardselectedComponent;
}());
exports.CardselectedComponent = CardselectedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZWxlY3RlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJkLXNlbGVjdGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUlsRCxpREFBZ0Q7QUFTaEQ7SUFFSSwrQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsS0FBc0IsRUFBRSxVQUFzQixFQUFFLE9BQWE7UUFFbEUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixtRkFBbUY7Z0JBQ25GLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLHVGQUF1RjtnQkFDdkYsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFpQixHQUFqQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVBLHdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQXpCWCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBRzZCLFdBQUk7T0FGdEIscUJBQXFCLENBMEJqQztJQUFELDRCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3JztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNhcmQtc2VsZWN0ZWRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtc2VsZWN0ZWQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJkLXNlbGVjdGVkLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRzZWxlY3RlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSkge1xyXG5cclxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwoZXZlbnQ6IFNjcm9sbEV2ZW50RGF0YSwgc2Nyb2xsVmlldzogU2Nyb2xsVmlldywgdG9wVmlldzogVmlldyApIHtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgPCAyNTApIHtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCAvIDI7XHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxWaWV3Lmlvcykge1xyXG4gICAgICAgICAgICAgICAgLy8gaU9TIGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aCBhbiBhbmltYXRpb24gdG8gY3JlYXRlIGEgc21vdGhlciBzY3JvbGxpbmcgZWZmZWN0LiBcclxuICAgICAgICAgICAgICAgIHRvcFZpZXcuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEFuZHJvaWQsIGFuaW1hdGlvbnMgYXJlIGplcmt5IHNvIGluc3RlYWQganVzdCBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGhvdXQgYW5pbWF0aW9uLlxyXG4gICAgICAgICAgICAgICAgdG9wVmlldy50cmFuc2xhdGVZID0gTWF0aC5mbG9vcihvZmZzZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRlUmVkZWVtdGFiKCApe1xyXG4gICAgXHQgY29uc29sZS5sb2coJ2hlbGxvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgIG5nT25Jbml0KCk6IHZvaWQge31cclxufVxyXG5cclxuXHJcbiJdfQ==