import HomePage from '../PageObject/homepage';
import GrievanceForm from '../PageObject/grievance';

describe('Test with dynamic slide interaction and grievance form handling', () => {
  let homePage;
  let grievanceForm;

  before(() => {
    // Initialize the HomePage and GrievanceForm instances
    homePage = new HomePage();
    grievanceForm = new GrievanceForm();
  });

  it('should perform interactions and submit grievance form', () => {
    cy.visit('https://www.rmkec.ac.in/2023/');
    cy.wait(4000);

    // Close any modal or overlay if present
    homePage.closeModal();

    // Interact with slides 1 to 20
    for (let i = 1; i <= 20; i++) {
      homePage.interactWithSlide(i); // Interact with each slide
    }
    // Verify the scrolling text
    const expectedText = `
      Dear Sir/Madam As per our District Collector’s announcement and our Management instructions, 
      tomorrow (30.11.2024, Saturday) is declared as a holiday due to rain. 
      End Semester Arrear Examination scheduled on 30.11.2024 is postponed and the revised date will be announced later. 
      Thanks and regards 
      Junaid
    `.trim();
    homePage.verifyScrollingText(expectedText);

    // Quick Links interactions
    homePage.interactWithQuickLinks();

    // About Carousel Interaction
 homePage.interactWithCarousel('#aboutCarousel .carousel-control-prev-icon');

    // Research Carousel Interaction
    homePage.interactWithCarousel('#aboutCarousel .carousel-control-prev-icon');


    // Navigation through Menu Links
    homePage.navigateToGrievances();

    // Grievance Form Interaction inside iframe using GrievanceForm class
    const details = {
      name: 'Gaurav',
      type: 'Student',
      registerNumber: '1234567890',
      department: 'Computer Science',
      batch: '12',
      email: 'gaurav@gmail.com',
      mobileNumber: '1234567890',
      grievance: 'test test test',
      aadharNumber: '123456789012'
    };
    grievanceForm.fillGrievanceForm(details);
    grievanceForm.submitForm();

    // Verify redirection to homepage
    grievanceForm.verifyRedirectionToHomePage();

    // Navigate back to the homepage
    homePage.navigateBackToHomepage();
  });
});
