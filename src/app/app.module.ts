import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { VsgitComponent } from './vsgit/vsgit.component';
import { AzurComponent } from './azur/azur.component';
import { HeaderComponent } from './header/header.component';
import { CommunicationComponent } from './communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    VsgitComponent,
    AzurComponent,
    HeaderComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
