import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-team',
  templateUrl: './rank-team.component.html',
  styleUrls: ['./rank-team.component.css']
})
export class RankTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public teamlist = [
    { rank: 1, country: "ENGLAND", rating: 127, points: 5093 },
    { rank: 2, country: "INDIA", rating: 119, points: 5819 },
    { rank: 3, country: "NEW ZEALAND", rating: 116, points: 3716 },
    { rank: 4, country: "SOUTH AFRICA", rating: 108, points: 3345 },
    { rank: 5, country: "AUSTRALIA", rating: 107, points: 3518 },
    { rank: 6, country: "PAKISTAN", rating: 102, points: 3254 },
    { rank: 7, country: "BANGLAESH", rating: 88, points: 2989 },
    { rank: 8, country: "SRI LANKA", rating: 85, points: 3297 },
    { rank: 9, country: "WEST INDIES", rating: 76, points: 3285 },
    { rank: 10, country: "AFGHANISTAN", rating: 55, points: 1549 },
    { rank: 11, country: "IRELAND", rating: 49, points: 1117 },
    { rank: 12, country: "NETHERLANDS", rating: 44, points: 222 },
    { rank: 13, country: "OMAN", rating: 40, points: 479 },
    { rank: 14, country: "ZIMBABWE", rating: 39, points: 935 },
    { rank: 15, country: "SCOTLAND", rating: 26, points: 419 },
  ];

}
