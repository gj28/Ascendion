import { test, expect } from '@playwright/test';

test("GET Employee by ID", async ({ request }) => {
  const employeeId = 1;
  const response = await request.get(`http://localhost:3000/api/v1/employees/${employeeId}`);

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);

  expect(Array.isArray(responseBody)).toBe(true); 
  expect(responseBody[0]).toHaveProperty('id', employeeId); 
});
