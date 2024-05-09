import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyles(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyStyles(false);
  }

  private applyStyles(isHovering: boolean) {
    const cardBody = this.el.nativeElement.querySelector('.card-body');
    const svgIcons = this.el.nativeElement.querySelectorAll('.w-6.h-6');
    const textCenter = this.el.nativeElement.querySelector('.text'); // Selecting the element with the text-center class

    if (isHovering) {
      this.renderer.setStyle(cardBody, 'background-color', '#b1b493');
      this.renderer.setStyle(cardBody, 'color', 'white');
      this.renderer.setStyle(textCenter, 'text-align', 'center');
      this.renderer.setStyle(textCenter, 'background-color', '#b1b493'); // Setting text-align to center when hovering
       // Setting text-align to center when hovering
      svgIcons.forEach((icon: HTMLElement) => {
        this.renderer.setStyle(icon, 'background-color', 'white');
        this.renderer.setStyle(icon, 'color', '#b1b493');
        this.renderer.setStyle(icon, 'border-color', '#b1b493');
      });
    } else {
      this.renderer.removeStyle(cardBody, 'background-color');
      this.renderer.removeStyle(cardBody, 'color');
      this.renderer.removeStyle(textCenter, 'text-align'); // Removing text-align style when not hovering
      this.renderer.removeStyle(textCenter, 'background-color'); 
      svgIcons.forEach((icon: HTMLElement) => {
        this.renderer.setStyle(icon, 'background-color','#b1b493');
        this.renderer.setStyle(icon, 'color','white');
        this.renderer.setStyle(icon, 'border-color','#b1b493');
      });
    }
  }
}
