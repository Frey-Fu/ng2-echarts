/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  template: `
    Following is ECharts for NG2!
  
    <div [ng2-echarts]="echarts30" class="graph" style="width:800px;height:600px;"></div>
  `
})
export class App {

  url = 'https://twitter.com/AngularClass';

  enabled_list_30: any[] = [
        ['Young father',0.5, 80000],
        ['Young mother',1.0, 10000],
    ];

    disabled_list_30: any[] = [
        ['Drivers',0.8, 52000],
        ['JB Fans',0.2, 53000],
        ['Readers',0.4, 70300]
    ];

    category_list: any[] = [
        'Young father',
        'Young mother',
        'Drivers',
        'JB Fans',
        'Readers',
    ];

 echarts30 = {
        tooltip: {
            trigger: 'item',
            backgroundColor: '#f7e049',
        },
        xAxis: [
            {
                type: 'category',
                data: this.category_list,
                boundaryGap:false,
                axisTick:{alignWithLabel:true},
                axisLine: {show:true},
                splitLine:{show:true}
            },

        ],
        yAxis: [
            {axisLine: {show:false}},
        ],
        visualMap: [
            {
                left: '705px',
                top: '10%',
                dimension: 2,
                min: 0,
                max: 100000,
                itemWidth: 15,
                itemHeight: 50,
                calculable: true,
                text: ['Increasing rate                    '], //a stupid trick to set the position of text
                textGap: 30,
                textStyle: {
                    color: '#000',
                },
                inRange: {
                    symbolSize: [10, 70]
                },
                outOfRange: {
                    symbolSize: [10, 70],
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        series: [
            {
                name: 'Enabled',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                hoverAnimation: true,
                legendHoverLink: true,
                data: this.disabled_list_30,
                itemStyle: {
                    normal: {color:'#f7e049',opacity:0.5},
                    emphasis: {color: '#f7e049',opacity:1}
                }
            },
            {
                name: 'Disabled',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                hoverAnimation: true,
                legendHoverLink: true,
                data: this.enabled_list_30,
                itemStyle: {
                    normal: {color:'#4c8efa',opacity:0.5},
                    emphasis: {color: '#4c8efa',opacity:1}
                }
            },
        ],
        legend: {
            orient: 'vertical',
            y: '300px',
            x:'right',
            data:[{name:'Enabled'},{name: 'Disabled'}],
            textStyle: {
                color: '#000'
            }
        },
    };

}


