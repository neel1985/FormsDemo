import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMdlMouseBtnClick]'
})
export class MdlMouseBtnClickDirective {

  @Output('appMdlMouseBtnClick') middleclick = new EventEmitter();

  constructor() {}

  @HostListener('mouseup', ['$event'])
  middleclickEvent(event) {
    if (event.which === 2) {
      this.middleclick.emit(event);
    }
  }

}
