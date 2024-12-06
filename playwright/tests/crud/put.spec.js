import { test, expect } from '@playwright/test';

test("PUT Update Employee", async ({ request }) => {
  const employeeId = 1;
  const response = await request.put(`http://localhost:3000/api/v1/employees/${employeeId}`, {
    data: {
      first_name: "Gaurav",
      last_name: "Jadhav",
      email: "gaurav@example.com",
      phone: "0987654321",
      organization: "TechCorp",
      designation: "Manager",
      salary: 75000,
    }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);  //actual structure of the response

  if (Array.isArray(responseBody)) {
    console.log("Response is an array");
    expect(responseBody[0]).toHaveProperty('id', employeeId); // Check the id of the first element in the array
  } else {
    console.log("Response is an object", responseBody);
  }
});
