import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../app-layout/material-module'

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopnavComponent } from './components/topnav/topnav.component'


@NgModule({
  declarations: [AppLayoutComponent, MenuComponent, SidenavComponent, TopnavComponent],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    DemoMaterialModule
  ]
})
export class AppLayoutModule { }
