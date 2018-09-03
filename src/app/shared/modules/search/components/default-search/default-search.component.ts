import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-default-search",
  templateUrl: "./default-search.component.html",
  styleUrls: ["./default-search.component.scss"]
})
export class DefaultSearchComponent implements OnInit {
  @Input()
  metadata;
  @Output()
  keyPressed = new EventEmitter();

  searchForm = new FormGroup({
    keyword: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}

  onKeydown(e) {
    this.keyPressed.emit({ value: this.searchForm.value.keyword });
  }
}
