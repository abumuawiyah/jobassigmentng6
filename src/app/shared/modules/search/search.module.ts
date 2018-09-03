import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultSearchComponent } from "./components/default-search/default-search.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DefaultSearchComponent],
  exports: [DefaultSearchComponent]
})
export class SearchModule {}
