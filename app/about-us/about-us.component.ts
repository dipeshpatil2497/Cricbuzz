import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  img1: string = "assets/aboutus/photo.jpg";
  img2: string = "assets/aboutus/3de43053-2993-422f-9271-65625b2c1501.jpg";

  ngOnInit(): void {
  }

}
