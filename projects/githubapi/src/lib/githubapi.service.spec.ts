import { TestBed, inject } from "@angular/core/testing";

import { GithubapiService } from "./githubapi.service";
import { GithubapiComponent } from "./githubapi.component";
import { HttpClientModule } from "@angular/common/http";

describe("GithubapiService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GithubapiComponent],
      providers: [GithubapiService]
    });
  });

  it("should be created", inject(
    [GithubapiService],
    (service: GithubapiService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("expects service to fetch data", inject(
    [GithubapiService],
    (service: GithubapiService) => {
      service
        .getReposByKeyword({
          page: 1,
          keyword: "angular"
        })
        .subscribe(res => {
          expect(res.items[0].name).toBe("angular");
          expect(res.items.length).toBe(10);
        });
    }
  ));
});
