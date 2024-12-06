describe("POST Create Employee", () => {
    it("should create a new employee", () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/employees',
        body: {
          first_name: "Gaurav",
          last_name: "Jadhav",
          email: "gauravj@example.com",
          phone: "1234567890",
          organization: "TechCorp",
          designation: "Engineer",
          salary: 60000,
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Check the status code
        const responseBody = response.body;
        cy.log(JSON.stringify(responseBody));  // Log the response body
      });
    });
  });
  