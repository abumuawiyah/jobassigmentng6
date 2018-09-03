import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefaultTableComponent } from "./default-table.component";
import { CommonModule } from "@angular/common";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

describe("DefaultTableComponent", () => {
  let component: DefaultTableComponent;
  let fixture: ComponentFixture<DefaultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, NgbPaginationModule.forRoot()],
      declarations: [DefaultTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should", async(() => {
    spyOn(component, "onPageChange");

    const ahref = fixture.debugElement.nativeElement.querySelector("a");
    ahref.click();

    fixture.detectChanges();
  }));
});
