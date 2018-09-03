import { TableModule } from "./table.module";
import { TestBed } from "@angular/core/testing";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { DefaultTableComponent } from "./components/default-table/default-table.component";

describe("TableModule", () => {
  let tableModule: TableModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, NgbPaginationModule.forRoot()],
      declarations: [DefaultTableComponent]
    });
    tableModule = new TableModule();
  });

  it("should create an instance", () => {
    expect(tableModule).toBeTruthy();
  });
});
