const fs = require('fs');
const pdfParse = require('pdf-parse');

(async () => {
  try {
    // Read the PDF file into a buffer
    const pdfBuffer = fs.readFileSync('./SPE4A624T21NW.PDF');

    // Parse the PDF
    const data = await pdfParse(pdfBuffer);

    // Extract the text from the parsed data
    const data1 = data.text;

    // Define the regex pattern
    const pattern = /PKGING.*(?:\n.*){2}/;

    // Match the pattern in the text
    const match = data1.match(pattern);

    if (match) {
      console.log("Extracted:", match[0]);
    } else {
      console.log("No match found.");
    }
  } catch (error) {
    console.error("Error processing the PDF:", error.message);
  }
})();
