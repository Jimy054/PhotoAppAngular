import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCollectionComponent } from '../create-collection/create-collection.component';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css']
})
export class ListCollectionComponent implements OnInit {

  constructor(private dialogRef: MatDialog) {

  }

 openDialog(){
   this.dialogRef.open(CreateCollectionComponent,{
     width:'270px'
   })
 }

  ngOnInit(): void {
  }

}
