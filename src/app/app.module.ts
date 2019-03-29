import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PizzaComponent } from './pizza/pizza.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, PizzaComponent, HeaderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
