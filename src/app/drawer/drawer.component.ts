import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from '@angular/router';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Drawer } from 'adintel-lib-poc';

@Component({
  selector: 'app-drawer',
  template: '<div id="drawer"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  public rootId = 'drawer';
  @Input() menuItems = [];
  @Input() menuLocation = {};
  @Input() showMenuBar: boolean;
  @Output() onHandleSubMenuClick = new EventEmitter();

  constructor(private router: Router) {
    console.log('Constructor:')
   }

  ngOnInit(): void {
    console.log('ngOnInit:')
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {}

  

  public onSubMenuClick = (key) => {
    this.onHandleSubMenuClick.emit(key);
  };

  private render() {
    ReactDOM.render(
      React.createElement(Drawer, {
        menuItems: this.menuItems,
        menuLocation: this.menuLocation,
        onSubMenuClick: this.onSubMenuClick,
        showMenuBar: this.showMenuBar,
      }),
      document.getElementById(this.rootId)
    );
  }
}
