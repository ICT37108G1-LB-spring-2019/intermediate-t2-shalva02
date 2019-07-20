import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { IAlbum } from "../models/album";
import { Iphoto } from "../models/photo";

const ALBUM_API: string = "https://jsonplaceholder.typicode.com/albums",
  PHOTO_API: string = "https://jsonplaceholder.typicode.com/photos/";

@Injectable({
  providedIn: "root"
})
export class AlbumServiceService {
  constructor(private http: HttpClient) {}

  getAlbum(): Observable<IAlbum[]> {
    return this.http.get(ALBUM_API).pipe(
      map((albums: Array<any>) => {
        return <any>albums.map(album => {
          return album;
        });
      }),
      catchError(err => throwError(err))
    );
  }
  getPhotoById(id: number) {
    let api = PHOTO_API + id.toString();
    return this.http.get(api).pipe(catchError(err => throwError(err)));
  }
}
