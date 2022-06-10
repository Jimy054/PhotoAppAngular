import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateThoughtComponent } from '../create-thought/create-thought.component';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  
  constructor(private dialogRef: MatDialog) {

  }

 openDialog(){
   this.dialogRef.open(CreateThoughtComponent,{
     width:'270px'
   })
 }

  ngOnInit(): void {
  }

}
