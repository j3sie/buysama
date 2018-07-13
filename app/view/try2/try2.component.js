"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Try2Component = /** @class */ (function () {
    function Try2Component(route) {
        var _this = this;
        this.route = route;
        this.selected = {};
        this.route.queryParams.subscribe(function (params) {
            _this.selected = JSON.parse(params["selected"]);
        });
    }
    Try2Component.prototype.ngOnInit = function () { };
    Try2Component = __decorate([
        core_1.Component({
            selector: "try1",
            moduleId: module.id,
            templateUrl: "./try2.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], Try2Component);
    return Try2Component;
}());
exports.Try2Component = Try2Component;
function onTap(args) {
    var page = args.object.page;
    var label = page.getViewById("label");
    var fullscreen = args.object.text.indexOf("(full-screen)") !== -1;
    page.showModal("app/view/try2/try2", "context", function (username, password) {
        console.log(username + "/" + password);
        label.text = username + "/" + password;
    }, fullscreen);
}
exports.onTap = onTap;
function onTapStretched(args) {
    var page = args.object.page;
    var label = page.getViewById("label");
    var fullscreen = false;
    var stretched = true;
    page.showModal("app/view/try2/try2", "context", function (username, password) {
        console.log(username + "/" + password);
        label.text = username + "/" + password;
    }, fullscreen, false, stretched);
}
exports.onTapStretched = onTapStretched;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cnkyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFVakQ7SUFHSSx1QkFBb0IsS0FBcUI7UUFBekMsaUJBSUM7UUFKbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGekMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdWLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFRLEdBQVIsY0FBa0IsQ0FBQztJQVRWLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSTZCLHVCQUFjO09BSGhDLGFBQWEsQ0FlekI7SUFBRCxvQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNDQUFhO0FBaUIxQixlQUFzQixJQUFJO0lBQ3RCLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3BDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQVEsT0FBTyxDQUFDLENBQUM7SUFDL0MsSUFBSSxVQUFVLEdBQVMsSUFBSSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFVBQVUsUUFBZ0IsRUFBRSxRQUFnQjtRQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUMzQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQVJELHNCQVFDO0FBRUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBUSxPQUFPLENBQUMsQ0FBQztJQUMvQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBRXJCLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFVBQVUsUUFBZ0IsRUFBRSxRQUFnQjtRQUN4RixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUMzQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBVkQsd0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0cnkxXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90cnkyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyeTJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2VsZWN0ZWQgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBKU09OLnBhcnNlKHBhcmFtc1tcInNlbGVjdGVkXCJdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwKGFyZ3MpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xyXG4gICAgY29uc3QgbGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkPExhYmVsPihcImxhYmVsXCIpO1xyXG4gICAgdmFyIGZ1bGxzY3JlZW4gPSAoPGFueT5hcmdzLm9iamVjdCkudGV4dC5pbmRleE9mKFwiKGZ1bGwtc2NyZWVuKVwiKSAhPT0gLTE7XHJcbiAgICBwYWdlLnNob3dNb2RhbChcImFwcC92aWV3L3RyeTIvdHJ5MlwiLCBcImNvbnRleHRcIiwgZnVuY3Rpb24gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VybmFtZSArIFwiL1wiICsgcGFzc3dvcmQpO1xyXG4gICAgICAgIGxhYmVsLnRleHQgPSB1c2VybmFtZSArIFwiL1wiICsgcGFzc3dvcmQ7XHJcbiAgICB9LCBmdWxsc2NyZWVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwU3RyZXRjaGVkKGFyZ3MpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xyXG4gICAgY29uc3QgbGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkPExhYmVsPihcImxhYmVsXCIpO1xyXG4gICAgdmFyIGZ1bGxzY3JlZW4gPSBmYWxzZTtcclxuICAgIHZhciBzdHJldGNoZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBwYWdlLnNob3dNb2RhbChcImFwcC92aWV3L3RyeTIvdHJ5MlwiLCBcImNvbnRleHRcIiwgZnVuY3Rpb24gKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VybmFtZSArIFwiL1wiICsgcGFzc3dvcmQpO1xyXG4gICAgICAgIGxhYmVsLnRleHQgPSB1c2VybmFtZSArIFwiL1wiICsgcGFzc3dvcmQ7XHJcbiAgICB9LCBmdWxsc2NyZWVuLCBmYWxzZSwgc3RyZXRjaGVkKTtcclxufSJdfQ==