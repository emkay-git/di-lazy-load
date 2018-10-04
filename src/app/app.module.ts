import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EagerComponentComponent } from './eager-component/eager-component.component';
import { AppRoutingModule } from './app.routing.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
