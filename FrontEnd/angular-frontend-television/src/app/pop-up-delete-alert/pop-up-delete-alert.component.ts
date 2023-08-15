import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Television } from '../models/television';
import { TelevisionService } from '../services/television.service';

@Component({
  selector: 'app-pop-up-delete-alert',
  templateUrl: './pop-up-delete-alert.component.html',
  styleUrls: ['./pop-up-delete-alert.component.css']
})
export class PopUpDeleteAlertComponent{

  televisions?: Television[];
  television?: Television[];
  constructor(
    private dialogRef: MatDialogRef<PopUpDeleteAlertComponent>,
    private televisionService: TelevisionService,
    @Inject(MAT_DIALOG_DATA) public data: Television, private dialog: MatDialog) {}

  private getTelevisions(){
      this.televisionService.getTelevisionsList().subscribe(data => {this.televisions = data});
  }

  onNoClick(){
    this.dialogRef.close(false);
  }

  deleteTelevision(){
      this.televisionService.deleteTelevision(this.data.id!).subscribe(data => {
        this.dialogRef.close(true);
      });
  }
 
}
