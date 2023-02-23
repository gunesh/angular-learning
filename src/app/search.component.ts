import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { CustomSearchWrapper } from 'adintel-lib-poc';
import { debounce } from 'lodash';

@Component({
  selector: 'react-custom-search',
  template: '<div id="rootId"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactSearchComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  public rootId = 'rootId';
  public isSearchClear = false;
  @Input() searchData = { columns: [], searchResults: [] };
  @Input() plainQuery: string = '';
  @Output() getColumnDetails = new EventEmitter();
  @Output() handleSearch = new EventEmitter();
  @Output() setSearchString = new EventEmitter();
  @Input() clearSearchData: boolean;
  @Input() changedSearchText: string;
  @Input() isLoading: boolean;
  @Input() showEmptyOption: boolean;

  ngOnInit() {
    this.getColumnDetails.emit();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnDestroy(): void {

  }

  public handleSearchData = (payload: any) => {
    this.handleSearch.emit(payload);
  }


  public handleOnChange = (searchQuery, searchText, isValid) => {
    this.setSearchString.emit({ text: searchText, query: searchQuery, isValid: isValid })
  }

  debouncedSearch = debounce(this.handleSearchData, 600);

  private render() {
    ReactDOM.render(React.createElement(CustomSearchWrapper,
      {
        searchData: this.searchData,
        handleSearchData: this.debouncedSearch,
        plainQuery: '',
        onChange: this.handleOnChange,
        onClearSearch: this.clearSearchData,
        changedSearchText: this.changedSearchText,
        isLoading: this.isLoading,
        showEmptyOption: this.showEmptyOption
      }
    ), document.getElementById(this.rootId));
  }
}