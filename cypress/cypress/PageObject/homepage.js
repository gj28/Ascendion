class HomePage {
    closeModal() {
      cy.get('[aria-label="Close"]').then(($button) => {
        if ($button.length) {
          cy.wrap($button).click();
        }
      });
    }
    verifyScrollingText(expectedText) {
      cy.get('.ditty-item__content')
        .invoke('text')
        .then((actualText) => {
          const normalizedActualText = actualText.replace(/\s+/g, ' ').trim();
          const normalizedExpectedText = expectedText.replace(/\s+/g, ' ').trim();
          expect(normalizedActualText).to.equal(normalizedExpectedText);
        });
    }
    
  
    interactWithSlide(slideNumber) {
      cy.get(`[aria-label="Slide ${slideNumber}"]`)
        .should('be.visible')
        .click();
    }
  
    interactWithQuickLinks() {
      cy.get('#quick_links').find('button').first().click();
    }
  
    interactWithCarousel(selector) {
      cy.get(selector).first().click();
    }
    
  
    navigateToGrievances() {
      // Click the toggle menu
      cy.get('.flexrow > .topName_toggle > .togglemenu > .fa', { timeout: 10000 })
        .should('be.visible') // Ensure the element is visible
        .click();
    
      // Navigate through sections
      const sectionSelectors = [
        '#menu-item-685 > [href="#"]', // "Contact Us"
      ];
    
      sectionSelectors.forEach((selector) => {
        cy.get(selector, { timeout: 10000 }).should('be.visible').click();
      });
    
      // Specific interaction with "Grievances"
      cy.get('#menu-item-683 > a', { timeout: 5000 })
        .scrollIntoView() // Scroll to the element
        .should('be.visible') // Verify the element is visible
        .click(); // Click the "Grievances" link
    }
    
    
    
  
    navigateBackToHomepage() {
      cy.get('[role="link"][name="R.M.K. ENGINEERING COLLEGE (an autonomous institution)"]')
        .should('be.visible')
        .click();
    }
  }
  
  export default HomePage;
  