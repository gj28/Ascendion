class GrievanceForm {
    fillGrievanceForm(details) {
      cy.frameLoaded('iframe'); // Ensure iframe is loaded
  
      // Fill form fields
      cy.iframe('iframe')
        .find('input[placeholder="Enter your Name"]')
        .type(details.name);
      cy.iframe('iframe')
        .find('#type')
        .select(details.type);
      cy.iframe('iframe')
        .find('input[placeholder="Enter Student Register Number"]')
        .type(details.registerNumber);
      cy.iframe('iframe')
        .find('#department')
        .select(details.department);
      cy.iframe('iframe')
        .find('input[placeholder="Enter your Batch"]')
        .type(details.batch);
      cy.iframe('iframe')
        .find('input[placeholder="Enter your Email"]')
        .type(details.email);
      cy.iframe('iframe')
        .find('input[placeholder="Enter your Mobile Number"]')
        .type(details.mobileNumber);
      cy.iframe('iframe')
        .find('textarea[placeholder="Enter your Grievence"]')
        .should('be.visible')
        .type(details.grievance);
      cy.iframe('iframe')
        .find('input[placeholder="Enter your Aadhar Number"]')
        .type(details.aadharNumber);
    }
  
    submitForm() {
      cy.iframe('iframe')
        .find('button:contains("Submit")')
        .should('be.visible')
        .click();
    }
  
    verifyRedirectionToHomePage() {
      // Verify URL
      cy.url().should('eq', 'https://www.rmkec.ac.in/2023/');
  
      // Verify if an element on the homepage is visible (like a link)
      cy.get('[role="link"][name="R.M.K. ENGINEERING COLLEGE (an autonomous institution)"]')
        .should('be.visible');
    }
  }
  
  export default GrievanceForm;
  