import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import { ListInstructorsComponent } from './component/instructors/listInstructors.component';
import { InstructorComponent } from './component/instructors/profiles/instructor.component';
import {ShareModule} from '../share/share.module';
import { ActyvitiesComponent } from './component/actyvities/actyvities.component';



@NgModule({
  declarations: [ContactComponent, ActyvitiesComponent, InstructorComponent, ListInstructorsComponent],
  imports: [
    CommonModule,
    ShareModule,
  ]
})
export class DanceFeaturesModule { }
