import { NgModule } from "@angular/core";
import { GithubapiComponent } from "./githubapi.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  declarations: [GithubapiComponent],
  exports: [GithubapiComponent]
})
export class GithubapiModule {}
