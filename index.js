// main.js (another file using the module)
const { extractTextFromPDF, interpretData } = require('./pdfExtractor');
const { writeToExcel } = require('./excelWriter.js')
const fs = require('fs');
const xlsx = require('xlsx');  // Import xlsx library

// Path to your PDF file
// const filePath = './SPE4A624T16WW.PDF';
const filePath = './SPE7M024T9819.PDF';
// const filePath = './SPE4A624T21NW.PDF';
const fileName = './extractedData.xlsx';



async function main() {
    try {
        const pdfText = await extractTextFromPDF(filePath);

        if (pdfText) {
            const data = await interpretData(pdfText);

            // Write the extracted data to an Excel file
            writeToExcel(data, fileName);
            console.log('Data saved to extractedData.xlsx');
        } else {
            console.error('No PDF text extracted.');
        }
    } catch (error) {
        console.error('Error processing PDF:', error);
    }
}

// Function to write extracted data to an Excel file in the desired format


// Run the main function
main();
