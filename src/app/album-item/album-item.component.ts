import { Component, OnInit, Input } from "@angular/core";
import { AlbumServiceService } from "../services/album-service.service";
import { IAlbum } from "../models/album";
import { Iphoto } from "../models/photo";
import { tap, delay } from "rxjs/operators";

@Component({
  selector: "app-album-item",
  templateUrl: "./album-item.component.html",
  styleUrls: ["./album-item.component.css"]
})
export class AlbumItemComponent implements OnInit {
  @Input() albumItem: IAlbum;
  photoItem: any;
  loading: boolean = false;

  constructor(private photo: AlbumServiceService) {}

  ngOnInit() {}
  loadPhoto(id: number) {
    this.photo
      .getPhotoById(id)
      .pipe(
        tap(() => (this.loading = true)),
        delay(1000)
      )
      .subscribe(
        val => {
          this.photoItem = val;
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
