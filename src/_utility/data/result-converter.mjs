// To run this script: node db/data/result-converter.mjs

import fs from 'fs';

import { data } from './virgina-gf-twenty-four.mjs';
const fileName = 'virginia-gf-results';

// Split the data into rows
const rows = data.trim().split('\n');

// Extract headers
const headers = rows[0].split('\t');

// Convert rows to JSON format
const jsonArray = rows.slice(1).map(row => {
    const values = row.split('\t');
    
    return headers.reduce((obj, header, index) => {
        obj[header] = values[index] || null; // Assign null if no value
        return obj;
    }, {});
});

// Convert the array to a JSON string
const jsonString = JSON.stringify(jsonArray, null, 2); // Pretty-print with 2 spaces

// Write the JSON string to a file
fs.writeFile(`db/data/${fileName}.json`, jsonString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('JSON data saved to output.json');
    }
});


    
