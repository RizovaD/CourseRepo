import { test, expect } from "@playwright/test";

test("API test GET Products", async ({ request }) => {
  const requestURL = "https://fakestoreapi.com/products";

  const response = await request.get(requestURL);

  const responseBody = await response.json();

  await expect(response.ok()).toBeTruthy();

  await expect(response.status()).toBe(200);

  await expect(responseBody).toContainEqual(
    expect.objectContaining({
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    })
  );
});

test("API test GET Product by ID", async ({ request }) => {
  await test.step("Send GET request for product with ID 5", async () => {
    const requestURL = "https://fakestoreapi.com/products/5";
    const response = await request.get(requestURL);
    const responseBody = await response.json();

    await test.step("Verify the request was successful", async () => {
      await expect(response.ok()).toBeTruthy();
      await expect(response.status()).toBe(200);
    });

    await test.step("Check specific content in the response", async () => {
      await expect(responseBody).toEqual(
        expect.objectContaining({
          id: 5,
          title: expect.any(String),
          price: expect.any(Number),
        })
      );
    });
  });
});
