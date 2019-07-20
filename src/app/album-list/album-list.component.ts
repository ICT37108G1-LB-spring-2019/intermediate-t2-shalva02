import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AlbumServiceService } from "../services/album-service.service";
import { tap, debounceTime, delay } from "rxjs/operators";
import { IAlbum } from "../models/album";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  constructor(private album: AlbumServiceService) {}
  loading: boolean = false;
  albumItems: IAlbum[];

  ngOnInit() {
    this.album
      .getAlbum()
      .pipe(
        tap(() => (this.loading = true)),
        delay(1000)
      )
      .subscribe(
        val => {
          this.loading = false;
          this.albumItems = val;
        },
        err => {
          this.loading = false;
          console.log(err);
        },
        () => (this.loading = false)
      );
  }
}
