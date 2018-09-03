import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DefaultSearchComponent } from "./default-search.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

describe("DefaultSearchComponent", () => {
  let component: DefaultSearchComponent;
  let fixture: ComponentFixture<DefaultSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule],
      declarations: [DefaultSearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should", async(() => {
    spyOn(component, "onKeydown");

    const input = fixture.debugElement.nativeElement.querySelector("input");
    const event = new KeyboardEvent("keydown", {
      key: "Enter"
    });
    input.dispatchEvent(event);

    fixture.whenStable().then(() => {
      expect(component.onKeydown).toHaveBeenCalled();
    });
  }));
});
