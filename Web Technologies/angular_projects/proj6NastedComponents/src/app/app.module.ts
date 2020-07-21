import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './content/login/login.component';
import { AboutComponent } from './content/about/about.component';
import { OffersComponent } from './content/offers/offers.component';
import { ProductComponent } from './content/product/product.component';
import { ProductcardComponent } from './content/product/productcard/productcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    LoginComponent,
    AboutComponent,
    OffersComponent,
    ProductComponent,
    ProductcardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
