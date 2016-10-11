"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('../example/node_modules/@angular/core');
var echarts_1 = require('echarts');
var NG2ECharts = (function () {
    function NG2ECharts(ele) {
        this.hostElement = ele;
    }
    Object.defineProperty(NG2ECharts.prototype, "options", {
        set: function (opt) {
            if (!opt) {
                console.log('No valid options...');
                console.log(opt);
                return;
            }
            if (opt) {
                if (this.pChart) {
                    this.pChart.dispose();
                }
                this.pChart = echarts_1.init(this.hostElement.nativeElement);
                this.pChart.setOption(opt);
            }
            else {
                console.log('No valid options...');
                console.dir(opt);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NG2ECharts.prototype, "chart", {
        get: function () {
            return this.pChart;
        },
        enumerable: true,
        configurable: true
    });
    NG2ECharts.prototype.ngOnDestroy = function () {
        if (this.pChart) {
            this.pChart.dispose();
        }
    };
    __decorate([
        core_1.Input('ng2-echarts'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NG2ECharts.prototype, "options", null);
    NG2ECharts = __decorate([
        core_1.Directive({
            selector: '[ng2-echarts]',
            exportAs: 'NG2ECharts'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], NG2ECharts);
    return NG2ECharts;
}());
exports.NG2ECharts = NG2ECharts;
//# sourceMappingURL=echarts.directive.js.map