import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultTableComponent } from "./components/default-table/default-table.component";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, NgbPaginationModule.forRoot()],
  declarations: [DefaultTableComponent],
  exports: [DefaultTableComponent]
})
export class TableModule {
  page = 4;
}
