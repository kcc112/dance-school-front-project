import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ShareModule} from '../share/share.module';
import {RouterModule} from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import {DanceFeaturesModule} from '../dance-features/dance-features.module';



@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    DanceFeaturesModule,

  ]
})
export class HomeModule { }
