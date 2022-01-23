import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivitysComponent } from './activitys/activitys.component';
import { CentroMonitoreoComponent } from './centro-monitoreo/centro-monitoreo.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    ActivitysComponent,
    CentroMonitoreoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    ActivitysComponent,
    CentroMonitoreoComponent,
  ]
})

export class SharedModule { }