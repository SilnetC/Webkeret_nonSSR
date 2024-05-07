import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output()
  selectedMenu: EventEmitter<string> = new EventEmitter();

  @Output()
  onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onLogout: EventEmitter<boolean> = new EventEmitter();

  @Input()
  currentPage: string = '';

  @Input()
  loggedUser?: firebase.default.User | null;
    
  menuSwitch() {
    this.selectedMenu.emit(this.currentPage);
  }

  close(logout?: boolean) {
    this.onCloseSidenav.emit(true);
    if (logout === true) {
      this.onLogout.emit(logout);
    }
  }
}
