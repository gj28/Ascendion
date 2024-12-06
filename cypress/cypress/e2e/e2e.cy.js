describe('End-to-End Test for RMKEC Website', () => {
    it('should navigate through RMKEC website and perform all interactions', () => {
      // Visit the RMKEC homepage
      cy.visit('https://www.rmkec.ac.in/2023/');
      cy.wait(4000);
  
      // Close any initial pop-up
      cy.get('[aria-label="Close"]').click();
  
      // Test Navigation through Slides
      cy.get('[aria-label="Slide 1"]').click();
      cy.get('[aria-label="Slide 2"]').click();
  
      // Test Quick Links - clicking buttons multiple times
      for (let i = 0; i < 3; i++) {
        cy.get('#quick_links button').eq(1).click();
      }
  
      // Test section navigation and link clicks
      cy.contains('section', '28 Years of Excellence28').find('a').click();
      cy.contains('a', 'Vice Chairman').click({ force: true });
      cy.contains('a', 'Management Team').click({ force: true });
      cy.contains('a', 'Vision & Mission').click({ force: true });
      cy.contains('a', 'Quality Policy').click({ force: true });
      cy.get('.topHeader > .container > .row > :nth-child(1) > .site_logo > .logo > .siteName', { timeout: 10000 })
      .should('be.visible') // Ensure the element is visible
      .click(); // Perform the click
    
    
      cy.wait(4000);
      // Close popup after navigation
      cy.get('[aria-label="Close"]').click();
  
      // Interact with Research Carousel - click buttons multiple times
      for (let i = 0; i < 5; i++) {
        cy.get('#researchCarousel button').first().click();
      }
  
      // Interact with Recruitment Carousel - click buttons multiple times
      for (let i = 0; i < 5; i++) {
        cy.get('#recruitCarousel button').first().click();
      }
  
      // Test various links in the navigation menu
      cy.contains('a', 'Administration').click({ force: true });
      cy.contains('a', 'Governing Board').click({ force: true });
      cy.contains('a', 'Advisors').click({ force: true });
      cy.contains('a', 'Principal').click({ force: true });
      cy.contains('a', 'Dean Research').click({ force: true });
      cy.contains('li', 'Committee Anti-Ragging').find('i').click();
      cy.contains('a', 'Planning & Monitoring').click({ force: true });
  
      // Test dropdown links in the navigation menu
      cy.get('.flexrow > .topName_toggle > .togglemenu > .fa', { timeout: 10000 })
      .should('be.visible') // Ensure the element is visible
      .click(); // Click the toggle menu
    
      const sectionSelectors = [
        '#menu-item-474 > [href="#"]', // Replace with the actual selector for "About Us"
        '#menu-item-507 > :nth-child(1)',    // Replace with the actual selector for "Administration"
        '#menu-item-509 > [href="#"]', // Replace with the actual selector for "Academics"
        '#menu-item-178 > [href="#"]', // Replace with the actual selector for "Department"
        '#menu-item-2261 > [href="#"]',       // Replace with the actual selector for "Career Development Centre"
        '#menu-item-18115 > :nth-child(1)',  // Replace with the actual selector for "AICTE IDEA Lab"
        '#menu-item-256 > [href="#"]',    // Replace with the actual selector for "Campus"
        '#menu-item-732 > [href="#"]', // Replace with the actual selector for "Entrepreneurship"
        '#menu-item-667 > [href="#"]',    // Replace with the actual selector for "Accreditation"
        '#menu-item-685 > [href="#"]',       // Replace with the actual selector for "Contact Us"
      ];
      
      // Iterate through each selector and interact with the elements
      sectionSelectors.forEach((selector) => {
        cy.get(selector, { timeout: 10000 }) // Ensure element exists
          .scrollIntoView() // Scroll the element into view
          .should('be.visible') // Check if it's visible
          .click({ force: true }); // Click, forcing if necessary
      });
      
  
// Login Flow: Test the login and reset password features
cy.contains('a', 'RMK Nextgen Faculty Login').click();
cy.get('#inputEmail').type('test@test.com'); // Using the correct selector
cy.get('#inputPassword').type('Pass@123'); // Using the correct selector
cy.contains('button', 'Login').click(); // Finds the button element containing text 'Login'




cy.contains('Wrong Email Id or Password!').should('be.visible'); // Adjust based on the expected message

// Assert successful login (optional, depending on the page)
cy.url().should('eq', 'https://nextgenfaculty.rmkec.ac.in/login.html');

  
// Test forgot password flow
cy.get('#forget').click(); // Click on the "Forgot Password?" link

// Type email into the email input field
cy.get('#email').type('test@test.com'); // Use the correct selector for the email input

// Click the send button to submit the form
cy.get('#forgot').click(); // Click on the "Send" button

// Assert error message or success message

    });
  });
  