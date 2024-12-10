const { extractTextFromPDF, interpretData } = require('./pdfExtractor');
const { writeOrAppendToExcel } = require('./excelWriter.js'); // Use the updated function

// Path to your PDF file
const filePath = './SPE4A624T16WW.PDF';
const fileName = 'SPE4A624T16WW.xlsx'; // Ensure extension is `.xlsx`
const sheetName = '232ddd3';

async function main() {
    try {
        const pdfText = await extractTextFromPDF(filePath);

        if (pdfText) {
            const data = await interpretData(pdfText);

            // Write or append the extracted data to an Excel file
            writeOrAppendToExcel(data, fileName, sheetName);
            console.log(`Data saved to ${sheetName} in ${fileName}`);
        } else {
            console.error('No PDF text extracted.');
        }
    } catch (error) {
        console.error('Error processing PDF:', error);
    }
}

// Run the main function
main();
