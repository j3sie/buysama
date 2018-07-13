"use strict";
// import { Component, OnInit } from "@angular/core";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("../modal");
var Try1Component = /** @class */ (function () {
    function Try1Component() {
    }
    Try1Component.prototype.ngOnInit = function () {
    };
    Try1Component.prototype.onTap = function () {
        alert("clicked an item");
    };
    Try1Component.prototype.openModal = function () {
        this.modal.show();
    };
    Try1Component.prototype.closeModal = function () {
        this.modal.hide();
    };
    Try1Component.prototype.onOpenModal = function () {
        console.log("opened modal");
    };
    Try1Component.prototype.onCloseModal = function () {
        console.log("closed modal");
    };
    __decorate([
        core_1.ViewChild(modal_1.ModalComponent),
        __metadata("design:type", modal_1.ModalComponent)
    ], Try1Component.prototype, "modal", void 0);
    Try1Component = __decorate([
        core_1.Component({
            selector: "try1",
            moduleId: module.id,
            templateUrl: "./try1.component.html",
            styleUrls: ["./try1.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], Try1Component);
    return Try1Component;
}());
exports.Try1Component = Try1Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5MS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cnkxLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscURBQXFEOztBQUlyRCxzQ0FBZ0Y7QUFFaEYsa0NBQTBDO0FBUTFDO0lBRUk7SUFFQSxDQUFDO0lBR0QsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFHRCw2QkFBSyxHQUFMO1FBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE1QndCO1FBQTFCLGdCQUFTLENBQUMsc0JBQWMsQ0FBQztrQ0FBUSxzQkFBYztnREFBQztJQUR0QyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vbW9kYWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidHJ5MVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdHJ5MS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RyeTEuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJ5MUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChNb2RhbENvbXBvbmVudCkgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uVGFwKCkge1xyXG4gICAgICAgIGFsZXJ0KFwiY2xpY2tlZCBhbiBpdGVtXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmhpZGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25PcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuZWQgbW9kYWxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkIG1vZGFsXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==