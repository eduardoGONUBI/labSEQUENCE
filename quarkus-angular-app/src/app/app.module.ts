import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this line
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuarkusInputComponent } from './quarkus-input/quarkus-input.component';

@NgModule({
  declarations: [AppComponent, QuarkusInputComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule], // Include FormsModule here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
