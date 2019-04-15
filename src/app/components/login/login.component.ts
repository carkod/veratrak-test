import { Component, OnInit, Inject, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('guard') guard: TemplateRef<any>;
  password: string;
  email: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.guard, {
      width: '250px',
      data: { email: this.email, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
