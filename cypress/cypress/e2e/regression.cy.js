function submitForm() {
    cy.iframe('iframe')
      .find('button:contains("Submit")')
      .should('be.visible')
      .click();
  }
  

describe('Test RMKEC Website', () => {
    it('should interact with the website elements', () => {
      cy.visit('https://www.rmkec.ac.in/2023/');
      cy.wait(2000);
      // Close the popup
      cy.get('[aria-label="Close"]').click();
  
      // Click on the menu link and navigation
      cy.get('.flexrow > .topName_toggle > .togglemenu > .fa').click(); // Trigger the menu
      cy.get('a[href="#"]').contains('About Us').click();
      cy.get('a[href="#"]').contains('About Us').click();
      cy.get('a[href="#"]').contains('Administration').click();
      cy.get('a[href="#"]').contains('Administration').click();
      cy.get('a[href="#"]').contains('Academics').click();
      cy.get('a[href="#"]').contains('Academics').click();
      cy.get('a[href="#"]').contains('Department').click();
      cy.get('a[href="#"]').contains('Department').click();
      cy.get('a[href="#"]').contains('Career Development Centre').click();
      cy.get('a[href="#"]').contains('Career Development Centre').click();
      cy.get('a[href="#"]').contains('Campus').click();
      cy.get('a[href="#"]').contains('Campus').click();
      cy.get('a[href="#"]').contains('Entrepreneurship').click();
      cy.get('a[href="#"]').contains('Entrepreneurship').click();
      cy.get('a[href="#"]').contains('Accreditation').click();
      cy.get('a[href="#"]').contains('Accreditation').click();
      cy.get('a[href="#"]').contains('Contact Us').click();
      cy.get('a[href="#"]').contains('Contact Us').click();
  
      // Interact with buttons in the quick links section
      cy.get('#quick_links button').first().click();
      cy.get('#quick_links button').first().click();
      cy.get('#quick_links button').first().click();
  
      // Interact with carousel buttons
      cy.get('#aboutCarousel button').first().click();
      cy.get('#aboutCarousel button').first().click();
      cy.get('#aboutCarousel button').first().click();
      cy.get('#aboutCarousel button').first().click();
  
      cy.get('#researchCarousel button').first().click();
      cy.get('#researchCarousel button').first().click();
      cy.get('#researchCarousel button').first().click();
      cy.get('#researchCarousel button').first().click();
      cy.get('#researchCarousel button').first().click();
      cy.get('#researchCarousel button').first().click();
      cy.get('#researchCarousel button').first().click();
  
      cy.get('#caseStudies button').first().click();
      cy.get('#caseStudies button').first().click();
      cy.get('#caseStudies button').first().click();
      cy.get('#caseStudies button').first().click();
      cy.get('#caseStudies button').first().click();
  
      cy.get('#recruitCarousel button').first().click();
      cy.get('#recruitCarousel button').first().click();
      cy.get('#recruitCarousel button').first().click();
      cy.get('#recruitCarousel button').first().click();
      cy.get('#recruitCarousel button').first().click();
  
      cy.xpath("//li[@id='menu-item-6337']//a[contains(text(),'Contact Us')]")
      .should('be.visible')
      .click();
  
    // Wait for the new page to load
    cy.url().should('include', 'contact-us'); // Validate URL change
    cy.get('.left-menu > :nth-child(2) > a').click();
    cy.wait(5000); // Allow time for the new page to fully render
  
      // Get the iframe and interact with form elements inside it
      cy.get('iframe').first().then(($iframe) => {
        const iframe = $iframe[0];
        const iframeBody = iframe.contentDocument || iframe.contentWindow.document;
  
        // Fill out the form inside the iframe
        cy.wrap(iframeBody).find('[placeholder="Enter your Name"]').click().type('Gaurav')
        .should('have.value', 'Gaurav'); // Verify the value
      
      cy.wrap(iframeBody).find('#type').select('Student')
        .should('have.value', 'Student'); // Verify the selected value
      
      cy.wrap(iframeBody).find('[placeholder="Enter Student Register Number"]').click().type('1234567890')
        .should('have.value', '1234567890'); // Verify the value
      
      cy.wrap(iframeBody).find('[placeholder="Enter your Batch"]').click().type('2022')
        .should('have.value', '2022'); // Verify the value
      
      cy.wrap(iframeBody).find('[placeholder="Enter your Email"]').click().type('gaurav@gmail.com')
        .should('have.value', 'gaurav@gmail.com'); // Verify the value
      
      cy.wrap(iframeBody).find('[placeholder="Enter your Mobile Number"]').click().type('1234567890')
        .should('have.value', '1234567890'); // Verify the value
      
      cy.wrap(iframeBody).find('[placeholder="Enter your Grievence"]').click().type('trtrtrtrtrtrtt')
      
      cy.wrap(iframeBody).find('[placeholder="Enter your Aadhar Number"]').click().type('123456789012')
        .should('have.value', '123456789012'); // Verify the value
      
                // Submit the form
                submitForm();
      });
  
      // Validate the URL
      cy.url().should('eq', 'https://www.rmkec.ac.in/2023/');
    });
  });
  