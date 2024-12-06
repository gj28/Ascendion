const { expect } = require('@playwright/test');

class GrievanceForm {
    constructor(page) {
        this.page = page;
        this.iframeLocator = 'iframe';
        this.nameInput = 'input[placeholder="Enter your Name"]';
        this.typeSelect = '#type';
        this.registerNumberInput = 'input[placeholder="Enter Student Register Number"]';
        this.departmentSelect = '#department';
        this.batchInput = 'input[placeholder="Enter your Batch"]';
        this.emailInput = 'input[placeholder="Enter your Email"]';
        this.mobileNumberInput = 'input[placeholder="Enter your Mobile Number"]';
        this.grievanceInput = 'textarea[placeholder="Enter your Grievence"]';
        this.aadharNumberInput = 'input[placeholder="Enter your Aadhar Number"]';
        this.submitButton = 'button:has-text("Submit")';
        this.homepageElement = '[role="link"][name="R.M.K. ENGINEERING COLLEGE (an autonomous institution)"]'; // Adjust this to an element on the homepage
    }

    async fillGrievanceForm(details) {
        const frame = await this.page.frameLocator(this.iframeLocator);

        // Ensure all elements are loaded
        await frame.locator(this.nameInput).waitFor();

        // Fill form fields
        await frame.locator(this.nameInput).fill(details.name);
        await frame.locator(this.typeSelect).selectOption(details.type);
        await frame.locator(this.registerNumberInput).fill(details.registerNumber);
        await frame.locator(this.departmentSelect).selectOption(details.department);
        await frame.locator(this.batchInput).fill(details.batch);
        await frame.locator(this.emailInput).fill(details.email);
        await frame.locator(this.mobileNumberInput).fill(details.mobileNumber);
        await frame.locator(this.grievanceInput).waitFor({ state: 'visible' }); // Ensure textarea is visible
        await frame.locator(this.grievanceInput).fill(details.grievance);
        await frame.locator(this.aadharNumberInput).fill(details.aadharNumber);
    }

    async submitForm() {
        const frame = await this.page.frameLocator(this.iframeLocator);

        // Ensure the submit button is visible and clickable
        await frame.locator(this.submitButton).waitFor();
        await frame.locator(this.submitButton).click();
    }

    // Verify if the user is redirected to the homepage
    async verifyRedirectionToHomePage() {
        // Option 1: Verify URL
        await expect(this.page).toHaveURL('https://www.rmkec.ac.in/2023/'); // Adjust this to the homepage URL

        // Option 2: Verify if an element on the homepage is visible (like a link)
        await expect(this.page.locator(this.homepageElement)).toBeVisible();
    }
}

module.exports = GrievanceForm;
