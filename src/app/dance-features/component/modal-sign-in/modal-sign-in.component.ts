import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-sign-in',
  templateUrl: './modal-sign-in.component.html',
  styleUrls: ['./modal-sign-in.component.css']
})
export class ModalSignInComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ModalSignInComponent>) { }

  ngOnInit() {
  }

}
