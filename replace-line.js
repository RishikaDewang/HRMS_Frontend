const fs = require('fs');

const filePath = 'path/to/your_file.js';
const originalLine = 'export const filterattendance = (employeeid, startDate, endDate)=>';
const modifiedLine = 'export const filterattendance = (employeeid, startDate, endDate) =>';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
  }

  const result = data.replace(originalLine, modifiedLine);

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      process.exit(1);
    }
    console.log('Line replaced successfully!');
  });
});
