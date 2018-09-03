import { SearchModule } from "./search.module";
import { TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DefaultSearchComponent } from "./components/default-search/default-search.component";

describe("SearchModule", () => {
  let searchModule: SearchModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule],
      declarations: [DefaultSearchComponent]
    });
    searchModule = new SearchModule();
  });

  it("should create an instance", () => {
    expect(searchModule).toBeTruthy();
  });
});
