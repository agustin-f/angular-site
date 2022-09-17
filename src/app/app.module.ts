import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { FullWidthImageComponent } from './full-width-image/full-width-image.component';
import { CardsMorePacksComponent } from './cards-more-packs/cards-more-packs.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { NgbdDatepickerRange } from "./datepicker/datepicker-range";
import { PaginaBlogComponent } from './pagina-blog/pagina-blog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    FullWidthImageComponent,
    CardsMorePacksComponent,
    BlogComponent,
    FooterComponent,
    NgbdDatepickerRange,
    PaginaBlogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
