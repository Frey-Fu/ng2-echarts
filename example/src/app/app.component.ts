/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    hello!
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
    <div [ng2-echarts]="echarts30" class="graph" style="width:100%;height:100%;"></div>
  `
})
export class App {

  constructor(
    public appState: AppState) {

  }

  enabled_list_30: any[] = [
        ['年轻爸爸',0.5, 80000],
        ['健身一族',1.0, 10000],
    ];

    disabled_list_30: any[] = [
        ['豪华车关注者',0.8, 52000],
        ['追星族',0.2, 53000],
        ['电影达人',0.4, 70300]
    ];

    category_list: any[] = [
        '年轻爸爸',
        '健身一族',
        '豪华车关注者',
        '追星族',
        '电影达人',
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
                text: ['人群增长率                    '], //a stupid trick to set the position of text
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
                name: '未激活',
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
                name: '已激活',
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
            data:[{name:'未激活'},{name: '已激活'}],
            textStyle: {
                color: '#000'
            }
        },
    };
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
