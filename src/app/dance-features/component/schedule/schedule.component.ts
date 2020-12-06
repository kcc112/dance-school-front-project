import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ScheduleActivity} from './schedule-table/schedule-table.component';

export interface DaySchedule {
  day: string;
  activities: ScheduleActivity[];
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  options: string[] = ['Jazz', 'Tango', 'Break Dance'];
  schedule: DaySchedule[];
  items: DaySchedule[];

  levelSelected: FormControl;
  typeSelected: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.schedule = [
      {day: 'Poniedziałek', activities: [
          {start: '12:55', end: '14:30', instructor: 'Gosia Andrzejczak', level: 'P', type: 'Jazz'},
          {start: '15:30', end: '17:00', instructor: 'Kasia Gospel', level: 'Z', type: 'Tango'},
          {start: '17:00', end: '20:00', instructor: 'Basia Wolna', level: 'S', type: 'Break Dance'},
        ]},
      {day: 'Wtorek', activities: [
          {start: '13:30', end: '15:00', instructor: 'Andrzej Szybki', level: 'P', type: 'Jazz'},
          {start: '15:55', end: '17:40', instructor: 'Kasia Gospel', level: 'Z', type: 'Tango'},
          {start: '17:00', end: '20:00', instructor: 'Basia Wolna', level: 'S', type: 'Break Dance'},
        ]},
      {day: 'Środa', activities: [
          {start: '14:55', end: '16:55', instructor: 'Gosia Andrzejczak', level: 'P', type: 'Jazz'},
          {start: '17:00', end: '20:00', instructor: 'Basia Wolna', level: 'S', type: 'Break Dance'},
        ]},
      {day: 'Czwartek', activities: [
          {start: '13:30', end: '15:00', instructor: 'Andrzej Szybki', level: 'P', type: 'Jazz'},
          {start: '15:55', end: '17:40', instructor: 'Kasia Gospel', level: 'Z', type: 'Tango'},
          {start: '17:00', end: '20:00', instructor: 'Basia Wolna', level: 'S', type: 'Break Dance'},

        ]},
      {day: 'Piątek', activities: [
          {start: '13:30', end: '15:00', instructor: 'Andrzej Szybki', level: 'P', type: 'Jazz'},
          {start: '15:30', end: '17:00', instructor: 'Kasia Gospel', level: 'Z', type: 'Tango'},
          {start: '17:00', end: '20:00', instructor: 'Basia Wolna', level: 'S', type: 'Break Dance'},
        ]},
    ];
    this.items = JSON.parse(JSON.stringify(this.schedule));
    this.levelSelected = new FormControl();
    this.typeSelected = new FormControl();
  }

  filterByLevel(): void {
    this.items = JSON.parse(JSON.stringify(this.schedule));
    this.items.forEach(day => day.activities = day.activities.filter(item => item.level.includes(this.levelSelected.value)));
    this.typeSelected.setValue('');
  }

  filterByType(): void {
    this.items = JSON.parse(JSON.stringify(this.schedule));
    this.items.forEach(day => day.activities = day.activities.filter(item => item.type.includes(this.typeSelected.value)));
    this.levelSelected.setValue('');
  }
}
