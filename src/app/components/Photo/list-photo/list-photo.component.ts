import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePhotoComponent } from '../create-photo/create-photo.component';
@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css']
})
export class ListPhotoComponent implements OnInit {

  constructor(private dialogRef: MatDialog) {

  }

 openDialog(){
   this.dialogRef.open(CreatePhotoComponent)
 }

  ngOnInit(): void {
  }


}
