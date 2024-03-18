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

interface Student {
    name: string;
}

function generateRandomMarks(numAssignments: number): number[] {
    const studentMarks: number[] = [];
    for (let j = 0; j < numAssignments; j++) {
        const mark = Math.round(Math.random() * 10 + 65);
        studentMarks.push(mark);
    }
    return studentMarks;
}

function calculateAverage(studentMarks: number[]): number {
    const sum = studentMarks.reduce((acc, curr) => acc + curr, 0);
    return sum / studentMarks.length;
}

function saveMarksToCSV(averageMarks: number[], students: Student[]): void {
    const header = ['Student', 'Average Mark'];
    const rows: string[] = [];
    students.forEach((student, index) => {
        const row = [student.name, averageMarks[index].toString()];
        rows.push(row.join(','));
    });
    const csvContent = [header.join(','), ...rows].join('\n');
    fs.writeFileSync('./marks.csv', csvContent);
}

try {
    const students = fs.readFileSync(process.argv[2], 'utf-8')
        .trim()
        .split(/\r?\n/)
        .map(name => ({ name }));

    const numAssignments = fs.readFileSync(process.argv[3], 'utf-8')
        .trim()
        .split(/\r?\n/)
        .length;

    const marks = students.map(() => generateRandomMarks(numAssignments));

    const averageMarks = marks.map(calculateAverage);

    saveMarksToCSV(averageMarks, students);

    console.log('Average marks generated and saved to marks.csv successfully.');
} catch (error) {
    console.error('Error occurred while reading or writing files:', error);
}
