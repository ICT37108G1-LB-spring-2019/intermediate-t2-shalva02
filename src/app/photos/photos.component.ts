import { Component, OnInit, Input } from "@angular/core";
import { Iphoto } from "../models/photo";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  @Input() photo: Iphoto;

  constructor() {}

  ngOnInit() {}
}
