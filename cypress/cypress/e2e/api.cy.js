describe("API GET and POST Request Status Code Verification", () => {
    it("Quality Policy Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/about-us-3/quality-policy/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Vision and Mission Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/about-us-3/vision-mission/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Management Team Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/about-us-3/management-team/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("About Us Page (2)", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/about-us-3/about-us-2/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("About Us Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/about-us-3/about-us/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Home Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Grievance Page", () => {
      cy.request("GET", "https://rmkec.ac.in/guru/grievancenew.php").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Grievances Contact Us Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/contact-us/grievances/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Contact Us Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/contact-us/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Academics Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/academics/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Administration Page", () => {
      cy.request("GET", "https://www.rmkec.ac.in/2023/administration/").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("NRJS Browser Session Chunk POST", () => {
      cy.request("POST", "https://bam.nr-data.net/browser/blobs?browser_monitoring_key=NRJS-cbd5985082676cdfdf5&type=BrowserSessionChunk&app_id=1588968723&protocol_version=0&ti").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("NRJS JS Errors POST", () => {
      cy.request("POST", "https://bam.nr-data.net/jserrors/1/NRJS-cbd5985082676cdfdf5?a=1588968723&sa=1&v=1.261.2&t=Unnamed%20Transaction&rst=21660&ck=0&s=dc8e7adce4b9ecfb&ref=").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("Edwisely User Details GET", () => {
      cy.request("GET", "https://dbchangesstudent.edwisely.com/auth/v2/getUserPasswordDetails?roll_number=1234567890").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("NextGen Faculty Page", () => {
      cy.request("GET", "https://nextgenfaculty.rmkec.ac.in/login.html").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("CP Tracker Log GET", () => {
      cy.request("GET", "http://cptracker.rmkec.ac.in:8080/CPTracker/cptlog.jsp").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it("CP Tracker Process Controller POST", () => {
      cy.request("POST", "http://cptracker.rmkec.ac.in:8080/CPTracker/ProcessController").then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  