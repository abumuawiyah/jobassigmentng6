import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { GithubapiService, Item } from "githubapi";
import { Table } from "./dashboard";
import { Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public tableMetadata: Table = {
    page: 1,
    maxSize: 5,
    boundaryLinks: true,
    total: 0
  };
  public tableItems: Observable<Item>;
  private page = 1;
  private keyword = "react";

  constructor(private githubServ: GithubapiService) {}

  ngOnInit() {
    this.getRepos({
      page: this.page,
      keyword: this.keyword
    });
  }

  getRepos(config: any) {
    this.githubServ.getReposByKeyword(config).subscribe(res => {
      this.tableItems = res.items;
      this.tableMetadata.total = res.total_count;
    });
  }

  onPagingButtonClick(e: any) {
    this.page = e.value;
    this.getRepos({
      page: e.value,
      keyword: this.keyword
    });
  }

  onSearchEnter(e: any) {
    this.keyword = e.value;
    this.getRepos({
      page: this.page,
      keyword: e.value
    });
  }
}
