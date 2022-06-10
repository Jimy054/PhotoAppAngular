import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateCollectionComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string) { }


  ngOnInit(): void {
  }

  onClick():void{
    this.dialogRef.close();
  }

}
