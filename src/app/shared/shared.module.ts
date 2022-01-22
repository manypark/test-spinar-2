import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivitysComponent } from './activitys/activitys.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    ActivitysComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    ActivitysComponent,
  ]
})

export class SharedModule { }