import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { Item } from "githubapi";

@Component({
  selector: "app-default-table",
  templateUrl: "./default-table.component.html",
  styleUrls: ["./default-table.component.scss"]
})
export class DefaultTableComponent implements OnInit, OnChanges {
  @Input()
  metadata = {
    page: 1,
    maxSize: 5,
    boundaryLinks: true,
    total: 0
  };
  @Input()
  items = {};
  @Output()
  pageChanged = new EventEmitter();

  _items: Item[];
  isDataAvailable: Boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const currVal = changes.items.currentValue;
    this._items = currVal;
    this.isDataAvailable = true;
    if (currVal && currVal.length === 0) {
      this.isDataAvailable = false;
    }
  }

  onPageChange(e: any) {
    this.pageChanged.emit({ value: e });
  }
}
