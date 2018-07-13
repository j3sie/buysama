"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("tns-core-modules/ui/page");
var core_1 = require("@angular/core");
var modal_1 = require("../modal");
var CardselectedComponent = /** @class */ (function () {
    function CardselectedComponent(_page) {
        this._page = _page;
        this.data = [];
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
    CardselectedComponent.prototype.ngOnInit = function () {
        this.data.push({ text: "Christmas Teddy Bear", points: "500", qty: "Qty 1", location: "Robinsons Mall", src: "~/assets/item3.jpg" });
        this.data.push({ text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" });
        this.data.push({ text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" });
        // this.data.push({ text: "Venusaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" });
        // this.data.push({ text: "Charmander", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" });
    };
    CardselectedComponent.prototype.onTap = function () {
        alert("clicked an item");
    };
    CardselectedComponent.prototype.openModal = function () {
        this.modal.show();
    };
    CardselectedComponent.prototype.closeModal = function () {
        this.modal.hide();
    };
    CardselectedComponent.prototype.onOpenModal = function () {
        console.log("opened modal");
    };
    CardselectedComponent.prototype.onCloseModal = function () {
        console.log("closed modal");
    };
    __decorate([
        core_1.ViewChild(modal_1.ModalComponent),
        __metadata("design:type", modal_1.ModalComponent)
    ], CardselectedComponent.prototype, "modal", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zZWxlY3RlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJkLXNlbGVjdGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLGlEQUFnRDtBQUloRCxzQ0FBZ0Y7QUFFaEYsa0NBQTBDO0FBTzFDO0lBTUksK0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSC9CLFNBQUksR0FBRyxFQUFFLENBQUM7UUFLTixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxLQUFzQixFQUFFLFVBQXNCLEVBQUUsT0FBYTtRQUVsRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLG1GQUFtRjtnQkFDbkYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBUSxDQUFDLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztZQUNuRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osdUZBQXVGO2dCQUN2RixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBTUQsaURBQWlCLEdBQWpCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUEsd0NBQVEsR0FBUjtRQUVHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGdGQUFnRixFQUFFLENBQUMsQ0FBQztRQUMzSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGdGQUFnRixFQUFFLENBQUMsQ0FBQztRQUMzSCwrSEFBK0g7UUFDL0gsaUlBQWlJO0lBR3BJLENBQUM7SUFHQyxxQ0FBSyxHQUFMO1FBQ0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUExRDRCO1FBQTFCLGdCQUFTLENBQUMsc0JBQWMsQ0FBQztrQ0FBUSxzQkFBYzt3REFBQztJQUwxQyxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBTzZCLFdBQUk7T0FOdEIscUJBQXFCLENBaUVqQztJQUFELDRCQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9tb2RhbFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNhcmQtc2VsZWN0ZWRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcmQtc2VsZWN0ZWQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJkLXNlbGVjdGVkLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRzZWxlY3RlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgIEBWaWV3Q2hpbGQoTW9kYWxDb21wb25lbnQpIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsKGV2ZW50OiBTY3JvbGxFdmVudERhdGEsIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXcsIHRvcFZpZXc6IFZpZXcgKSB7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IDwgMjUwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAyO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlPUyBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGggYW4gYW5pbWF0aW9uIHRvIGNyZWF0ZSBhIHNtb3RoZXIgc2Nyb2xsaW5nIGVmZmVjdC4gXHJcbiAgICAgICAgICAgICAgICB0b3BWaWV3LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0gfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cclxuICAgICAgICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgbmF2aWdhdGVSZWRlZW10YWIoICl7XHJcbiAgICBcdCBjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuICAgIH1cclxuXHJcbiAgICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJDaHJpc3RtYXMgVGVkZHkgQmVhclwiLCBwb2ludHM6XCI1MDBcIiwgcXR5OlwiUXR5IDFcIiwgbG9jYXRpb246XCJSb2JpbnNvbnMgTWFsbFwiLCBzcmM6IFwifi9hc3NldHMvaXRlbTMuanBnXCIgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBcIkl2eXNhdXJcIiwgc3JjOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8yLnBuZ1wiIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJJdnlzYXVyXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vMi5wbmdcIiB9KTtcclxuICAgICAgICAvLyB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiVmVudXNhdXJcIiwgc3JjOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8zLnBuZ1wiIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJDaGFybWFuZGVyXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vNC5wbmdcIiB9KTtcclxuICBcclxuICAgXHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgICBvblRhcCgpIHtcclxuICAgICAgICBhbGVydChcImNsaWNrZWQgYW4gaXRlbVwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uT3Blbk1vZGFsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlbmVkIG1vZGFsXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZCBtb2RhbFwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=