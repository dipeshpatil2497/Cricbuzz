import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-bowling',
  templateUrl: './rank-bowling.component.html',
  styleUrls: ['./rank-bowling.component.css']
})
export class RankBowlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public playerslist = [

    { rank: 1, img: "assets/image/trent-boult.jpg", name: "Trent Boult", country: "NEW ZEALAND", points: 722 },

    { rank: 2, img: "assets/image/jasprit-bumrah.jpg", name: "Jasprit Bumrah", country: "INDIA", points: 719 },

    { rank: 3, img: "assets/image/mujeeb-ur-rahman.jpg", name: "Mujeeb Ur Rahman", country: "AFGHANISTAN", points: 701 },

    { rank: 4, img: "assets/image/pat-cummins.jpg", name: "Pat Cummins", country: "AUSTRALIA", points: 689 },

    { rank: 5, img: "assets/image/kagiso-rabada.jpg", name: "Kagiso Rabada", country: "SOUTH AFRICA", points: 665 },

    { rank: 6, img: "assets/image/mohammad-amir.jpg", name: "Mohammad Amir", country: "PAKISTAN", points: 657 },

    { rank: 7, img: "assets/image/chris-woakes.jpg", name: "Chirs Woakes", country: "ENGLAND", points: 650 },

    { rank: 8, img: "assets/image/matt-henry.jpg", name: "Matt Henry", country: "NEW ZEALAND", points: 641 },

    { rank: 9, img: "assets/image/rashid-khan.jpg", name: "Rashid Khan", country: "AFGHANISTAN", points: 630 },

    { rank: 10, img: "assets/image/lockie-ferguson.jpg", name: "Lockie Ferguson", country: "NEW ZEALAND", points: 628 },

    { rank: 11, img: "assets/image/mitchell-starc.jpg", name: "Mitchell Starc", country: "AUSTRALIA", points: 628 },

    { rank: 12, img: "assets/image/mehidy-hasan.jpg", name: "Mehidy Hasan", country: "BANGLADESH", points: 626 },

    { rank: 13, img: "assets/image/yuzvendra-chahal.jpg", name: "Yuzvendra Chahal", country: "INDIA", points: 622 },

    { rank: 14, img: "assets/image/lungi-ngidi.jpg", name: "Lungi Ngidi", country: "SOUTH AFRICA", points: 619 },

    { rank: 15, img: "assets/image/josh-hazlewood.jpg", name: "Josh Hazlewood", country: "AUSTRALIA", points: 618 },
  ];

}
