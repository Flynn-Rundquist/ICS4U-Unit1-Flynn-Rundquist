/**
 * This program reads a text file of students and a text file of assignments, 
 * and then reads the contents of the files and randomly generate marks
 * with a mean of 75 and a standard deviation of 10, and passes them 
 * back as a 2D array of strings in a file called "marks.csv".
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/18
 */

import * as fs from 'fs';

try {
    // Read student names from file
    const names = fs.readFileSync('./student-names.txt', 'utf-8');
    const namesArr = names.trim().split(/\r?\n/);

    // Read assignments from file
    const assignments = fs.readFileSync('./assignments.txt', 'utf-8').split('\n');
    const assignmentsArr = assignments.map(assignment => {
        const parts = assignment.split(',');
        if (parts.length !== 2) {
            throw new Error(`Invalid format for assignment: ${assignment}`);
        }
        const [name, weightString] = parts;
        const weight = parseFloat(weightString.replace('%', '').trim());
        return { name, weight };
    });

    // Generate marks for assignments
    const marks: string[][] = [];
    namesArr.forEach(studentName => {
        const studentMarks = assignmentsArr.map(assignment => {
            const mark = Math.round(Math.random() * 10 + 65); // mean of 75 and standard deviation of 10
            return `${assignment.name},${mark}`;
        });
        marks.push(studentMarks);
    });

    // Write marks to file
    const marksCSV = marks.map(studentMarks => studentMarks.join(',')).join('\n');
    fs.writeFileSync('./marks.csv', marksCSV);
    console.log('Marks generated successfully.');
} catch (error) {
    console.error('Error occurred while reading or writing files:', error);
}
