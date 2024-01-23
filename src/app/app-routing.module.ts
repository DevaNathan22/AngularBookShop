import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetdataComponent } from './setdata/setdata.component';
import { GetdataComponent } from './getdata/getdata.component';

const routes: Routes = [{path:"setbook",component:SetdataComponent},{path:"getbook",component:GetdataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
