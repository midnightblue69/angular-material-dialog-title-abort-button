import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
    selector: 'app-title-close-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
    templateUrl: './title-close-dialog.component.html',
    styleUrls: ['./title-close-dialog.component.scss']
})
export class TitleCloseDialogComponent {

    constructor(private dialogRef: MatDialogRef<TitleCloseDialogComponent>) {}

    abort = () => this.dialogRef.close()
}
