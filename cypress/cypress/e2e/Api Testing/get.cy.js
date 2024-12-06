describe("GET All Employees", () => {
    it("should get all employee details", () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/employees',
      }).then((response) => {
        expect(response.status).to.eq(200); // Check the status code
        const responseBody = response.body;
        cy.log(JSON.stringify(responseBody));  // Log the response body
  
        expect(Array.isArray(responseBody)).to.be.true; // Check if the response is an array
      });
    });
  });
  