import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NgbCarouselModule,
  NgbAlertModule,
  NgbPaginationModule,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { TableModule } from "../../shared/modules/table/table.module";
import { SearchModule } from "../../shared/modules/search/search.module";
import { GithubapiModule } from "githubapi";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule,
    SearchModule,
    GithubapiModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
