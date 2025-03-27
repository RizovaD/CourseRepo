import {test, expect} from "@playwright/test";

test("Has logo exist", async({page}) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
//get image by alt text
  const logo = page.getByAltText("Playwright logo").first();
  await expect(logo).toBeVisible();
});

test("Has hading exist", async({page}) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
//locate heading one by locator tag name
  const headingTitle = page.locator("h1");
// log in the test results located element value  
  console.log((await headingTitle.innerText()).valueOf());
  await expect(headingTitle).toBeVisible();
});

// located nav link Docs by role and text
test("Have nav link exist", async({page}) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  const docsLink = page.getByRole("link", {name: "Docs"});
  const apiLink = page.getByRole("link", {name: "API"});
  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test("Clik Community link and check the path", async({page}) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locate nav link Community by role and text
  const comunityLink = page.getByRole("link", {name: "Community"});
  //click the locate element
  await comunityLink.click();
  //expect the cuurent page the have asset url
  await expect(page).toHaveURL("https://playwright.dev/community/welcome");
  

  const headingTwo = page.getByRole("heading", {name: "Ambassadors"});
  await expect(headingTwo).toBeVisible();

});

//class = logosList_zAAF 
test("Check if logo list exist", async({page}) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

// Locate logos list by locator class name syntax
  const lodosListItems = page.locator("ul.logosList_zAAF li");
  
 // Check the count of list item is as expected
 await expect(lodosListItems).toHaveCount(9);
 });