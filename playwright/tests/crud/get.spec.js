import { test, expect } from '@playwright/test';

test("GET All Employees", async ({ request }) => {
  const response = await request.get('http://localhost:3000/api/v1/employees');

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(Array.isArray(responseBody)).toBeTruthy();
});
