const PDFDocument = require('pdfkit');
const fs = require('fs');
const readlineSync = require('readline-sync');

const doc = new PDFDocument;

// # Pipe its output somewhere, like to a file or HTTP response
// # See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

doc.image('WSU-Page-Header.png', 0, 0, {width: 625, height: 75});
// const headerText = readlineSync.question('WSU Page 1 Header >>> ');
doc.fontSize(20).text('Shasta Storage', 10, 80, {align: 'left'});
doc.image('pdfs/Shasta_Reservoir_Conditions.png', 80, 175, {width: 450})
doc.fontSize(12).text('As of August 12, 2018, storage was approximately 2,940,462AF (down 110,145 AF and at 65% of capacity, down 2% in capacity in the last week). The current level is 95% of the historical average. Total capacity of Shasta is about 4,552,000AF. Shasta’s weekly average inflows are about 5,392AF/day, and outflows are about 19,762AF/day as of Sunday', 10, 105, {align: 'left', width: 600});
doc.end();
// # Finalize PDF file
