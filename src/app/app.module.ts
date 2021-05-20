import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Inserted modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
// End of inserted modules

@NgModule({
  declarations: [AppComponent, SearchBarComponent, HomeComponent],
  imports: [BrowserModule,
     BrowserAnimationsModule,
     FormsModule,
     HttpClientModule,
     FormsModule,
     AppRoutingModule,
     GaugeModule.forRoot(),
     MatFormFieldModule,
     MatSelectModule,
     MatTabsModule,
     MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
