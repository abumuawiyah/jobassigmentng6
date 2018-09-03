# Assignment
- It will call search API when user press `Enter` [done]
- User can navigate through the list using pagination. Total 10 items per list. [done]
- Each item will have - Full name, description, language, total stars and update date [done]
- If no result, notify user with appropriate message [done]
- Extra credit if using either Angular (v2-v6), React or Vue, and also if included unit test. [done]

## Stack
- angular 6
- CLI 6
- BootStrap 4 and ngb-bootstrap

### Reference
[SB Admin Angular 6](https://github.com/start-angular/SB-Admin-BS4-Angular-6)
This is my favorite scaffold as it's co-operation works between Angular-team with BootStrap-team.

## Kick-start
Please install yarn as most of cmd use yarn. 

> i am using nodeJS v-8.9.3

### Follow below steps
run yarn
```bash
yarn
```

> i have created shortcuts for serve, build & test

serve
```based
yarn start
```

build rhb-ng6 app
```based
yarn run build-app
```

build githubapi library
```based
yarn run build-lib
```

test rhb-ng6 app
```based
yarn run test-app
```

test githubapi lib
```based
yarn run test-lib
```

## Pattern used
used smart-dumb component. Sample smart component is layout/dashboard.component and sample dumb components is table-default and search-default component. 

## Description
I am creating githubapi as a library that can be used across organization (used in multiple projects). Library created using CLI (ng g library githubapi). And I also made severals example of reusability using "Least power design principle":

- header-component is reusable component in layout and its children only.
- table-default and search-default reusable component in rhb-ng6 project only

> All components, modules and services is using CLI as a result, all created items also create with unit-test. 
> I have create 3 custom tests in table-default (test when click the pagers)

```javascript
it("should", async(() => {
    spyOn(component, "onPageChange");

    const ahref = fixture.debugElement.nativeElement.querySelector("a");
    ahref.click();

    fixture.detectChanges();
 }));
```

> search-default (test when press the keyboard enter)

```javascript
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
```

> and in /projects/githubapi/src/lib/githubapi.service (test fetching data)

```javascript
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
```
