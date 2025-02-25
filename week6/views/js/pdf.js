import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

const myDoc = new jsPDF();

const nums = [];

function downloadPDF() {
  myDoc.text("Title", 10, 10);
  myDoc.save("myDoc.pdf");
}

document.querySelector("#download-pdf").addEventListener("click", downloadPDF);

function viewPDF() {
  myDoc.text("Title", 10, 10);

  let numLineY = 15;

  nums.forEach(function (num) {
    myDoc.text(String(num), 10, numLineY);
    numLineY += 5;
  });

  const dataUrl = myDoc.output("bloburl");

  console.log(dataUrl);

  document.querySelector("#pdf-preview").src = dataUrl + "#toolbar=1";
}

function addNum() {
  nums.push(1);
}

document.querySelector("#view-pdf").addEventListener("click", viewPDF);

document.querySelector("#plus").addEventListener("click", addNum);
