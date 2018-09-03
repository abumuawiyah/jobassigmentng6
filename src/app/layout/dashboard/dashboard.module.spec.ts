import { DashboardModule } from "./dashboard.module";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { TableModule, SearchModule } from "../../shared";
import { TestBed } from "@angular/core/testing";
import { GithubapiModule } from "githubapi";
import { DashboardComponent } from "./dashboard.component";

describe("DashboardModule", () => {
  let dashboardModule: DashboardModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        DashboardRoutingModule,
        TableModule,
        SearchModule,
        GithubapiModule
      ],
      declarations: [DashboardComponent]
    });
    dashboardModule = new DashboardModule();
  });

  it("should create an instance", () => {
    expect(dashboardModule).toBeTruthy();
  });
});
