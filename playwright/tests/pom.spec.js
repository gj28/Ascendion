const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homepage');
const GrievanceForm = require('../pages/Grievance');

test('test with dynamic slide interaction and grievance form handling', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await page.goto('https://www.rmkec.ac.in/2023/');

    // Close any modal or overlay if present
    await homePage.closeModal();

    // Interact with slides 1 to 20
    for (let i = 1; i <= 20; i++) {
        await homePage.interactWithSlide(i);  // Interact with each slide
    }

    // Verify the scrolling text
    const expectedText = `
      Dear Sir/Madam As per our District Collector’s announcement and our Management instructions, 
      tomorrow (30.11.2024, Saturday) is declared as a holiday due to rain. 
      End Semester Arrear Examination scheduled on 30.11.2024 is postponed and the revised date will be announced later. 
      Thanks and regards 
      Junaid
    `.trim();
    await homePage.verifyScrollingText(expectedText);

    // Quick Links interactions
    await homePage.interactWithQuickLinks();

    // About Carousel Interaction
    await homePage.interactWithCarousel(homePage.aboutCarouselButtons);

    // Research Carousel Interaction
    await homePage.interactWithCarousel(homePage.researchCarouselButtons);

    // Navigation through Menu Links
    await homePage.navigateToGrievances();

    // Grievance Form Interaction inside iframe using GrievanceForm class
    const grievanceForm = new GrievanceForm(page);
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
    await grievanceForm.fillGrievanceForm(details);
    await grievanceForm.submitForm();

    // Verify redirection to homepage
    await grievanceForm.verifyRedirectionToHomePage();

    // Navigate back to the homepage
    await homePage.navigateBackToHomepage();
});
