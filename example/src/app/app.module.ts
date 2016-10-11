import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NG2ECharts } from './../../../src/echarts.directive';

// App is our top level component
import { App } from './app.component';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    NG2ECharts,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
  ]
})
export class AppModule {

}

