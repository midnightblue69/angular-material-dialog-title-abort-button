import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { TitleCloseDialogComponent} from './title-close-dialog/title-close-dialog.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
    title = 'dialog-title-abort-button'

    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open<TitleCloseDialogComponent, void, void>(TitleCloseDialogComponent)
  
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`)
        })
    }
}
