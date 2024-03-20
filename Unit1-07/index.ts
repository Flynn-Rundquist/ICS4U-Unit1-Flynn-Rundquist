/**
 * This program reads a text file of students and a text file of assignments,
 * and then reads the contents of the files and randomly generates marks
 * with a mean of 75 and a standard deviation of 10. It then calculates the
 * average mark for each student and saves the results to a file called "marks.csv".
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/18
 */

import * as fs from "fs"

interface Mark {
  student: string
  marks: number[]
}

// Read student names from file
const students: string[] = fs.readFileSync("student-names.txt")
  .toString()
  .split("\n")
  .map(name => name.trim())

// Read assignments from file
const assignments: string[] = fs.readFileSync("assignments.txt")
  .toString()
  .split("\n")
  .map(assignment => assignment.trim())

// Generate random marks for each student and assignment
const marks: Mark[] = students.map(student => ({
  student,
  marks: assignments.map(() => Math.round(Math.random() * 10 + 70)) // Mean of 75, StdDev of 10
}))

// Calculate average mark for each student
const averageMarks: { student: string; averageMark: number }[] = marks.map(({ student, marks }) => ({
  student,
  averageMark: marks.reduce((sum, mark) => sum + mark, 0) / marks.length
}))

// Write results to marks.csv
const csvContent: string = averageMarks.map(({ student, averageMark }) => `${student},${averageMark}`).join("\n")
fs.writeFileSync("marks.csv", csvContent + "\n")

console.log("Marks.csv created successfully.")
console.log("\nDone.")
