import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scrollToTop();
    this.listenToScroll();
  }

  scrollToTop() {
    window.scrollTo({top: 0});
  }

  listenToScroll() {
    if (screen.width > 576) {
      const sticky = document.getElementById('stickyContact');
      const stickyMobileContact = document.getElementById('stickyContactMobile');
      const footer = document.getElementsByTagName('footer')[0];

      if (!sticky) {
        return;
      }

      const offset = sticky.offsetTop;
      const footerOffset = footer.offsetTop;

      const listenScroll = () => {
        if ((window.pageYOffset >= offset) && (window.pageYOffset <= (footerOffset - screen.height))) {
          sticky.classList.add('sticky');
        } else {
          sticky.classList.remove('sticky');
        }
      };
      window.onscroll = () => listenScroll();
    } else {
      const stickyMobileContact = document.getElementById('stickyContactMobile');
      const footer = document.getElementsByTagName('footer')[0];

      if (!stickyMobileContact) {
        return;
      }

      const offset = stickyMobileContact.offsetTop;
      const footerOffset = footer.offsetTop;

      const listenScroll = () => {
        if ((window.pageYOffset >= offset) && (window.pageYOffset <= (footerOffset - (screen.height / 2)))) {
          stickyMobileContact.classList.add('sticky-mobile');
        } else {
          stickyMobileContact.classList.remove('sticky-mobile');
        }
      };
      window.onscroll = () => listenScroll();
    }
  }

}
