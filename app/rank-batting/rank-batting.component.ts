import { Component } from '@angular/core';

@Component({
  selector: 'app-rank-batting',
  templateUrl: './rank-batting.component.html',
  styleUrls: ['./rank-batting.component.css']
})
export class RankBattingComponent {

  public playerslist = [
    { rank: 1, img: "assets/image/virat-kohli.jpg", name: "Virat Kohli", country: "INDIA", points: 871 },

    { rank: 2, img: "assets/image/rohit-sharma.jpg", name: "Rohit Sharma", country: "INDIA", points: 855 },

    { rank: 3, img: "assets/image/babar-azam.jpg", name: "Babar Azam", country: "PAKISTAN", points: 829 },

    { rank: 4, img: "assets/image/ross-taylor.jpg", name: "Ross Taylor", country: "NEW ZEALAND", points: 818 },

    { rank: 5, img: "assets/image/faf-du-plessis.jpg", name: "Faf Du Plessis", country: "SOUTH AFRICA", points: 790 },

    { rank: 6, img: "assets/image/david-warner.jpg", name: "David Warner", country: "AUSTRALIA", points: 789 },

    { rank: 7, img: "assets/image/aaron-finch.jpg", name: "Aaron Finch", country: "AUSTRALIA", points: 767 },

    { rank: 8, img: "assets/image/kane-williamson.jpg", name: "Kane Williamson", country: "NEW ZEALAND", points: 765 },

    { rank: 9, img: "assets/image/joe-root.jpg", name: "Joe Root", country: "ENGLAND", points: 759 },

    { rank: 10, img: "assets/image/quinton-de-kock.jpg", name: "Quinton De Kock", country: "SOUTH AFRICA", points: 755 },

    { rank: 11, img: "assets/image/imam-ul-haq.jpg", name: "Imam-ul-Haq", country: "PAKISTAN", points: 752 },

    { rank: 12, img: "assets/image/shai-hope.jpg", name: "Shai Hope", country: "WEST INDIES", points: 750 },

    { rank: 13, img: "assets/image/jonny-bairstow.jpg", name: "Jonny Bairstow", country: "ENGLAND", points: 730 },

    { rank: 14, img: "assets/image/jason-roy.jpg", name: "Jason Roy", country: "ENGLAND", points: 720 },

    { rank: 15, img: "assets/image/martin-guptill.jpg", name: "Martin Guptill", country: "NEW ZEALAND", points: 711 },
  ];

}
