import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'section.container',
})
export class ContainerDirective {

  private colors = colorGenerator();
  private boxColor = null;

  @HostBinding('style.background-color')
  private color: string;

  @HostBinding('title')
  private get title() {
    return `${this.color ? this.color : 'Blank'} box`;
  }

  @HostListener('mouseover')
  private onMouseOver() {
    this.color = this.boxColor;
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.color = null;
  }

 
}

