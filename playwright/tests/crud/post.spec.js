import { test, expect } from '@playwright/test';

test("POST Create Employee", async ({ request }) => {
  const response = await request.post('http://localhost:3000/api/v1/employees', {
    data: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      organization: "TechCorp",
      designation: "Engineer",
      salary: 60000,
    }
  });

  expect(response.status()).toBe(200); 
  const responseBody = await response.json();
  console.log(responseBody);
});
