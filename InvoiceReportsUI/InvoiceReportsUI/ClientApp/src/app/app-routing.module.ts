import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ReportComponentComponent } from './components/maincomponent/maincomponent.component';
 
const routes: Routes = [
  { path: '', component: ReportComponentComponent , pathMatch: 'full' },
  { path: 'dashboard', component: ReportComponentComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
