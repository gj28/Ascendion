describe("PUT Update Employee", () => {
    it("should update employee details", () => {
      const employeeId = 1;
      cy.request({
        method: 'PUT',
        url: `http://localhost:3000/api/v1/employees/${employeeId}`,
        body: {
          first_name: "Jane",
          last_name: "Smith",
          email: "jane.smith@example.com",
          phone: "0987654321",
          organization: "TechCorp",
          designation: "Manager",
          salary: 75000,
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Check the status code
        const responseBody = response.body;
        cy.log(JSON.stringify(responseBody));  // Log the response body
  
        if (Array.isArray(responseBody)) {
          cy.log("Response is an array");
          expect(responseBody[0]).to.have.property('id', employeeId); // Check the id of the first element
        } else {
          cy.log("Response is an object", JSON.stringify(responseBody));
        }
      });
    });
  });
  