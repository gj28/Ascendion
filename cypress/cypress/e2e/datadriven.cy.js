// Declare the submitForm function outside of the forEach loop
function submitForm() {
    cy.iframe('iframe')
      .find('button:contains("Submit")')
      .should('be.visible')
      .click();
  }
  
  describe('Data-driven login test with text verification', () => {
    it('Should test login functionality for multiple users', () => {
      // Import the data from the JSON file
      const loginData = require('../fixtures/data.json');
    
      // Visit the initial page
      cy.visit('https://www.rmkec.ac.in/2023/');
    
      // Wait for the initial page to load
      cy.wait(1000);
    
      // Close the initial popup
      cy.get('button[aria-label="Close"]').click();
    
      // Verify the 'CP Tracker' link exists and click it
      cy.xpath("//li[@id='menu-item-6337']//a[contains(text(),'Contact Us')]")
        .should('be.visible')
        .click();
    
      // Wait for the new page to load
      cy.url().should('include', 'contact-us'); // Validate URL change
      cy.get('.left-menu > :nth-child(2) > a').click();
      cy.wait(5000); // Allow time for the new page to fully render
    
      // Loop through each user in the data
      loginData.userData.forEach((user) => { // Use userData instead of loginData
        // Fill out the form with user data
        cy.iframe('iframe')
          .find('input[placeholder="Enter your Name"]')
          .type(user.name);
        cy.iframe('iframe')
          .find('#type')
          .select(user.type);
        cy.iframe('iframe')
          .find('input[placeholder="Enter Student Register Number"]')
          .type(user.registerNumber);
        cy.iframe('iframe')
          .find('#department')
          .select(user.department);
        cy.iframe('iframe')
          .find('input[placeholder="Enter your Batch"]')
          .type(user.batch);
        cy.iframe('iframe')
          .find('input[placeholder="Enter your Email"]')
          .type(user.email);
        cy.iframe('iframe')
          .find('input[placeholder="Enter your Mobile Number"]')
          .type(user.mobileNumber);
        cy.iframe('iframe')
          .find('textarea[placeholder="Enter your Grievence"]')
          .should('be.visible')
          .type(user.grievance);
        cy.iframe('iframe')
          .find('input[placeholder="Enter your Aadhar Number"]')
          .type(user.aadharNumber);
        
        // Submit the form
        submitForm();
  
        // Click the link and wait for the new page to load
        cy.get('.topHeader > .container > .row > :nth-child(1) > .site_logo > .logo > .siteName').click();
      // Wait for the initial page to load
      cy.wait(1000);
    
      // Close the initial popup
      cy.get('button[aria-label="Close"]').click();
    
      // Verify the 'CP Tracker' link exists and click it
      cy.xpath("//li[@id='menu-item-6337']//a[contains(text(),'Contact Us')]")
        .should('be.visible')
        .click();
    
      // Wait for the new page to load
      cy.url().should('include', 'contact-us'); // Validate URL change
      cy.get('.left-menu > :nth-child(2) > a').click();
      cy.wait(5000); // Allow time for the new page to fully render
      });
    });
  });
  