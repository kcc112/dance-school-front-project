import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import {ShareModule} from '../share/share.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ShareModule,
  ]
})
export class DanceFeaturesModule { }
