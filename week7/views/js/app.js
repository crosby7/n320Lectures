import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

class GeneratePDF {
  pdfDoc;
  position = {
    x: 10,
    y: 20,
  };
  margin = {
    x: 10,
    y: 20,
  };
  pageCounter = 1;
  domRef = "";

  /**
   *
   * @param {string} domRefId The id of the iframe element used to preview the PDF
   */
  constructor(domRefId) {
    console.log("GeneratePDF constructor DomRefId: ", domRefId);
    this.pdfDoc = new jsPDF();
    this.pdfDoc.setFontSize(12);
    if (domRefId) {
      this.domRef = document.querySelector(`#${domRefId}`);
      console.log("domRef: ", this.domRef);
    }
  }

  /**
   * @description Downloads the PDF document to device
   */
  downloadPdf() {
    this.pdfDoc.save("mydoc.pdf");
  }

  /**
   *
   * @returns {string} The domain local URL of the PDF document
   */
  getPdfUrl() {
    return this.pdfDoc.output("bloburl");
  }

  /**
   *
   * @param {string} text Content to be displayed in header
   * @param {string} color Color of the text
   */
  addHeader(text, color = "#000000") {
    this.pdfDoc.setTextColor(color);
    this.pdfDoc.setFontSize(24);
    this.pdfDoc.text(text, this.position.x, this.position.y);
    this.position.y += 12;
    this.pdfDoc.setTextColor("#000000");
  }

  /**
   *
   * @param {string} text Content to be displayed in body
   * @param {string} color Color of the text
   */
  addText(text, color = "#000000") {
    this.pdfDoc.setTextColor(color);
    this.pdfDoc.setFontSize(12);
    this.pdfDoc.text(text, this.position.x, this.position.y);
    this.position.y += 6;
    this.pdfDoc.setTextColor("#000000");
  }

  /**
   * @description Deletes all existing PDF pages and creates a new one
   */
  resetPdf() {
    for (let i = this.pageCounter; i > 0; i--) {
      this.pdfDoc.deletePage(i);
    }
    this.pageCounter = 1;
    this.pdfDoc.addPage();

    this.showPdf();
  }

  /**
   * @description Creates a new page in the pdf
   */
  newPage() {
    this.position = { ...this.margin };
    this.pageCounter++;
    this.pdfDoc.addPage();
  }

  /**
   * @description Shows the PDF in the iframe
   */
  showPdf() {
    if (this.domRef) {
      this.domRef.src = this.getPdfUrl();
    }
  }

  /**
   *
   * @param {object} param takes in color and fontSize
   */
  addBackground({ color = "#000000", fontSize = 24 } = {}) {
    const offset = fontSize / 2;
    this.pdfDoc.setFillColor(color);
    this.pdfDoc.rect(
      this.position.x,
      this.position.y - (offset * 3) / 4,
      100,
      offset,
      "F"
    );
    this.pdfDoc.setFillColor("#FFFFFF");
  }
}

const myPdf = new GeneratePDF("pdf-preview");

myPdf.addBackground({ color: "#ff9e00", fontSize: 24 });
myPdf.addHeader("Hello World", "#ffffff");
myPdf.addBackground({ color: "#aeaeae", fontSize: 12 });
myPdf.addText("This is a test PDF document.", "#ffffff");

myPdf.newPage();
myPdf.addHeader("Second Page");

myPdf.showPdf();
