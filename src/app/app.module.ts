import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { VsgitComponent } from './vsgit/vsgit.component';
import { AzurComponent } from './azur/azur.component';
import { HeaderComponent } from './header/header.component';
import { CommunicationComponent } from './communication/communication.component';
import { ComponentTextService } from './component-text.service';
import { ReplaceClickDirective } from './replace-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    VsgitComponent,
    AzurComponent,
    HeaderComponent,
    CommunicationComponent,
    ReplaceClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ComponentTextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }