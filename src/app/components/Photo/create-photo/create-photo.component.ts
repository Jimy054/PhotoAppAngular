import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-create-photo',
  templateUrl: './create-photo.component.html',
  styleUrls: ['./create-photo.component.css']
})
export class CreatePhotoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatePhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string) { }

 ngOnInit(): void {
 }

 onClick():void{
   this.dialogRef.close();
 }

 url=""; 

 onSelectFile(e:any){
  if(e.target.files){
    var reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
 }


}
