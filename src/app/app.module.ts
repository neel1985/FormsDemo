import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';        //imported FormsModule
import { AppRoutingModule, componentsArr } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdlMouseBtnClickDirective } from './directives/mdl-mouse-btn-click.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    componentsArr,
    MdlMouseBtnClickDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule                    //Added in Imports Array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
