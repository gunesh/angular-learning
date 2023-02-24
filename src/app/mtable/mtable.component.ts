import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
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
import MaterialTable from 'material-table';

@Component({
  selector: 'app-table',
  template: '<div id="table"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTableComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  public rootId = 'table';

  @Input() columns = [];
  @Input() data = [];
  @Input() title = 'Test table';
  @Output() onHandleSubMenuClick = new EventEmitter();

  constructor(private router: Router) {
    console.log('Constructor:');
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this.columns, this.data, this.title);
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
    const rootElement = document.getElementById(this.rootId);
    const root = createRoot(rootElement);

    root.render(
      React.createElement(MaterialTable, {
        columns: this.columns,
        data: this.data,
        title: this.title,
      })
    );
  }
}
