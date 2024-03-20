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

import * as fs from "fs"

interface Mark {
  student: string
  assignment: string
  mark: number
}

const marks: Mark[] = []

const students = fs.readFileSync("student-names.txt")
  .toString()
  .split("\n")

const assignments = fs.readFileSync("assignments.txt")
  .toString()
  .split("\n")

for (let counter = 0; counter < students.length; counter++) {
  for (let jounter = 0; jounter < assignments.length; jounter++) {
    marks.push({
      student: students[counter],
      assignment: assignments[jounter],
      mark: Math.random() * 100
    })
  }
}

fs.writeFileSync("marks.csv", JSON.stringify(marks))

console.log("Marks.csv created successfully.")
console.log("\nDone.")
