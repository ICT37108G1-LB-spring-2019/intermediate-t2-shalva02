import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumItemComponent } from "./album-item/album-item.component";
import { PhotosComponent } from "./photos/photos.component";
import { SpinnerComponent } from "./spinner/spinner.component";

import { AlbumServiceService } from "./services/album-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumItemComponent,
    PhotosComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: AlbumServiceService, useClass: AlbumServiceService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
