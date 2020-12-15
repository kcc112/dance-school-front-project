import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './dance-features/component/contact/contact.component';
import {ActivitiesComponent} from './dance-features/component/activities/activities.component';
import {InstructorComponent} from './dance-features/component/instructors/profiles/instructor.component';
import {ListInstructorsComponent} from './dance-features/component/instructors/listInstructors.component';
import {NewsComponent} from './dance-features/component/news/news.component';
import {ScheduleComponent} from './dance-features/component/schedule/schedule.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'contact', component: ContactComponent},
      {path: 'activities', component: ActivitiesComponent},
      {path: 'news', component: NewsComponent},
      {path: 'list_instructors', component: ListInstructorsComponent},
      {path: 'instructor/:id', component: InstructorComponent},
      {path: 'schedule', component: ScheduleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
