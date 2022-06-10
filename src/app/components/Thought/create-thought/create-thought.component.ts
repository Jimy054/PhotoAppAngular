import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateThoughtComponent>,
     @Inject(MAT_DIALOG_DATA) public message:string) { }

  ngOnInit(): void {
  }

  onClick():void{
    this.dialogRef.close();
  }

}
