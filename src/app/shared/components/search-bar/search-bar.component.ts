import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit,OnDestroy {
  @Input() placeholder: string;
  @Output() searchChange = new EventEmitter<string>();
  searchForm : FormGroup;
  searchFocused = false;
  subscriptions: Subscription = new Subscription();

  constructor(private _formBuilder: FormBuilder) {
    
  }

  /**
   * @description search bar form
   * @memberof SearchBarComponent
   */
  ngOnInit() {
    this.searchForm = this._formBuilder.group({
      searchText: ['']
    });

    //! adds subscription on form changes
    this.subscriptions.add(
      this.searchForm.get('searchText')
        .valueChanges.pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((changedFormValue) => {
          this.onSearchSubmit();
        })
    );
  }

  onSearchSubmit() {
    this.searchChange.emit(this.searchForm.value.searchText);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
