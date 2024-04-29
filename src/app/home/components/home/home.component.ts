import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  faCoffee = faCoffee;


  currentSlideIndex = 0;
  constructor() { }

  ngOnInit(): void {
    // Auto slide the carousel every 8 seconds
    setInterval(() => {
      this.nextSlide();
    }, 8000);

    // Call animateCounters after DOM content is loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.animateCounters();
    });
  }

  nextSlide(): void {
    const slides = document.querySelectorAll('.carousel-item') as NodeListOf<Element>;
    const totalSlides = slides.length;

    slides.forEach((slide: Element, index: number) => {
      if (index === this.currentSlideIndex) {
        slide.classList.remove('active');
      }
    });

    this.currentSlideIndex = (this.currentSlideIndex + 1) % totalSlides;

    slides.forEach((slide: Element, index: number) => {
      if (index === this.currentSlideIndex) {
        slide.classList.add('active');
      }
    });
  }

  animateCounters(): void {
    const counters = document.querySelectorAll('.number');

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-number') || '0', 10);
      const updateCount = () => {
        const count = +(counter as HTMLElement).innerText;

        const inc = target / 200;

        if (count < target) {
          (counter as HTMLElement).innerText = Math.ceil(count + inc).toString();
          setTimeout(updateCount, 20);
        } else {
          (counter as HTMLElement).innerText = target.toString();
        }
      };

      updateCount();
    });
  }
}
