import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BgroupsPage } from './bgroups';

@NgModule({
  declarations: [
    BgroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(BgroupsPage),
  ],
  exports: [
    BgroupsPage
  ]
})
export class BgroupsPageModule {}
