/**
 * This program reads a text file of students, and randomly generate marks
 * with a mean of 75 and a standard deviation of 10, and passes them 
 * back as a 2D array of strings in a file called "marks.csv".
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/18
 */

import * as fs from 'fs';

try {
    // Read files and split contents
    const contents = fs.readFileSync('./student-names.txt', 'utf-8').split('\n');

    // Generate marks
    const marks = contents.map((student) => {
        const mark = Math.round(Math.random() * 10 + 65); // mean of 75 and standard deviation of 10
        return `${student},${mark}`;
    }).join('\n');

    // Write marks to file
    fs.writeFileSync('./marks.csv', marks);
    console.log('Marks generated successfully.');
} catch (error) {
    console.error('Error occurred while reading or writing files:', error);
}
