// excelWriter.js
const xlsx = require('xlsx');

// Function to write the extracted data to an Excel file
function writeToExcel(data, fileName) {
    try {
        const ws_data = [];
        
        // Convert the extracted data into key-value format
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // If value is an object, display each key-value pair in new lines
                ws_data.push([key, '']);
                for (const [nestedKey, nestedValue] of Object.entries(value)) {
                    ws_data.push([`    ${nestedKey}`, nestedValue]);
                }
            } else if (Array.isArray(value)) {
                // If value is an array, display each item in new lines
                ws_data.push([key, '']);
                value.forEach(item => {
                	// console.log(item)
                    ws_data.push([``,` ${item.cage }`, `${item.contractNumber }`, `${item.quantity }`, `${item.unitCost }`, `${item.awdDate }`, `${item.surplusMaterial }`]);
                });
            } else {
                // If it's a simple value, just add the key and value
                ws_data.push([key, value]);
            }
        }

        // Create a new workbook and write the data to the sheet
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.aoa_to_sheet(ws_data);
        xlsx.utils.book_append_sheet(wb, ws, 'Extracted Data');

        // Write the workbook to a file
        xlsx.writeFile(wb, fileName);
    } catch (error) {
        console.error('Error writing to Excel file:', error);
    }
}

module.exports = { writeToExcel };
