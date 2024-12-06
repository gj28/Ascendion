const { test, expect } = require("@playwright/test");

test.describe("API GET and POST Request Status Code Verification", () => {
  test("Quality Policy Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/about-us-3/quality-policy/"
    );
    expect(response.status()).toBe(200);
  });

  test("Vision and Mission Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/about-us-3/vision-mission/"
    );
    expect(response.status()).toBe(200);
  });

  test("Management Team Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/about-us-3/management-team/"
    );
    expect(response.status()).toBe(200);
  });

  test("About Us Page (2)", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/about-us-3/about-us-2/"
    );
    expect(response.status()).toBe(200);
  });

  test("About Us Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/about-us-3/about-us/"
    );
    expect(response.status()).toBe(200);
  });

  test("Home Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/"
    );
    expect(response.status()).toBe(200);
  });

  test("Grievance Page", async ({ request }) => {
    const response = await request.get(
      "https://rmkec.ac.in/guru/grievancenew.php"
    );
    expect(response.status()).toBe(200);
  });

  test("Grievances Contact Us Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/contact-us/grievances/"
    );
    expect(response.status()).toBe(200);
  });

  test("Contact Us Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/contact-us/"
    );
    expect(response.status()).toBe(200);
  });

  test("Academics Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/academics/"
    );
    expect(response.status()).toBe(200);
  });

  test("Administration Page", async ({ request }) => {
    const response = await request.get(
      "https://www.rmkec.ac.in/2023/administration/"
    );
    expect(response.status()).toBe(200);
  });

  test("NRJS Browser Session Chunk POST", async ({ request }) => {
    const response = await request.post(
      "https://bam.nr-data.net/browser/blobs?browser_monitoring_key=NRJS-cbd5985082676cdfdf5&type=BrowserSessionChunk&app_id=1588968723&protocol_version=0&ti"
    );
    expect(response.status()).toBe(200);
  });

  test("NRJS JS Errors POST", async ({ request }) => {
    const response = await request.post(
      "https://bam.nr-data.net/jserrors/1/NRJS-cbd5985082676cdfdf5?a=1588968723&sa=1&v=1.261.2&t=Unnamed%20Transaction&rst=21660&ck=0&s=dc8e7adce4b9ecfb&ref="
    );
    expect(response.status()).toBe(200);
  });

  test("Edwisely User Details GET", async ({ request }) => {
    const response = await request.get(
      "https://dbchangesstudent.edwisely.com/auth/v2/getUserPasswordDetails?roll_number=1234567890"
    );
    expect(response.status()).toBe(200);
  });

  test("NextGen Faculty Page", async ({ request }) => {
    const response = await request.get(
      "https://nextgenfaculty.rmkec.ac.in/login.html"
    );
    expect(response.status()).toBe(200);
  });

  test("CP Tracker Log GET", async ({ request }) => {
    const response = await request.get(
      "http://cptracker.rmkec.ac.in:8080/CPTracker/cptlog.jsp"
    );
    expect(response.status()).toBe(200);
  });

  test("CP Tracker Process Controller POST", async ({ request }) => {
    const response = await request.post(
      "http://cptracker.rmkec.ac.in:8080/CPTracker/ProcessController"
    );
    expect(response.status()).toBe(200);
  });
});
