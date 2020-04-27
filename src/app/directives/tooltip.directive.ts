import { Directive, HostListener, TemplateRef, ViewContainerRef, Input, ContentChild, Renderer2, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }

  @Input()
  set appTooltip(input: boolean) {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.renderer.listen(this.elRef.nativeElement.previousSibling, 'mouseenter', this.open);
    this.renderer.listen(this.elRef.nativeElement.previousSibling, 'mouseleave', this.close);
  }

  open(event) {
    console.log(event);
  }

  close(event) {
    console.log(event);
  }

}
