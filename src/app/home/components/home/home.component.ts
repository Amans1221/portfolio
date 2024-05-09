import { Component, AfterViewInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('countAnimation', [
      state('start', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      state('end', style({
        opacity: 0,
        transform: 'scale(1.5)'
      })),
      transition('start => end', [
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  faCoffee = faCoffee;
  currentSlideIndex = 0;
  currentCount: number = 0;
  currentCount1: number = 0;
  currentCount2: number = 0;
  currentCount3: number = 0;
  counterAnimationState: string = 'start';
  constructor() { }

  ngAfterViewInit(): void {
    // Auto slide the carousel every 8 seconds
    setInterval(() => {
      this.nextSlide();
    }, 8000);

    // Call animateCounters after view initialization
    this.startCounterAnimation();
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
  startCounterAnimation(): void {
    // Set the final count
    const finalCount = 5;
    const finalCount1 = 50;
    const finalCount2 = 100;
    const finalCount3 = 150;


    // Calculate increment value based on final count and animation duration
    const increment = finalCount / 60; // Assuming 60 frames per second
    const increment1 = finalCount1 / 60; // Assuming 60 frames per second
    const increment2 = finalCount2 / 60; // Assuming 60 frames per second
    const increment3 = finalCount3 / 60; // Assuming 60 frames per second


    // Start counting animation
    const timer = setInterval(() => {
      this.currentCount += increment;
      this.currentCount1 += increment1;
      this.currentCount2 += increment2;
      this.currentCount3 += increment3;


      // End animation when final count is reached
      if (this.currentCount >= finalCount) {
        clearInterval(timer);
        this.currentCount = finalCount;
        this.counterAnimationState = 'end';
      }
      if (this.currentCount1 >= finalCount1) {
        clearInterval(timer);
        this.currentCount1 = finalCount1;
        this.counterAnimationState = 'end';
      }
      if (this.currentCount2 >= finalCount2) {
        clearInterval(timer);
        this.currentCount2 = finalCount2;
        this.counterAnimationState = 'end';
      }
      if (this.currentCount3 >= finalCount3) {
        clearInterval(timer);
        this.currentCount3 = finalCount3;
        this.counterAnimationState = 'end';
      }
    }, 2000 / 60); // 60 frames per second
  }
  
}
