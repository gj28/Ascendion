describe("GET Employee by ID", () => {
    it("should get employee details by ID", () => {
      const employeeId = 1;
  
      cy.request({
        method: 'GET',
        url: `http://localhost:3000/api/v1/employees/${employeeId}`,
      }).then((response) => {
        expect(response.status).to.eq(200); // Check the status code
        const responseBody = response.body;
        cy.log(JSON.stringify(responseBody));  // Log the response body
  
        expect(Array.isArray(responseBody)).to.be.true; // Check if response is an array
        expect(responseBody[0]).to.have.property('id', employeeId); // Check the id of the first element
      });
    });
  });
  