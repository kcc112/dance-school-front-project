import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface ScheduleActivity {
  start: string;
  end: string;
  instructor: string;
  type: string;
  level: string;
}

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit {

  @Input()
  day: string;

  @Input()
  activities: ScheduleActivity[];
  displayedColumns: string[] = ['hours', 'type', 'instructor', 'level', 'actions'];
  levelsMap: Map<string, string> = new Map<string, string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.levelsMap.set('P', 'Początkujący');
    this.levelsMap.set('S', 'Średni');
    this.levelsMap.set('Z', 'Zaawansowany');
  }

  toSignIn(): void {
    this.router.navigate(['home/news']);
  }

  convertLevel(level: string): string {
    return this.levelsMap.get(level);
  }

}
