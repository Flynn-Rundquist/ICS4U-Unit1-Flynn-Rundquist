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
    for (let counter = 0; counter < numStudents; counter++) {
        const studentMarks: number[] = [];
        for (let counter2 = 0; counter2 < numAssignments; counter2++) {
            const mark = Math.round(Math.random() * 10 + 65); // mean=75, sd=10
            studentMarks.push(mark)
        }
        marks.push(studentMarks)
    }
    return marks
}

function calculateAverages(marks: number[][]): number[] {
    const averages: number[] = []
    marks.forEach(studentMarks => {
        const sum = studentMarks.reduce((acc, curr) => acc + curr, 0)
        const average = sum / studentMarks.length
        averages.push(average)
    })
    return averages
}

function saveMarksToCSV(averages: number[], students: Student[]): void {
    const header = ['Student', 'Average Mark']
    const rows: string[] = []
    students.forEach((student, index) => {
        const row = [student.name, averages[index].toString()]
        rows.push(row.join(','))
    })
    const csvContent = [header.join(','), ...rows].join('\n')
    fs.writeFileSync('./average-marks.csv', csvContent)
}

try {
    // Read students from file
    const students = fs.readFileSync(process.argv[2], 'utf-8').trim().split(/\r?\n/).map(name => ({ name }))

    // Read assignments from file and count the number of assignments
    const assignments = fs.readFileSync(process.argv[3], 'utf-8').trim().split(/\r?\n/).map(name => ({ name }))
    const numAssignments = assignments.length

    // Generate random marks for each student
    const marks = generateRandomMarks(students.length, numAssignments)

    // Calculate average mark for each student
    const averages = calculateAverages(marks)
    
    // Save average marks to CSV
    saveMarksToCSV(averages, students)

    console.log('Average marks generated and saved to average-marks.csv successfully.')
} catch (error) {
    console.error('Error occurred while reading or writing files:', error)
}
