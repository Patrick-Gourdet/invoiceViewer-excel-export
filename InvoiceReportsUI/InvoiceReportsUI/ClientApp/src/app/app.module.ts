import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule }     from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponentComponent } from './components/maincomponent/maincomponent.component';
import { ReportService } from './_services/reports_services';
import { SortService } from './_services/sortService';
import { Toster } from './_services/toster-service';
import { DownloadExcelService } from './_services/download-excel-service';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponentComponent
 
  ],
  entryComponents:[],
  imports: [
    BrowserModule,  
    HttpClientModule,
    DemoMaterialModule,FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [FormsModule],
  providers: [ReportService, SortService, Toster,DownloadExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
