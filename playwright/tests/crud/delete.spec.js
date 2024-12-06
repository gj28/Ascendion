import { test, expect } from '@playwright/test';

test("DELETE Employee", async ({ request }) => {
  const employeeId = 7; 
  const response = await request.delete(`http://localhost:3000/api/v1/employees/${employeeId}`);

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody).toHaveProperty('message', 'Employee successfully deleted');
});
