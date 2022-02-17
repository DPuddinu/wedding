import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {

  }

  cancel(): void {
    this.dialogRef.close();
  }

  confirm() {
    const payload = this.data.payload;
    this.data.confirm(payload);
    this.dialogRef.close();
  }
}
