import {Directive, ElementRef, Input, OnDestroy} from '../example/node_modules/@angular/core';
import {init} from '../example/node_modules/echarts';

@Directive({
        selector: '[ng2-echarts]',
        exportAs: 'NG2ECharts'
})
export class NG2ECharts implements OnDestroy {
        hostElement: ElementRef;
        pChart: ECharts.ECharts;
        constructor(ele: ElementRef) {
                this.hostElement = ele;
        }   

        @Input('ng2-echarts') set options(opt: ECharts.EChartOption) {
                if (!opt) {
                        console.log('No valid options...');
                        console.log(opt);
                        return;
                }   
                if (opt) {
                        if (this.pChart) {
                                this.pChart.dispose();
                        }
                        this.pChart = init(this.hostElement.nativeElement);
                        this.pChart.setOption(opt);
                } else {
                        console.log('No valid options...');
                        console.dir(opt);
                }
        }   


        public get chart() : ECharts.ECharts {
                return this.pChart;
        }   

        ngOnDestroy() {
                if (this.pChart) {
                        this.pChart.dispose();
                }   
        }   
        
}
