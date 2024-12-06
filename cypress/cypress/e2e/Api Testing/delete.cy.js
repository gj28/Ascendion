describe("DELETE Employee", () => {
    it("should delete an employee by ID", () => {
      const employeeId = 3;
  
      cy.request({
        method: 'DELETE',
        url: `http://localhost:3000/api/v1/employees/${employeeId}`,
      }).then((response) => {
        expect(response.status).to.eq(200); // Check the status code
        const responseBody = response.body;
        cy.log(JSON.stringify(responseBody));  // Log the response body
  
        expect(responseBody).to.have.property('message', 'Employee successfully deleted'); // Check if the message is as expected
      });
    });
  });
  