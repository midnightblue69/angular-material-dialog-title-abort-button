import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button'

import { AppComponent } from './app.component';
import { MatCommonModule } from '@angular/material/core';
//import { BrowserAnimationsModule} from '@angular/material/b'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    MatDialogModule,
    MatButtonModule,
  //  BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
