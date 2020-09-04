import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schd-international',
  templateUrl: './schd-international.component.html',
  styleUrls: ['./schd-international.component.css']
})
export class SchdInternationalComponent {

  public Matchlist = [
    // 1st row
    { date: "TUE, SEP 01 2020", match: "Pakistan Tour of England, 2020", matchdesc: "England vs Pakistan, 3rd T20I", loc: "Emirates Old Trafford, Manchester", time1: "10:30 PM", time2: "05:00 PM GMT / 06:00 PM LOCAL" },

    // 2nd row
    { date: "FRI, SEP 04 2020", match: "Australia Tour of England, 2020", matchdesc: "England vs Australia, 1st T20I", loc: "The Rose Bowl, Southampton", time1: "10:30 PM", time2: "05: 00 PM GMT / 06: 00 PM LOCAL" },

    // 3rd row
    { date: "SUN, SEP 06 2020", match: "Australia Tour of England, 2020 ", matchdesc: "England vs Australia, 2st T20I", loc: "The Rose Bowl , Southampton", time1: " 6: 45 PM", time2: "01: 15 PM GMT / 02: 15 PM LOCAL" },

    // 4th row
    { date: "TUE, SEP 08 2020", match: "Australia Tour of England, 2020", matchdesc: "England vs Australia, 3rd T20I", loc: "The Rose Bowl, Southampton ", time1: "10: 30 PM", time2: "05:00 PM GMT / 06:00 PM LOCAL" },

    // 5th row
    { date: "FRI, SEP 11 2020", match: "Australia Tour of England, 2020", matchdesc: "England vs Australia, 1st ODI", loc: "Emirates Old Trafford,Manchester", time1: " 5: 30 PM", time2: "12: 00 PM GMT / 01: 00 PM LOCAL" },

    // 6th row
    { date: " SUN, SEP 13 2020", match: "Australia Tour of England, 2020", matchdesc: "England vs Australia, 2nd ODI", loc: "Emirates Old Trafford,Manchester ", time1: "5: 30 PM", time2: "12: 00 PM GMT / 01: 00 PM LOCAL" },

    // 7th row
    { date: "WED, SEP 16 2020", match: "Australia Tour of England, 2020", matchdesc: "England vs Australia, 3rd ODI", loc: "Emirates Old Trafford, Manchester ", time1: "5: 30 PM", time2: "12: 00 PM GMT / 01: 00 PM LOCAL" },

    // 8th row
    { date: "SUN, OCT 11 2020", match: "India Tour of Australia, 2020", matchdesc: "India vs Australia, 1st T20I", loc: "The Gabba, Brisbane ", time1: "1: 20 PM", time2: "07: 50 AM GMT / 05: 50 PM LOCAL" },

    // 9th row
    { date: "WED, OCT 14 2020", match: "India Tour of Australia, 2020", matchdesc: "India vs Australia, 2st T20I", loc: "Manuka Oval, Canberra ", time1: "1: 40 PM", time2: "08: 10 AM GMT / 07: 10 PM LOCAL" },
  ];

};

