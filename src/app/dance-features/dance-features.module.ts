import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import {ShareModule} from '../share/share.module';
import { ActyvitiesComponent } from './component/actyvities/actyvities.component';



@NgModule({
  declarations: [ContactComponent, ActyvitiesComponent],
  imports: [
    CommonModule,
    ShareModule,
  ]
})
export class DanceFeaturesModule { }
