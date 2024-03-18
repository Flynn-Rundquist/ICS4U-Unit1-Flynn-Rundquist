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

interface Assignment {
    name: string;
}

function generateRandomMarks(numStudents: number, numAssignments: number): number[][] {
    const marks: number[][] = [];
    for (let i = 0; i < numStudents; i++) {
        const studentMarks: number[] = [];
        for (let j = 0; j < numAssignments; j++) {
            const mark = Math.round(Math.random() * 10 + 65); // mean of 75 and standard deviation of 10
            studentMarks.push(mark);
        }
        marks.push(studentMarks);
    }
    return marks;
}

function saveMarksToCSV(marks: string[][], students: Student[], assignments: Assignment[]): void {
    const header = ['Student/Assignment', ...assignments.map(assignment => assignment.name)];
    const rows: string[] = [];
    students.forEach((student, index) => {
        const row = [student.name, ...marks[index]];
        rows.push(row.join(','));
    });
    const csvContent = [header.join(','), ...rows].join('\n');
    fs.writeFileSync('./marks.csv', csvContent);
}

try {
    // Read students from file
    const students = fs.readFileSync(process.argv[2], 'utf-8').trim().split(/\r?\n/).map(name => ({ name }));

    // Read assignments from file
    const assignments = fs.readFileSync(process.argv[3], 'utf-8').trim().split(/\r?\n/).map(name => ({ name }));

    // Generate random marks
    const marks = generateRandomMarks(students.length, assignments.length);

    // Convert marks to string array
    const marksStr = marks.map(studentMarks => studentMarks.map(mark => mark.toString()));

    // Save marks to CSV
    saveMarksToCSV(marksStr, students, assignments);

    console.log('Marks generated and saved to marks.csv successfully.');
} catch (error) {
    console.error('Error occurred while reading or writing files:', error);
}
