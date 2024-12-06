const { expect } = require('@playwright/test'); // Import expect

class HomePage {
    constructor(page) {
        this.page = page;
        this.closeModalButton = this.page.getByLabel('Close');
        this.slides = [];
        for (let i = 1; i <= 20; i++) {
            this.slides.push(this.page.locator(`[aria-label="Slide ${i}"]`));
        }
        this.scrollingText = this.page.locator('.ditty-item__content');
        this.quickLinks = this.page.locator('#quick_links').getByRole('button');
        this.aboutCarouselButtons = this.page.locator('#aboutCarousel').getByRole('button');
        this.researchCarouselButtons = this.page.locator('#researchCarousel').getByRole('button');
        this.aboutUsLink = this.page.getByRole('link', { name: 'About Us', exact: true });
        this.menuButton = this.page.getByRole('link', { name: 'MENU ' });
        this.contactUsLink = this.page.getByRole('link', { name: ' Contact Us' });
        this.grievancesLink = this.page.getByRole('link', { name: 'Grievances' });
        this.homepageLink = this.page.getByRole('link', { name: 'R.M.K. ENGINEERING COLLEGE (an autonomous institution)', exact: true });
    }

    async closeModal() {
        if (await this.closeModalButton.count() > 0) {
            await this.closeModalButton.click();
        }
    }

    // Method for interacting with each slide
    async interactWithSlide(slideNumber) {
        const slide = this.slides[slideNumber - 1]; // Get the correct slide
        if (await slide.count() > 0) {
            await slide.click();
            // Use expect to verify visibility
            await expect(slide).toBeVisible();
        } else {
            console.log(`Slide ${slideNumber} does not exist.`);
        }
    }

    // Method for verifying the scrolling text
    async verifyScrollingText(expectedText) {
        await expect(this.scrollingText).toHaveText(expectedText);
    }

    // Method for interacting with Quick Links
    async interactWithQuickLinks() {
        await this.quickLinks.nth(1).click();
        await this.quickLinks.first().click();
    }

    // Method for interacting with carousel buttons (e.g., About, Research)
    async interactWithCarousel(carouselButtons) {
        await carouselButtons.nth(1).click();
        await carouselButtons.first().click();
    }

    // Method for navigating to Grievances
    async navigateToGrievances() {
        await this.aboutUsLink.click();
        await this.menuButton.click();
        await this.contactUsLink.click();
        await this.grievancesLink.click();
    }

    // Method for navigating back to the homepage
    async navigateBackToHomepage() {
        await this.homepageLink.click();
    }
}

module.exports = HomePage;
