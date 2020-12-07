import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalSignInComponent} from '../../modal-sign-in/modal-sign-in.component';

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

  constructor(private router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.levelsMap.set('P', 'Początkujący');
    this.levelsMap.set('S', 'Średni');
    this.levelsMap.set('Z', 'Zaawansowany');
  }

  toSignIn(): void {
    this.router.navigate(['home/singIn']);
  }

  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '470px';
    dialogConfig.width = '700px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalSignInComponent, dialogConfig);
  }

  convertLevel(level: string): string {
    return this.levelsMap.get(level);
  }

}
