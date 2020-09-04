import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faPinterest, faYoutube, faAndroid, faFirefoxBrowser, faApple } from '@fortawesome/free-brands-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegModalComponent } from '../reg-modal/reg-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private modalService: NgbModal) { }

  public gowithmodal() {
    this.modalService.open(RegModalComponent, { windowClass: 'dark-modal' });
  };


  logoimg: string = "assets/image/cbz-logo.png";

  // Icons
  public fafacebook = faFacebookF;
  public fatwitter = faTwitter;
  public fapinterest = faPinterest;
  public fayoutube = faYoutube;
  public faandroid = faAndroid;
  public fafirefoxBrowser = faFirefoxBrowser;
  public faapple = faApple;

}
